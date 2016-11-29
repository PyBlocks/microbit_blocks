Blockly.Python['microbit_panic'] = function(block) {
  var number_code = block.getFieldValue('code');
  // TODO: Assemble Python into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Python['microbit_reset'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Python['microbit_sleep'] = function(block) {
  var value_duration = Blockly.Python.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Python['microbit_running_time'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['microbit_temperature'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
