#!/usr/bin/env python3
"""
Build blocks and translations strings.
"""
import sys
import json
import copy
from os import listdir
from os.path import isfile, join
from string import Template


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


def get_categories(path='definitions'):
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


def get_code(definitions):
    """
    Given a list of definitions will return the associated code.
    """
    code = []
    for definition in definitions:
        new_def = copy.deepcopy(definition)
        name = 'microbit_' + new_def['type']
        del new_def['type']
        code.append(DEFINITION.substitute(name=name,
                                          definition=json.dumps(new_def)))
    return ''.join(code)


def get_eggsmell(categories):
    """
    Gets XML (pronounced eggsmell) for toolbox. Seriously, this is far quicker
    than faffing about with XML.
    """
    rendered = []
    colour = 45
    for category in categories:
        rendered_defs = []
        for definition in category['definitions']:
            name = 'microbit_' + definition['type']
            colour = definition['colour']
            rendered_defs.append(EGGSMELL_BLOCK.substitute(name=name))
        rendered.append(EGGSMELL_CATEGORY.substitute(name=category['name'],
                                                     colour=colour,
                                                     blocks=''.join(rendered_defs)))
    return EGGSMELL.substitute(category=''.join(rendered))


def generate_translation(json_object):
    """
    Given a JSON representation of a block will return a list of JavaScript
    statements defining the attributes to be translated.
    """
    result = []
    fields = ['tooltip', 'helpUrl']
    template = "Blockly.Msg.{} = {};\n"
    for k in json_object.keys():
        if k in fields:
            result.append(template.format(k, repr(json_object[k])))
        elif k.startswith('message'):
            pass


def main(languages):
    categories = get_categories()
    with open('blocks/microbit.js', 'w') as output:
        output.write(HEAD)
        for category in categories:
            output.write(get_code(category['definitions']))
    with open('toolbox.xml', 'w') as toolbox:
        toolbox.write(get_eggsmell(categories))


if __name__ == '__main__':
    main(sys.argv[1:])
