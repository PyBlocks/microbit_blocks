Blockly.Python['neopixel_initialise'] = function(block) {
  var number_n = block.getFieldValue('n');
  var dropdown_pin = block.getFieldValue('pin');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['neopixel_clear'] = function(block) {
  var value_neopixel_object = Blockly.Python.valueToCode(block, 'neopixel_object', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['neopixel_show'] = function(block) {
  var value_neopixel_object = Blockly.Python.valueToCode(block, 'neopixel_object', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['neopixel_set'] = function(block) {
  var value_pixel = Blockly.Python.valueToCode(block, 'pixel', Blockly.Python.ORDER_ATOMIC);
  var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
  var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
  var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);
  var value_neopixel_object = Blockly.Python.valueToCode(block, 'neopixel_object', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};
