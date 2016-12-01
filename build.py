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

Blockly.FieldColour.COLOURS = ['#000', '#400', '#600', '#800', '#a00', '#b00',
                               '#c00', '#d00', '#e00', '#f00'];
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

EGGSMELL_BLOCK = Template("""    <block type="$name"></block>\n""")

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
            rendered_defs.append(EGGSMELL_BLOCK.substitute(name=name))
        rendered.append(EGGSMELL_CATEGORY.substitute(name=category['name'],
                                                     colour=category['colour'],
                                                     blocks=''.join(rendered_defs)))
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
