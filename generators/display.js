Blockly.Python['display_get_pixel'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['display_set_pixel'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Python['display_clear'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Python['display_show_image'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Python['display_show_animation'] = function(block) {
  var value_images = Blockly.Python.valueToCode(block, 'images', Blockly.Python.ORDER_ATOMIC);
  var number_delay = block.getFieldValue('delay');
  var checkbox_wait = block.getFieldValue('wait') == 'TRUE';
  var checkbox_loop = block.getFieldValue('loop') == 'TRUE';
  var checkbox_clear = block.getFieldValue('clear') == 'TRUE';
  // TODO: Assemble Python into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Python['display_scroll'] = function(block) {
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Python['display_on'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Python['display_off'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Python['display_is_on'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
