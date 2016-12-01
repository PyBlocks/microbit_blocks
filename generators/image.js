'use strict';

goog.provide('Blockly.Python.image');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('microbit');


Blockly.Python['microbit_image_builtins'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var dropdown_image = block.getFieldValue('image');
  var code = 'Image.' + dropdown_image;
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_image_copy'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var code = value_image + '.copy()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_image_invert'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var code = value_image + '.invert()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microit_image_create'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var colour_00 = block.getFieldValue('00');
  var colour_01 = block.getFieldValue('01');
  var colour_02 = block.getFieldValue('02');
  var colour_03 = block.getFieldValue('03');
  var colour_04 = block.getFieldValue('04');
  var colour_10 = block.getFieldValue('10');
  var colour_11 = block.getFieldValue('11');
  var colour_12 = block.getFieldValue('12');
  var colour_13 = block.getFieldValue('13');
  var colour_14 = block.getFieldValue('14');
  var colour_20 = block.getFieldValue('20');
  var colour_21 = block.getFieldValue('21');
  var colour_22 = block.getFieldValue('22');
  var colour_23 = block.getFieldValue('23');
  var colour_24 = block.getFieldValue('24');
  var colour_30 = block.getFieldValue('30');
  var colour_31 = block.getFieldValue('31');
  var colour_32 = block.getFieldValue('32');
  var colour_33 = block.getFieldValue('33');
  var colour_34 = block.getFieldValue('34');
  var colour_40 = block.getFieldValue('40');
  var colour_41 = block.getFieldValue('41');
  var colour_42 = block.getFieldValue('42');
  var colour_43 = block.getFieldValue('43');
  var colour_44 = block.getFieldValue('44');
  var code = 'Image("' + colour_00 + colour_01 + colour_02 + colour_03 + colour_04 + ':' + colour_10 + colour_11 + colour_12 + colour_13 + colour_14 + ':' + colour_20 + colour_21 + colour_22 + colour_23 + colour_24 + ':' + colour_30 + colour_31 + colour_32 + colour_33 + colour_34 + ':' + colour_40 + colour_41 + colour_42 + colour_43 + colour_44'")';
  return [code, Blockly.Python.ORDER_MEMBER];
};
