'use strict';

goog.provide('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');
goog.require('Blockly.constants');

Blockly.FieldColour.COLOURS = ['#000', '#400', '#600', '#800', '#a00', '#b00',
                               '#c00', '#d00', '#e00', '#f00'];
Blockly.FieldColour.COLUMNS = 5;


Blockly.Blocks['microbit_accelerometer_get_x'] = {
  init: function() {
    this.jsonInit({"colour": 0, "output": "Number", "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_X_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_X_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_X_HELPURL});
  }
};


Blockly.Blocks['microbit_accelerometer_get_y'] = {
  init: function() {
    this.jsonInit({"colour": 0, "output": "Number", "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Y_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Y_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Y_HELPURL});
  }
};


Blockly.Blocks['microbit_accelerometer_get_z'] = {
  init: function() {
    this.jsonInit({"colour": 0, "output": "Number", "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Z_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Z_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_Z_HELPURL});
  }
};


Blockly.Blocks['microbit_accelerometer_was_gesture'] = {
  init: function() {
    this.jsonInit({"colour": 0, "args0": [{"options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]], "name": "gesture", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_WAS_GESTURE_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_WAS_GESTURE_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_WAS_GESTURE_HELPURL, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_accelerometer_is_gesture'] = {
  init: function() {
    this.jsonInit({"colour": 0, "args0": [{"options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]], "name": "gesture", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_IS_GESTURE_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_IS_GESTURE_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_IS_GESTURE_HELPURL, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_accelerometer_get_gestures'] = {
  init: function() {
    this.jsonInit({"colour": 0, "output": "Array", "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_GESTURES_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_GESTURES_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_GET_GESTURES_HELPURL});
  }
};


Blockly.Blocks['microbit_accelerometer_current_gesture'] = {
  init: function() {
    this.jsonInit({"colour": 0, "output": "String", "message0": Blockly.Msg.MICROBIT_ACCELEROMETER_CURRENT_GESTURE_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_ACCELEROMETER_CURRENT_GESTURE_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_ACCELEROMETER_CURRENT_GESTURE_HELPURL});
  }
};


Blockly.Blocks['microbit_button_is_pressed'] = {
  init: function() {
    this.jsonInit({"colour": 32, "args0": [{"options": [["A", "A"], ["B", "B"]], "name": "button", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_BUTTON_IS_PRESSED_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_BUTTON_IS_PRESSED_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_BUTTON_IS_PRESSED_HELPURL, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_button_was_pressed'] = {
  init: function() {
    this.jsonInit({"colour": 32, "args0": [{"options": [["A", "A"], ["B", "B"]], "name": "button", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_BUTTON_WAS_PRESSED_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_BUTTON_WAS_PRESSED_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_BUTTON_WAS_PRESSED_HELPURL, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_button_get_presses'] = {
  init: function() {
    this.jsonInit({"colour": 32, "args0": [{"options": [["A", "A"], ["B", "B"]], "name": "button", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_BUTTON_GET_PRESSES_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_BUTTON_GET_PRESSES_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_BUTTON_GET_PRESSES_HELPURL, "output": "Number"});
  }
};


Blockly.Blocks['microbit_compass_calibrate'] = {
  init: function() {
    this.jsonInit({"colour": 64, "previousStatement": null, "message0": Blockly.Msg.MICROBIT_COMPASS_CALIBRATE_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_COMPASS_CALIBRATE_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_COMPASS_CALIBRATE_HELPURL, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_compass_is_calibrated'] = {
  init: function() {
    this.jsonInit({"colour": 64, "output": "Boolean", "message0": Blockly.Msg.MICROBIT_COMPASS_IS_CALIBRATED_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_COMPASS_IS_CALIBRATED_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_COMPASS_IS_CALIBRATED_HELPURL});
  }
};


Blockly.Blocks['microbit_compass_heading'] = {
  init: function() {
    this.jsonInit({"colour": 64, "output": "Number", "message0": Blockly.Msg.MICROBIT_COMPASS_HEADING_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_COMPASS_HEADING_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_COMPASS_HEADING_HELPURL});
  }
};


Blockly.Blocks['microbit_compass_get_field_strength'] = {
  init: function() {
    this.jsonInit({"colour": 64, "output": "Number", "message0": Blockly.Msg.MICROBIT_COMPASS_GET_FIELD_STRENGTH_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_COMPASS_GET_FIELD_STRENGTH_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_COMPASS_GET_FIELD_STRENGTH_HELPURL});
  }
};


Blockly.Blocks['microbit_display_get_pixel'] = {
  init: function() {
    this.jsonInit({"colour": 96, "args0": [{"check": "Number", "name": "x", "type": "input_value"}, {"check": "Number", "name": "y", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_DISPLAY_GET_PIXEL_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_DISPLAY_GET_PIXEL_TOOLTIP, "inputsInline": true, "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_GET_PIXEL_HELPURL, "output": "Number"});
  }
};


Blockly.Blocks['microbit_display_set_pixel'] = {
  init: function() {
    this.jsonInit({"colour": 96, "nextStatement": null, "args0": [{"check": "Number", "name": "x", "type": "input_value"}, {"check": "Number", "name": "y", "type": "input_value"}, {"check": "Number", "name": "value", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_DISPLAY_SET_PIXEL_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_DISPLAY_SET_PIXEL_TOOLTIP, "previousStatement": null, "inputsInline": true, "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_SET_PIXEL_HELPURL});
  }
};


Blockly.Blocks['microbit_display_clear'] = {
  init: function() {
    this.jsonInit({"colour": 96, "previousStatement": null, "message0": Blockly.Msg.MICROBIT_DISPLAY_CLEAR_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_DISPLAY_CLEAR_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_CLEAR_HELPURL, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_display_show_image'] = {
  init: function() {
    this.jsonInit({"colour": 96, "args0": [{"check": "microbit_image", "name": "image", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_SHOW_IMAGE_HELPURL});
  }
};


Blockly.Blocks['microbit_display_show_animation'] = {
  init: function() {
    this.jsonInit({"colour": 96, "args0": [{"check": "Array", "name": "images", "type": "input_value"}, {"value": 400, "min": 0, "name": "delay", "type": "field_number"}, {"type": "input_dummy"}, {"checked": true, "name": "wait", "type": "field_checkbox"}, {"type": "input_dummy"}, {"checked": false, "name": "loop", "type": "field_checkbox"}, {"type": "input_dummy"}, {"checked": false, "name": "clear", "type": "field_checkbox"}], "message0": Blockly.Msg.MICROBIT_DISPLAY_SHOW_ANIMATION_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_DISPLAY_SHOW_ANIMATION_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_SHOW_ANIMATION_HELPURL});
  }
};


Blockly.Blocks['microbit_display_scroll'] = {
  init: function() {
    this.jsonInit({"colour": 96, "args0": [{"check": "String", "name": "message", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_DISPLAY_SCROLL_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_DISPLAY_SCROLL_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_SCROLL_HELPURL});
  }
};


Blockly.Blocks['microbit_display_on'] = {
  init: function() {
    this.jsonInit({"colour": 96, "previousStatement": null, "message0": Blockly.Msg.MICROBIT_DISPLAY_ON_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_DISPLAY_ON_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_ON_HELPURL, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_display_off'] = {
  init: function() {
    this.jsonInit({"colour": 96, "previousStatement": null, "message0": Blockly.Msg.MICROBIT_DISPLAY_OFF_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_DISPLAY_OFF_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_OFF_HELPURL, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_display_is_on'] = {
  init: function() {
    this.jsonInit({"colour": 96, "output": "Boolean", "message0": Blockly.Msg.MICROBIT_DISPLAY_IS_ON_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_DISPLAY_IS_ON_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_DISPLAY_IS_ON_HELPURL});
  }
};


Blockly.Blocks['microbit_image_builtins'] = {
  init: function() {
    this.jsonInit({"colour": 128, "args0": [{"options": [["HEART", "HEART"], ["HEART_SMALL", "HEART_SMALL"], ["HAPPY", "HAPPY"], ["SMILE", "SMILE"], ["SAD", "SAD"], ["CONFUSED", "CONFUSED"], ["ANGRY", "ANGRY"], ["ASLEEP", "ASLEEP"], ["SURPRISED", "SURPRISED"], ["SILLY", "SILLY"], ["FABULOUS", "FABULOUS"], ["MEH", "MEH"], ["YES", "YES"], ["NO", "NO"], ["CLOCK12", "CLOCK12"], ["CLOCK11", "CLOCK11"], ["CLOCK10", "CLOCK10"], ["CLOCK9", "CLOCK9"], ["CLOCK8", "CLOCK8"], ["CLOCK7", "CLOCK7"], ["CLOCK6", "CLOCK6"], ["CLOCK5", "CLOCK5"], ["CLOCK4", "CLOCK4"], ["CLOCK3", "CLOCK3"], ["CLOCK2", "CLOCK2"], ["CLOCK1", "CLOCK1"], ["ARROW_N", "ARROW_N"], ["ARROW_NE", "ARROW_NE"], ["ARROW_E", "ARROW_E"], ["ARROW_SE", "ARROW_SE"], ["ARROW_S", "ARROW_S"], ["ARROW_SW", "ARROW_SW"], ["ARROW_W", "ARROW_W"], ["ARROW_NW", "ARROW_NW"], ["TRIANGLE", "TRIANGLE"], ["TRIANGLE_LEFT", "TRIANGLE_LEFT"], ["CHESSBOARD", "CHESSBOARD"], ["DIAMOND", "DIAMOND"], ["DIAMOND_SMALL", "DIAMOND_SMALL"], ["SQUARE", "SQUARE"], ["SQUARE_SMALL", "SQUARE_SMALL"], ["RABBIT", "RABBIT"], ["COW", "COW"], ["MUSIC_CROTCHET", "MUSIC_CROTCHET"], ["MUSIC_QUAVER", "MUSIC_QUAVER"], ["MUSIC_QUAVERS", "MUSIC_QUAVERS"], ["PITCHFORK", "PITCHFORK"], ["XMAS", "XMAS"], ["PACMAN", "PACMAN"], ["TARGET", "TARGET"], ["TSHIRT", "TSHIRT"], ["ROLLERSKATE", "ROLLERSKATE"], ["DUCK", "DUCK"], ["HOUSE", "HOUSE"], ["TORTOISE", "TORTOISE"], ["BUTTERFLY", "BUTTERFLY"], ["STICKFIGURE", "STICKFIGURE"], ["GHOST", "GHOST"], ["SWORD", "SWORD"], ["GIRAFFE", "GIRAFFE"], ["SKULL", "SKULL"], ["UMBRELLA", "UMBRELLA"], ["SNAKE", "SNAKE"], ["ALL_CLOCKS", "ALL_CLOCKS"], ["ALL_ARROWS", "ALL_ARROWS"]], "name": "image", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_IMAGE_BUILTINS_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_IMAGE_BUILTINS_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_IMAGE_BUILTINS_HELPURL, "output": "microbit_image"});
  }
};


Blockly.Blocks['microbit_image_copy'] = {
  init: function() {
    this.jsonInit({"colour": 128, "args0": [{"check": "microbit_image", "name": "image", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_IMAGE_COPY_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_IMAGE_COPY_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_IMAGE_COPY_HELPURL, "output": "microbit_image"});
  }
};


Blockly.Blocks['microbit_image_invert'] = {
  init: function() {
    this.jsonInit({"colour": 128, "args0": [{"check": "microbit_image", "name": "image", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_IMAGE_INVERT_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_IMAGE_INVERT_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_IMAGE_INVERT_HELPURL, "output": "microbit_image"});
  }
};


Blockly.Blocks['microbit_image_create'] = {
  init: function() {
    this.jsonInit({"colour": 128, "args0": [{"type": "input_dummy"}, {"colour": "#000000", "name": "00", "type": "field_colour"}, {"colour": "#000000", "name": "01", "type": "field_colour"}, {"colour": "#000000", "name": "02", "type": "field_colour"}, {"colour": "#000000", "name": "03", "type": "field_colour"}, {"colour": "#000000", "name": "04", "type": "field_colour"}, {"type": "input_dummy"}, {"colour": "#000000", "name": "10", "type": "field_colour"}, {"colour": "#000000", "name": "11", "type": "field_colour"}, {"colour": "#000000", "name": "12", "type": "field_colour"}, {"colour": "#000000", "name": "13", "type": "field_colour"}, {"colour": "#000000", "name": "14", "type": "field_colour"}, {"type": "input_dummy"}, {"colour": "#000000", "name": "20", "type": "field_colour"}, {"colour": "#000000", "name": "21", "type": "field_colour"}, {"colour": "#000000", "name": "22", "type": "field_colour"}, {"colour": "#000000", "name": "23", "type": "field_colour"}, {"colour": "#000000", "name": "24", "type": "field_colour"}, {"type": "input_dummy"}, {"colour": "#000000", "name": "30", "type": "field_colour"}, {"colour": "#000000", "name": "31", "type": "field_colour"}, {"colour": "#000000", "name": "32", "type": "field_colour"}, {"colour": "#000000", "name": "33", "type": "field_colour"}, {"colour": "#000000", "name": "34", "type": "field_colour"}, {"type": "input_dummy"}, {"colour": "#000000", "name": "40", "type": "field_colour"}, {"colour": "#000000", "name": "41", "type": "field_colour"}, {"colour": "#000000", "name": "42", "type": "field_colour"}, {"colour": "#000000", "name": "43", "type": "field_colour"}, {"colour": "#000000", "name": "44", "type": "field_colour"}], "message0": Blockly.Msg.MICROBIT_IMAGE_CREATE_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_IMAGE_CREATE_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_IMAGE_CREATE_HELPURL, "output": "microbit_image"});
  }
};


Blockly.Blocks['microbit_microbit_panic'] = {
  init: function() {
    this.jsonInit({"colour": 160, "args0": [{"value": 0, "min": 0, "name": "code", "max": 255, "type": "field_number"}], "message0": Blockly.Msg.MICROBIT_MICROBIT_PANIC_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_MICROBIT_PANIC_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_MICROBIT_PANIC_HELPURL});
  }
};


Blockly.Blocks['microbit_microbit_reset'] = {
  init: function() {
    this.jsonInit({"colour": 160, "previousStatement": null, "message0": Blockly.Msg.MICROBIT_MICROBIT_RESET_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_MICROBIT_RESET_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_MICROBIT_RESET_HELPURL, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_microbit_sleep'] = {
  init: function() {
    this.jsonInit({"colour": 160, "nextStatement": null, "args0": [{"check": "Number", "name": "duration", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_MICROBIT_SLEEP_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_MICROBIT_SLEEP_TOOLTIP, "previousStatement": null, "inputsInline": true, "helpUrl": Blockly.Msg.MICROBIT_MICROBIT_SLEEP_HELPURL});
  }
};


Blockly.Blocks['microbit_microbit_running_time'] = {
  init: function() {
    this.jsonInit({"colour": 160, "output": "Number", "message0": Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_MICROBIT_RUNNING_TIME_HELPURL});
  }
};


Blockly.Blocks['microbit_microbit_temperature'] = {
  init: function() {
    this.jsonInit({"colour": 160, "output": "Number", "message0": Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_MICROBIT_TEMPERATURE_HELPURL});
  }
};


Blockly.Blocks['microbit_music_play_built_in'] = {
  init: function() {
    this.jsonInit({"colour": 192, "args0": [{"options": [["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]], "name": "melody", "type": "field_dropdown"}, {"type": "input_dummy"}, {"checked": true, "name": "wait", "type": "field_checkbox"}, {"type": "input_dummy"}, {"checked": false, "name": "loop", "type": "field_checkbox"}], "message0": Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_HELPURL});
  }
};


Blockly.Blocks['microbit_music_pitch'] = {
  init: function() {
    this.jsonInit({"colour": 192, "nextStatement": null, "args0": [{"value": 440, "min": 0, "name": "pitch", "type": "field_number"}, {"type": "input_dummy"}, {"value": 1000, "min": 0, "name": "duration", "type": "field_number"}], "message0": Blockly.Msg.MICROBIT_MUSIC_PITCH_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_MUSIC_PITCH_TOOLTIP, "previousStatement": null, "inputsInline": true, "helpUrl": Blockly.Msg.MICROBIT_MUSIC_PITCH_HELPURL});
  }
};


Blockly.Blocks['microbit_music_play_list_of_notes'] = {
  init: function() {
    this.jsonInit({"colour": 192, "args0": [{"check": "Array", "name": "notes", "type": "input_value"}, {"checked": true, "name": "wait", "type": "field_checkbox"}, {"type": "input_dummy"}, {"checked": false, "name": "loop", "type": "field_checkbox"}], "message0": Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_HELPURL});
  }
};


Blockly.Blocks['microbit_music_reset'] = {
  init: function() {
    this.jsonInit({"colour": 192, "previousStatement": null, "message0": Blockly.Msg.MICROBIT_MUSIC_RESET_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_MUSIC_RESET_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_MUSIC_RESET_HELPURL, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_music_stop'] = {
  init: function() {
    this.jsonInit({"colour": 192, "previousStatement": null, "message0": Blockly.Msg.MICROBIT_MUSIC_STOP_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_MUSIC_STOP_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_MUSIC_STOP_HELPURL, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_music_set_tempo'] = {
  init: function() {
    this.jsonInit({"colour": 192, "nextStatement": null, "args0": [{"check": "Number", "name": "ticks", "type": "input_value"}, {"check": "Number", "name": "bpm", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_TOOLTIP, "previousStatement": null, "inputsInline": true, "helpUrl": Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_HELPURL});
  }
};


Blockly.Blocks['microbit_music_get_tempo'] = {
  init: function() {
    this.jsonInit({"colour": 192, "output": "Array", "message0": Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_HELPURL});
  }
};


Blockly.Blocks['microbit_neopixel_initialise'] = {
  init: function() {
    this.jsonInit({"colour": 224, "args0": [{"value": 0, "min": 1, "name": "n", "type": "field_number"}, {"type": "input_dummy"}, {"options": [["0", "0"], ["1", "1"], ["2", "2"]], "name": "pin", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_NEOPIXEL_INITIALISE_HELPURL, "output": "neopixel_object"});
  }
};


Blockly.Blocks['microbit_neopixel_clear'] = {
  init: function() {
    this.jsonInit({"colour": 224, "args0": [{"check": "neopixel_object", "name": "neopixel_object", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_NEOPIXEL_CLEAR_HELPURL});
  }
};


Blockly.Blocks['microbit_neopixel_show'] = {
  init: function() {
    this.jsonInit({"colour": 224, "args0": [{"check": "neopixel_object", "name": "neopixel_object", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_NEOPIXEL_SHOW_HELPURL});
  }
};


Blockly.Blocks['microbit_neopixel_set'] = {
  init: function() {
    this.jsonInit({"colour": 224, "nextStatement": null, "args0": [{"check": "neopixel_object", "name": "neopixel_object", "type": "input_value"}, {"check": "Number", "name": "pixel", "type": "input_value"}, {"check": "Number", "name": "red", "type": "input_value"}, {"check": "Number", "name": "green", "type": "input_value"}, {"check": "Number", "name": "blue", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_NEOPIXEL_SET_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_NEOPIXEL_SET_TOOLTIP, "previousStatement": null, "inputsInline": true, "helpUrl": Blockly.Msg.MICROBIT_NEOPIXEL_SET_HELPURL});
  }
};


Blockly.Blocks['microbit_pin_touched'] = {
  init: function() {
    this.jsonInit({"colour": 256, "args0": [{"options": [["0", "0"], ["1", "1"], ["2", "2"]], "name": "pin", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_PIN_TOUCHED_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_PIN_TOUCHED_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_PIN_TOUCHED_HELPURL, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_pin_read_analog'] = {
  init: function() {
    this.jsonInit({"colour": 256, "args0": [{"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["10", "10"]], "name": "pin", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_PIN_READ_ANALOG_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_PIN_READ_ANALOG_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_PIN_READ_ANALOG_HELPURL, "output": "Number"});
  }
};


Blockly.Blocks['microbit_pin_write_analog'] = {
  init: function() {
    this.jsonInit({"colour": 256, "args0": [{"check": "Number", "name": "NAME", "type": "input_value"}, {"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["10", "10"]], "name": "pin", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_PIN_WRITE_ANALOG_HELPURL});
  }
};


Blockly.Blocks['microbit_pin_read_digital'] = {
  init: function() {
    this.jsonInit({"colour": 256, "args0": [{"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "12"], ["14", "14"], ["15", "15"], ["16", "16"], ["19", "19"], ["20", "20"]], "name": "pin", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_PIN_READ_DIGITAL_HELPURL, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_pin_write_digital'] = {
  init: function() {
    this.jsonInit({"colour": 256, "args0": [{"check": "Boolean", "name": "output", "type": "input_value"}, {"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "12"], ["14", "14"], ["15", "15"], ["16", "16"], ["19", "19"], ["20", "20"]], "name": "pin", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_PIN_WRITE_DIGITAL_HELPURL});
  }
};


Blockly.Blocks['microbit_radio_on'] = {
  init: function() {
    this.jsonInit({"colour": 288, "previousStatement": null, "message0": Blockly.Msg.MICROBIT_RADIO_ON_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_RADIO_ON_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_RADIO_ON_HELPURL, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_radio_off'] = {
  init: function() {
    this.jsonInit({"colour": 288, "previousStatement": null, "message0": Blockly.Msg.MICROBIT_RADIO_OFF_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_RADIO_OFF_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_RADIO_OFF_HELPURL, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_radio_config'] = {
  init: function() {
    this.jsonInit({"colour": 288, "args0": [{"value": 32, "min": 4, "name": "length", "max": 251, "type": "field_number"}, {"type": "input_dummy"}, {"value": 3, "min": 1, "name": "queue", "max": 32, "type": "field_number"}, {"type": "input_dummy"}, {"value": 7, "min": 0, "name": "channel", "max": 100, "type": "field_number"}, {"type": "input_dummy"}, {"value": 0, "min": 0, "name": "power", "max": 7, "type": "field_number"}, {"type": "input_dummy"}, {"options": [["1Mbit", "1Mbit"], ["250Kbit", "250Kbit"], ["2Mbit", "2Mbit"]], "name": "data_rate", "type": "field_dropdown"}], "message0": Blockly.Msg.MICROBIT_RADIO_CONFIG_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_RADIO_CONFIG_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_RADIO_CONFIG_HELPURL});
  }
};


Blockly.Blocks['microbit_radio_reset'] = {
  init: function() {
    this.jsonInit({"colour": 288, "previousStatement": null, "message0": Blockly.Msg.MICROBIT_RADIO_RESET_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_RADIO_RESET_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_RADIO_RESET_HELPURL, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_radio_send_string'] = {
  init: function() {
    this.jsonInit({"colour": 288, "args0": [{"check": "String", "name": "message", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_RADIO_SEND_STRING_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_RADIO_SEND_STRING_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_RADIO_SEND_STRING_HELPURL});
  }
};


Blockly.Blocks['microbit_radio_receive'] = {
  init: function() {
    this.jsonInit({"colour": 288, "output": "String", "message0": Blockly.Msg.MICROBIT_RADIO_RECEIVE_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_RADIO_RECEIVE_TOOLTIP, "helpUrl": Blockly.Msg.MICROBIT_RADIO_RECEIVE_HELPURL});
  }
};


Blockly.Blocks['microbit_speech_say'] = {
  init: function() {
    this.jsonInit({"colour": 320, "args0": [{"check": "String", "name": "english", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_SPEECH_SAY_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_SPEECH_SAY_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_SPEECH_SAY_HELPURL});
  }
};


Blockly.Blocks['microbit_speech_pronounce'] = {
  init: function() {
    this.jsonInit({"colour": 320, "args0": [{"check": "String", "name": "phonemes", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_SPEECH_PRONOUNCE_HELPURL});
  }
};


Blockly.Blocks['microbit_speech_sing'] = {
  init: function() {
    this.jsonInit({"colour": 320, "args0": [{"check": "String", "name": "song", "type": "input_value"}], "message0": Blockly.Msg.MICROBIT_SPEECH_SING_MESSAGE0, "tooltip": Blockly.Msg.MICROBIT_SPEECH_SING_TOOLTIP, "nextStatement": null, "previousStatement": null, "helpUrl": Blockly.Msg.MICROBIT_SPEECH_SING_HELPURL});
  }
};


