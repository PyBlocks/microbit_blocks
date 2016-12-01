'use strict';

goog.provide('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');
goog.require('Blockly.constants');

Blockly.FieldColour.COLOURS = ['#000', '#400', '#600', '#800', '#a00', '#b00',
                               '#c00', '#d00', '#e00', '#f00'];
Blockly.FieldColour.COLUMNS = 5;


Blockly.Blocks['microbit_accelerometer_get_x'] = {
  init: function() {
    this.jsonInit({"colour": 0, "message0": "Accelerometer X axis", "tooltip": "Get the acceleration measurement in the X axis.", "output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_x"});
  }
};


Blockly.Blocks['microbit_accelerometer_get_y'] = {
  init: function() {
    this.jsonInit({"colour": 0, "message0": "Accelerometer Y axis", "tooltip": "Get the acceleration measurement in the Y axis.", "output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_y"});
  }
};


Blockly.Blocks['microbit_accelerometer_get_z'] = {
  init: function() {
    this.jsonInit({"colour": 0, "message0": "Accelerometer Z axis", "tooltip": "Get the acceleration measurement in the Z axis.", "output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_z"});
  }
};


Blockly.Blocks['microbit_accelerometer_was_gesture'] = {
  init: function() {
    this.jsonInit({"colour": 0, "message0": "Was gesture %1", "output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.was_gesture", "args0": [{"options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]], "type": "field_dropdown", "name": "gesture"}], "tooltip": "Return True or False to indicate if the named gesture was active since the last check."});
  }
};


Blockly.Blocks['microbit_accelerometer_is_gesture'] = {
  init: function() {
    this.jsonInit({"colour": 0, "message0": "Is gesture %1", "output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.is_gesture", "args0": [{"options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]], "type": "field_dropdown", "name": "gesture"}], "tooltip": "Return True or False to indicate if the named gesture is currently active."});
  }
};


Blockly.Blocks['microbit_accelerometer_get_gestures'] = {
  init: function() {
    this.jsonInit({"colour": 0, "message0": "Get gestures", "tooltip": "Return the gesture history. The most recent gesture is last. Also clears the gesture history.", "output": "Array", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_gestures"});
  }
};


Blockly.Blocks['microbit_accelerometer_current_gesture'] = {
  init: function() {
    this.jsonInit({"colour": 0, "message0": "Curent gesture", "tooltip": "Return the name of the current gesture.", "output": "String", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.current_gesture"});
  }
};


Blockly.Blocks['microbit_button_is_pressed'] = {
  init: function() {
    this.jsonInit({"colour": 32, "message0": "Button %1 is pressed", "output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.is_pressed", "args0": [{"options": [["A", "a"], ["B", "b"]], "type": "field_dropdown", "name": "button"}], "tooltip": "Return True if the specified button is pressed. Otherwise, return False."});
  }
};


Blockly.Blocks['microbit_button_was_pressed'] = {
  init: function() {
    this.jsonInit({"colour": 32, "message0": "Button %1 was pressed", "output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.was_pressed", "args0": [{"options": [["A", "a"], ["B", "b"]], "type": "field_dropdown", "name": "button"}], "tooltip": "Return True if the specified button was pressed since the device started or the last time this was checked."});
  }
};


Blockly.Blocks['microbit_button_get_presses'] = {
  init: function() {
    this.jsonInit({"colour": 32, "message0": "Get number of presses for button %1", "output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.get_presses", "args0": [{"options": [["A", "a"], ["B", "b"]], "type": "field_dropdown", "name": "button"}], "tooltip": "Return the running total of presses for the specified button, and resets this total to zero."});
  }
};


Blockly.Blocks['microbit_compass_calibrate'] = {
  init: function() {
    this.jsonInit({"colour": 64, "message0": "Calibrate compass", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.calibrate", "previousStatement": null, "tooltip": "Start the callibration process to improve the accuracy of the compass."});
  }
};


Blockly.Blocks['microbit_compass_is_calibrated'] = {
  init: function() {
    this.jsonInit({"colour": 64, "message0": "Compass is calibrated?", "tooltip": "Returns True if the compass is calibrated, otherwise returns False.", "output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.is_calibrated"});
  }
};


Blockly.Blocks['microbit_compass_heading'] = {
  init: function() {
    this.jsonInit({"colour": 64, "message0": "Compass heading", "tooltip": "Return the compass heading as a number between 0 to 360, representing the angle in degrees, clockwise, with north as 0.", "output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.heading"});
  }
};


Blockly.Blocks['microbit_compass_get_field_strength'] = {
  init: function() {
    this.jsonInit({"colour": 64, "message0": "Compass field strength", "tooltip": "Return a number indicating the magnitude of the magnetic field around the device.", "output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.get_field_strength"});
  }
};


Blockly.Blocks['microbit_display_get_pixel'] = {
  init: function() {
    this.jsonInit({"colour": 96, "message0": "Get brightness at X %1 Y %2", "output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.get_pixel", "inputsInline": true, "args0": [{"check": "Number", "type": "input_value", "name": "x"}, {"check": "Number", "type": "input_value", "name": "y"}], "tooltip": "Get the brightness of the LED at column X and row Y as a number between 0 (off) and 9 (brightest)."});
  }
};


Blockly.Blocks['microbit_display_set_pixel'] = {
  init: function() {
    this.jsonInit({"colour": 96, "message0": "Set pixel at X %1 Y %2 to brightness %3", "inputsInline": true, "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.set_pixel", "previousStatement": null, "args0": [{"check": "Number", "type": "input_value", "name": "x"}, {"check": "Number", "type": "input_value", "name": "y"}, {"check": "Number", "type": "input_value", "name": "value"}], "tooltip": "Set the brightness of the LED at column X and row Y to a value which has to be a number between 0 (off) and 9 (brightest)."});
  }
};


Blockly.Blocks['microbit_display_clear'] = {
  init: function() {
    this.jsonInit({"colour": 96, "message0": "Clear display", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.clear", "previousStatement": null, "tooltip": "Clear the display - set the brightness of all LEDs to 0 (off)."});
  }
};


Blockly.Blocks['microbit_display_show_image'] = {
  init: function() {
    this.jsonInit({"colour": 96, "message0": "Show image %1", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show", "previousStatement": null, "args0": [{"check": "microbit_image", "type": "input_value", "name": "image"}], "tooltip": "Show the referenced image on the display."});
  }
};


Blockly.Blocks['microbit_display_show_animation'] = {
  init: function() {
    this.jsonInit({"colour": 96, "message0": "Animate images %1 with a delay of %2 milliseconds between frames. %3 Wait %4 %5 Loop %6 %7 Clear %8", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show", "previousStatement": null, "args0": [{"check": "Array", "type": "input_value", "name": "images"}, {"min": 0, "name": "delay", "type": "field_number", "value": 400}, {"type": "input_dummy"}, {"name": "wait", "checked": true, "type": "field_checkbox"}, {"type": "input_dummy"}, {"name": "loop", "checked": false, "type": "field_checkbox"}, {"type": "input_dummy"}, {"name": "clear", "checked": false, "type": "field_checkbox"}], "tooltip": "Display the list of images as an animation with a certain delay between each frame. Indicate if you need to wait before continuing, continuously loop the animation and clear the display when finished."});
  }
};


Blockly.Blocks['microbit_display_scroll'] = {
  init: function() {
    this.jsonInit({"colour": 96, "message0": "Scroll message %1", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.scroll", "previousStatement": null, "args0": [{"check": "String", "type": "input_value", "name": "message"}], "tooltip": "Scroll the referenced text across the display."});
  }
};


Blockly.Blocks['microbit_display_on'] = {
  init: function() {
    this.jsonInit({"colour": 96, "message0": "Turn on display", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.on", "previousStatement": null, "tooltip": "Turns on the display."});
  }
};


Blockly.Blocks['microbit_display_off'] = {
  init: function() {
    this.jsonInit({"colour": 96, "message0": "Turn off display", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.off", "previousStatement": null, "tooltip": "Turn off the display."});
  }
};


Blockly.Blocks['microbit_display_is_on'] = {
  init: function() {
    this.jsonInit({"colour": 96, "message0": "Display is on?", "tooltip": "Return True if the display is on, otherwise return False.", "output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.is_on"});
  }
};


Blockly.Blocks['microbit_image_builtins'] = {
  init: function() {
    this.jsonInit({"colour": 128, "message0": "Built in image %1", "output": "microbit_image", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#attributes", "args0": [{"options": [["HEART", "HEART"], ["HEART_SMALL", "HEART_SMALL"], ["HAPPY", "HAPPY"], ["SMILE", "SMILE"], ["SAD", "SAD"], ["CONFUSED", "CONFUSED"], ["ANGRY", "ANGRY"], ["ASLEEP", "ASLEEP"], ["SURPRISED", "SURPRISED"], ["SILLY", "SILLY"], ["FABULOUS", "FABULOUS"], ["MEH", "MEH"], ["YES", "YES"], ["NO", "NO"], ["CLOCK12", "CLOCK12"], ["CLOCK11", "CLOCK11"], ["CLOCK10", "CLOCK10"], ["CLOCK9", "CLOCK9"], ["CLOCK8", "CLOCK8"], ["CLOCK7", "CLOCK7"], ["CLOCK6", "CLOCK6"], ["CLOCK5", "CLOCK5"], ["CLOCK4", "CLOCK4"], ["CLOCK3", "CLOCK3"], ["CLOCK2", "CLOCK2"], ["CLOCK1", "CLOCK1"], ["ARROW_N", "ARROW_N"], ["ARROW_NE", "ARROW_NE"], ["ARROW_E", "ARROW_E"], ["ARROW_SE", "ARROW_SE"], ["ARROW_S", "ARROW_S"], ["ARROW_SW", "ARROW_SW"], ["ARROW_W", "ARROW_W"], ["ARROW_NW", "ARROW_NW"], ["TRIANGLE", "TRIANGLE"], ["TRIANGLE_LEFT", "TRIANGLE_LEFT"], ["CHESSBOARD", "CHESSBOARD"], ["DIAMOND", "DIAMOND"], ["DIAMOND_SMALL", "DIAMOND_SMALL"], ["SQUARE", "SQUARE"], ["SQUARE_SMALL", "SQUARE_SMALL"], ["RABBIT", "RABBIT"], ["COW", "COW"], ["MUSIC_CROTCHET", "MUSIC_CROTCHET"], ["MUSIC_QUAVER", "MUSIC_QUAVER"], ["MUSIC_QUAVERS", "MUSIC_QUAVERS"], ["PITCHFORK", "PITCHFORK"], ["XMAS", "XMAS"], ["PACMAN", "PACMAN"], ["TARGET", "TARGET"], ["TSHIRT", "TSHIRT"], ["ROLLERSKATE", "ROLLERSKATE"], ["DUCK", "DUCK"], ["HOUSE", "HOUSE"], ["TORTOISE", "TORTOISE"], ["BUTTERFLY", "BUTTERFLY"], ["STICKFIGURE", "STICKFIGURE"], ["GHOST", "GHOST"], ["SWORD", "SWORD"], ["GIRAFFE", "GIRAFFE"], ["SKULL", "SKULL"], ["UMBRELLA", "UMBRELLA"], ["SNAKE", "SNAKE"], ["ALL_CLOCKS", "ALL_CLOCKS"], ["ALL_ARROWS", "ALL_ARROWS"]], "type": "field_dropdown", "name": "image"}], "tooltip": "Specify one of the built-in images."});
  }
};


Blockly.Blocks['microbit_image_copy'] = {
  init: function() {
    this.jsonInit({"colour": 128, "message0": "Copy image %1", "output": "microbit_image", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.copy", "args0": [{"check": "microbit_image", "type": "input_value", "name": "image"}], "tooltip": "Create an exact copy of the referenced image."});
  }
};


Blockly.Blocks['microbit_image_invert'] = {
  init: function() {
    this.jsonInit({"colour": 128, "message0": "Invert image %1", "output": "microbit_image", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.invert", "args0": [{"check": "microbit_image", "type": "input_value", "name": "image"}], "tooltip": "Create a new image by inverting the brightness of the pixels in the referenced image."});
  }
};


Blockly.Blocks['microbit_image_create'] = {
  init: function() {
    this.jsonInit({"colour": 128, "message0": "Create image %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30", "output": "microbit_image", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image", "args0": [{"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "00"}, {"colour": "#000000", "type": "field_colour", "name": "01"}, {"colour": "#000000", "type": "field_colour", "name": "02"}, {"colour": "#000000", "type": "field_colour", "name": "03"}, {"colour": "#000000", "type": "field_colour", "name": "04"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "10"}, {"colour": "#000000", "type": "field_colour", "name": "11"}, {"colour": "#000000", "type": "field_colour", "name": "12"}, {"colour": "#000000", "type": "field_colour", "name": "13"}, {"colour": "#000000", "type": "field_colour", "name": "14"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "20"}, {"colour": "#000000", "type": "field_colour", "name": "21"}, {"colour": "#000000", "type": "field_colour", "name": "22"}, {"colour": "#000000", "type": "field_colour", "name": "23"}, {"colour": "#000000", "type": "field_colour", "name": "24"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "30"}, {"colour": "#000000", "type": "field_colour", "name": "31"}, {"colour": "#000000", "type": "field_colour", "name": "32"}, {"colour": "#000000", "type": "field_colour", "name": "33"}, {"colour": "#000000", "type": "field_colour", "name": "34"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "40"}, {"colour": "#000000", "type": "field_colour", "name": "41"}, {"colour": "#000000", "type": "field_colour", "name": "42"}, {"colour": "#000000", "type": "field_colour", "name": "43"}, {"colour": "#000000", "type": "field_colour", "name": "44"}], "tooltip": "Create a new image."});
  }
};


Blockly.Blocks['microbit_microbit_panic'] = {
  init: function() {
    this.jsonInit({"colour": 160, "message0": "Panic with status code %1", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.panic", "previousStatement": null, "args0": [{"max": 255, "min": 0, "name": "code", "type": "field_number", "value": 0}], "tooltip": "Enter panic mode to indicate something has gone wrong. Requires a restart. Pass in a number to indicate a status code."});
  }
};


Blockly.Blocks['microbit_microbit_reset'] = {
  init: function() {
    this.jsonInit({"colour": 160, "message0": "Reset micro:bit", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.reset", "previousStatement": null, "tooltip": "Reset the micro:bit"});
  }
};


Blockly.Blocks['microbit_microbit_sleep'] = {
  init: function() {
    this.jsonInit({"colour": 160, "message0": "Sleep %1 milliseconds", "inputsInline": true, "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.sleep", "previousStatement": null, "args0": [{"check": "Number", "type": "input_value", "name": "duration"}], "tooltip": "Wait for a specified number of milliseconds before the next instruction."});
  }
};


Blockly.Blocks['microbit_microbit_running_time'] = {
  init: function() {
    this.jsonInit({"colour": 160, "message0": "Running time", "tooltip": "Get the number of milliseconds since the board was switched on or restarted.", "output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.running_time"});
  }
};


Blockly.Blocks['microbit_microbit_temperature'] = {
  init: function() {
    this.jsonInit({"colour": 160, "message0": "Board temperature", "tooltip": "Get the temperature of the micro:bit in degrees Celcius.", "output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.temperature"});
  }
};


Blockly.Blocks['microbit_music_play_built_in'] = {
  init: function() {
    this.jsonInit({"colour": 192, "message0": "Play built-in melody %1 %2 Wait %3 %4 Loop %5", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies", "previousStatement": null, "args0": [{"options": [["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]], "type": "field_dropdown", "name": "melody"}, {"type": "input_dummy"}, {"name": "wait", "checked": true, "type": "field_checkbox"}, {"type": "input_dummy"}, {"name": "loop", "checked": false, "type": "field_checkbox"}], "tooltip": "Play one of the built-in melodies. Indicate if you need to wait before continuing or continuously loop the melody."});
  }
};


Blockly.Blocks['microbit_music_pitch'] = {
  init: function() {
    this.jsonInit({"colour": 192, "message0": "Play pitch %1 %2 for  %3 milliseconds", "inputsInline": true, "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.pitch", "previousStatement": null, "args0": [{"min": 0, "name": "pitch", "type": "field_number", "value": 440}, {"type": "input_dummy"}, {"min": 0, "name": "duration", "type": "field_number", "value": 1000}], "tooltip": "Play a pitch at a certain number of cycles per second for a specified number of milliseconds."});
  }
};


Blockly.Blocks['microbit_music_play_list_of_notes'] = {
  init: function() {
    this.jsonInit({"colour": 192, "message0": "Play notes %1 Wait %2 %3 Loop %4", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#musical-notation", "previousStatement": null, "args0": [{"check": "Array", "type": "input_value", "name": "notes"}, {"name": "wait", "checked": true, "type": "field_checkbox"}, {"type": "input_dummy"}, {"name": "loop", "checked": false, "type": "field_checkbox"}], "tooltip": "Play a list of notes expressed in the special music language. Indicate if you need to wait before continuing or continuously loop the melody."});
  }
};


Blockly.Blocks['microbit_music_reset'] = {
  init: function() {
    this.jsonInit({"colour": 192, "message0": "Reset music", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset", "previousStatement": null, "tooltip": "Reset all music related settings (current tempo, octave and duration) to default values."});
  }
};


Blockly.Blocks['microbit_music_stop'] = {
  init: function() {
    this.jsonInit({"colour": 192, "message0": "Stop music", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.stop", "previousStatement": null, "tooltip": "Stop all music playback."});
  }
};


Blockly.Blocks['microbit_music_set_tempo'] = {
  init: function() {
    this.jsonInit({"colour": 192, "message0": "Set tempo: 1 beat is %1 ticks at %2 beats per minute", "inputsInline": true, "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo", "previousStatement": null, "args0": [{"check": "Number", "type": "input_value", "name": "ticks"}, {"check": "Number", "type": "input_value", "name": "bpm"}], "tooltip": "Set the speed (tempo) of playback. A certain number of ticks represents a beat. Each beat is to be played a certain number of times a minute (beats per minute or BPM)."});
  }
};


Blockly.Blocks['microbit_music_get_tempo'] = {
  init: function() {
    this.jsonInit({"colour": 192, "message0": "Get current tempo", "tooltip": "Gets current tempo information as two numbers: number of ticks per beat, and number of beats per minute (BPM).", "output": "Array", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo"});
  }
};


Blockly.Blocks['microbit_neopixel_initialise'] = {
  init: function() {
    this.jsonInit({"colour": 224, "message0": "Initialise pin %1 with %2 %3 neopixel[s]", "output": "neopixel_object", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel", "args0": [{"options": [["0", "0"], ["1", "1"], ["2", "2"]], "type": "field_dropdown", "name": "pin"}, {"type": "input_dummy"}, {"min": 1, "name": "n", "type": "field_number", "value": 1}], "tooltip": "Make an object to control any attached neopixels. Specify the number of neopixels and the pin to which they are attached."});
  }
};


Blockly.Blocks['microbit_neopixel_clear'] = {
  init: function() {
    this.jsonInit({"colour": 224, "message0": "Clear neopixels on %1", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.clear", "previousStatement": null, "args0": [{"check": "neopixel_object", "type": "input_value", "name": "neopixel_object"}], "tooltip": "Clear all neopixels controlled by the referenced neopixel object."});
  }
};


Blockly.Blocks['microbit_neopixel_show'] = {
  init: function() {
    this.jsonInit({"colour": 224, "message0": "Show neopixels on %1", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.show", "previousStatement": null, "args0": [{"check": "neopixel_object", "type": "input_value", "name": "neopixel_object"}], "tooltip": "Show / update all the neopixels controlled by the referenced neopixel object."});
  }
};


Blockly.Blocks['microbit_neopixel_set'] = {
  init: function() {
    this.jsonInit({"colour": 224, "message0": "Using neopixels on %1 set pixel in position %2 with red %3 green %4 blue %5", "inputsInline": true, "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#using-neopixels", "previousStatement": null, "args0": [{"check": "neopixel_object", "type": "input_value", "name": "neopixel_object"}, {"check": "Number", "type": "input_value", "name": "pixel"}, {"check": "Number", "type": "input_value", "name": "red"}, {"check": "Number", "type": "input_value", "name": "green"}, {"check": "Number", "type": "input_value", "name": "blue"}], "tooltip": "Use the referenced neopixel object to update the individual neopixel in a specific numbered position with a red, green, blue (RGB) value."});
  }
};


Blockly.Blocks['microbit_pin_touched'] = {
  init: function() {
    this.jsonInit({"colour": 256, "message0": "Pin %1 is touched?", "output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitTouchPin.is_touched", "args0": [{"options": [["0", "0"], ["1", "1"], ["2", "2"]], "type": "field_dropdown", "name": "pin"}], "tooltip": "Return True if the referenced pin is touched."});
  }
};


Blockly.Blocks['microbit_pin_read_analog'] = {
  init: function() {
    this.jsonInit({"colour": 256, "message0": "Read analog on pin %1", "output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.read_analog", "args0": [{"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["10", "10"]], "type": "field_dropdown", "name": "pin"}], "tooltip": "Read analog value from the referenced pin."});
  }
};


Blockly.Blocks['microbit_pin_write_analog'] = {
  init: function() {
    this.jsonInit({"colour": 256, "message0": "Write analog value %1 on pin %2", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.write_analog", "previousStatement": null, "args0": [{"check": "Number", "type": "input_value", "name": "output"}, {"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["10", "10"]], "type": "field_dropdown", "name": "pin"}], "tooltip": "Write analog value to the referenced pin."});
  }
};


Blockly.Blocks['microbit_pin_read_digital'] = {
  init: function() {
    this.jsonInit({"colour": 256, "message0": "Read digital value on pin %1", "output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.read_digital", "args0": [{"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "12"], ["14", "14"], ["15", "15"], ["16", "16"], ["19", "19"], ["20", "20"]], "type": "field_dropdown", "name": "pin"}], "tooltip": "Read digital value (True or False) from the referenced pin."});
  }
};


Blockly.Blocks['microbit_pin_write_digital'] = {
  init: function() {
    this.jsonInit({"colour": 256, "message0": "Write digital value %1 on pin %2", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.write_digital", "previousStatement": null, "args0": [{"check": "Boolean", "type": "input_value", "name": "output"}, {"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "12"], ["14", "14"], ["15", "15"], ["16", "16"], ["19", "19"], ["20", "20"]], "type": "field_dropdown", "name": "pin"}], "tooltip": "Write digital value (True or False) to the referenced pin."});
  }
};


Blockly.Blocks['microbit_radio_on'] = {
  init: function() {
    this.jsonInit({"colour": 288, "message0": "Switch on radio", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.on", "previousStatement": null, "tooltip": "Turn on the radio. This needs to be explicitly called since the radio draws power and takes up memory that you may otherwise need."});
  }
};


Blockly.Blocks['microbit_radio_off'] = {
  init: function() {
    this.jsonInit({"colour": 288, "message0": "Switch off radio", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.off", "previousStatement": null, "tooltip": "Turn off the radio, thus saving power and memory."});
  }
};


Blockly.Blocks['microbit_radio_config'] = {
  init: function() {
    this.jsonInit({"colour": 288, "message0": "Configure radio message length %1 %2 maximum queue length %3 %4 tuned to channel %5 %6 broadcast power %7 %8 data rate %9", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.config", "previousStatement": null, "args0": [{"max": 251, "min": 4, "name": "length", "type": "field_number", "value": 32}, {"type": "input_dummy"}, {"max": 32, "min": 1, "name": "queue", "type": "field_number", "value": 3}, {"type": "input_dummy"}, {"max": 100, "min": 0, "name": "channel", "type": "field_number", "value": 7}, {"type": "input_dummy"}, {"max": 7, "min": 0, "name": "power", "type": "field_number", "value": 0}, {"type": "input_dummy"}, {"options": [["1Mbit", "RATE_1MBIT"], ["250Kbit", "RATE_250KBIT"], ["2Mbit", "RATE_2MBIT"]], "type": "field_dropdown", "name": "data_rate"}], "tooltip": "Configure the radio. The length defines how long an individual message can be. The queue specifies the number of messages that can be stored on the incoming message queue. The channel defines the frequency to which the radio is tuned. The power specifies the strength of the broadcast signal. The data rate indicates the speed at which data is transferred."});
  }
};


Blockly.Blocks['microbit_radio_reset'] = {
  init: function() {
    this.jsonInit({"colour": 288, "message0": "Reset radio", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.reset", "previousStatement": null, "tooltip": "Reset the radio to default settings."});
  }
};


Blockly.Blocks['microbit_radio_send_string'] = {
  init: function() {
    this.jsonInit({"colour": 288, "message0": "Send message %1", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.send", "previousStatement": null, "args0": [{"check": "String", "type": "input_value", "name": "message"}], "tooltip": "Broadcast a text message."});
  }
};


Blockly.Blocks['microbit_radio_receive'] = {
  init: function() {
    this.jsonInit({"colour": 288, "message0": "Receive message", "tooltip": "Receive a message.", "output": "String", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.receive"});
  }
};


Blockly.Blocks['microbit_speech_say'] = {
  init: function() {
    this.jsonInit({"colour": 320, "message0": "Say %1", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/speech.html#speech.say", "previousStatement": null, "args0": [{"check": "String", "type": "input_value", "name": "english"}], "tooltip": "Attempt to say English input."});
  }
};


Blockly.Blocks['microbit_speech_pronounce'] = {
  init: function() {
    this.jsonInit({"colour": 320, "message0": "Pronounce %1", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/speech.html#phonemes", "previousStatement": null, "args0": [{"check": "String", "type": "input_value", "name": "phonemes"}], "tooltip": "Precisely pronounce phoneme input."});
  }
};


Blockly.Blocks['microbit_speech_sing'] = {
  init: function() {
    this.jsonInit({"colour": 320, "message0": "Sing %1", "nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/speech.html#singing", "previousStatement": null, "args0": [{"check": "String", "type": "input_value", "name": "song"}], "tooltip": "Sing phonemes like a ROBOT."});
  }
};


