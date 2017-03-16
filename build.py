#!/usr/bin/env python3
"""
Build blocks and translations strings.

It's a hack. Needs refactoring!

Example usage:

    $ ./build.py en es de

Will generate new blocks in the "blocks" directory derived from the JSON
definitions in the definitions directory. Translation strings for languages
with the given language codes will be created in the "messages" directory.
These will initially contain the English text defined in the original JSON.
"""
import sys
import json
import copy
import re
from os import listdir, makedirs
from os.path import isfile, join, exists
from string import Template

TRANS_TOKEN = '____{}____'

HEAD = """'use strict';

goog.provide('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');
goog.require('Blockly.constants');

Blockly.FieldColour.COLOURS = ['#f00', '#e00', '#d00', '#c00', '#b00', '#a00',
                               '#800', '#600', '#400', '#000'];
Blockly.FieldColour.COLUMNS = 5;


"""

DEFINITION = Template("""Blockly.Blocks['$name'] = {
  init: function() {
    this.jsonInit($definition);
  }
};


""")

EGGSMELL = Template("""<xml id="blockly-toolbox" style="display: none">
$category</xml>
""")

EGGSMELL_CATEGORY = Template("""  <category name="$name" colour="$colour">
$blocks  </category>
""")

EGGSMELL_BLOCK = Template("""    <block type="$name">$shadows</block>\n""")

EGGSMELL_SHADOWS = Template('<value name="$shadow_name">'
                            '<shadow type="$shadow_type">'
                            '<field name="$shadow_item_name">'
                            '$shadow_value'
                            '</field>'
                            '</shadow>'
                            '</value>')

SHADOW_SPECS = {
    'Number': {
        'type': 'math_number',
        'name': 'NUM',
        'value': '0',
    },
    'String': {
        'type': 'text',
        'name': 'TEXT',
        'value': 'Some text',
    },
}

SHADOW_OVERRIDES = {
    'microbit_display_set_pixel': {
        'value': '9',
    },
    'microbit_display_scroll': {
        'message': 'Hello, World!',
    },
    'microbit_microbit_sleep': {
        'duration': '1000',
    },
    'microbit_music_set_tempo': {
        'ticks': '4',
        'bpm': '120',
    },
    'microbit_speech_say': {
        'english': 'Exterminate!',
    },
    'microbit_speech_pronounce': {
        'phonemes': '/HEH5EH4EH3EH2EH2EH3EH4EH5EHLP.',
    },
    'microbit_speech_sing': {
        'song': '#115DOWWWW',
    }
}


LANGUAGE_HEAD = Template("""'use strict';

goog.provide('Blockly.Msg.$language');

goog.require('Blockly.Msg');


""")


def get_categories(path='definitions'):
    """
    Return data structures representing the various block definitions.
    """
    files = sorted([f for f in listdir(path) if
             isfile(join(path, f)) and f.endswith('.js')])
    result = []
    for f in files:
        with open(join(path, f)) as def_file:
            result.append({
              'name': f.replace('.js', '').capitalize(),
              'definitions': json.loads(def_file.read())
            })
    return result


def get_code(definitions, colour):
    """
    Given a list of definitions will return the associated code.
    """
    code = []
    for definition in definitions:
        new_def = copy.deepcopy(definition)
        name = new_def['type']
        del new_def['type']
        new_def['colour'] = colour
        code.append(DEFINITION.substitute(name=name,
                                          definition=json.dumps(new_def)))
    code = ''.join(code)
    matcher = re.compile(r'\"____(?P<name>[\w]+)____\"')
    matched = matcher.findall(code)
    for name in matched:
        code = code.replace('"' + TRANS_TOKEN.format(name) + '"',
                            'Blockly.Msg.{}'.format(name))
    return code


def get_eggsmell(categories):
    """
    Gets XML (pronounced eggsmell) for toolbox. Seriously, this is far quicker
    than faffing about with XML.
    """
    rendered = []
    for category in categories:
        rendered_defs = []
        for definition in category['definitions']:
            name = definition['type']
            shadows = ''
            for arg in definition.get('args0', []):
                if arg['type'] == 'input_value' and \
                arg['check'] in SHADOW_SPECS:
                    spec = SHADOW_SPECS[arg['check']]
                    s_name = arg['name']
                    s_type = spec['type']
                    s_item_name = spec['name']
                    s_val = spec['value']
                    if name in SHADOW_OVERRIDES:
                        if s_name in SHADOW_OVERRIDES[name]:
                            s_val = SHADOW_OVERRIDES[name][s_name]
                    shadows += EGGSMELL_SHADOWS.substitute(shadow_name=s_name,
                                                           shadow_type=s_type,
                                                           shadow_item_name=s_item_name,
                                                           shadow_value=s_val)
            rendered_defs.append(EGGSMELL_BLOCK.substitute(name=name,
                                                           shadows=shadows))
        blocks = ''.join(rendered_defs)
        rendered.append(EGGSMELL_CATEGORY.substitute(name=category['name'],
                                                     colour=category['colour'],
                                                     blocks=blocks))
    return EGGSMELL.substitute(category=''.join(rendered))


def generate_translation(definition):
    """
    Given a JSON representation of a definition will return a list of
    JavaScript statements defining the attributes to be translated.
    """
    result = []
    fields = ['tooltip', 'helpUrl']
    template = "Blockly.Msg.{} = {};\n"
    name = definition['type']
    for k in definition.keys():
        trans_name = '{}_{}'.format(name, k).upper()
        if k in fields:
            result.append(template.format(trans_name, repr(definition[k])))
            definition[k] = TRANS_TOKEN.format(trans_name)
        elif k.startswith('message'):
            result.append(template.format(trans_name, repr(definition[k])))
            definition[k] = TRANS_TOKEN.format(trans_name)
    return result


def main(languages):
    categories = get_categories()
    colour = 0
    step = 360 // len(categories)
    for i, category in enumerate(categories):
        category['colour'] = colour
        colour = step * (i + 1)
    for lang in languages:
        lang_content = []
        lang_content.append(LANGUAGE_HEAD.substitute(language=lang))
        for category in categories:
            for definition in category['definitions']:
                lang_content.extend(generate_translation(definition))
        translation_strings = ''.join(lang_content)
        directory = join('messages', lang)
        if not exists(directory):
            mkdirs(directory)
        with open(join(directory, 'messages.js'), 'w') as msgs:
            msgs.write(translation_strings)

    with open('blocks/microbit.js', 'w') as output:
        output.write(HEAD)
        for category in categories:
            output.write(get_code(category['definitions'], category['colour']))
    with open('toolbox.xml', 'w') as toolbox:
        toolbox.write(get_eggsmell(categories))


if __name__ == '__main__':
    main(sys.argv[1:])
