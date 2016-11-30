'use strict';

goog.provide('Blockly.Python.accelerometer');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('microbit');


Blockly.Python['microbit_accelerometer_get_x'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'accelerometer.get_x()'
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['accelerometer_get_y'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['accelerometer_get_z'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['accelerometer_was_gesture'] = function(block) {
  var dropdown_gesture = block.getFieldValue('gesture');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['accelerometer_is_gesture'] = function(block) {
  var dropdown_gesture = block.getFieldValue('gesture');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['accelerometer_get_gestures'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['accelerometer_current_gesture'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
