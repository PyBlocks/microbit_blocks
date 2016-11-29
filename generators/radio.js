Blockly.Python['radio_on'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['radio_off'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['radio_config'] = function(block) {
  var number_length = block.getFieldValue('length');
  var number_queue = block.getFieldValue('queue');
  var number_channel = block.getFieldValue('channel');
  var number_power = block.getFieldValue('power');
  var dropdown_data_rate = block.getFieldValue('data_rate');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['radio_reset'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['radio_send_string'] = function(block) {
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['radio_receive'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
