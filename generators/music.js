Blockly.Python['music_play_built_in'] = function(block) {
  var dropdown_melody = block.getFieldValue('melody');
  var checkbox_wait = block.getFieldValue('wait') == 'TRUE';
  var checkbox_loop = block.getFieldValue('loop') == 'TRUE';
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['music_pitch'] = function(block) {
  var number_pitch = block.getFieldValue('pitch');
  var number_duration = block.getFieldValue('duration');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['music_play_list_of_notes'] = function(block) {
  var value_notes = Blockly.Python.valueToCode(block, 'notes', Blockly.Python.ORDER_ATOMIC);
  var checkbox_wait = block.getFieldValue('wait') == 'TRUE';
  var checkbox_loop = block.getFieldValue('loop') == 'TRUE';
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['music_reset'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['music_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['music_set_tempo'] = function(block) {
  var value_ticks = Blockly.Python.valueToCode(block, 'ticks', Blockly.Python.ORDER_ATOMIC);
  var value_bpm = Blockly.Python.valueToCode(block, 'bpm', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['music_get_tempo'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
