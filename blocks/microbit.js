'use strict';

goog.provide('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');
goog.require('Blockly.constants');

Blockly.FieldColour.COLOURS = ['#000', '#400', '#600', '#800', '#a00', '#b00',
                               '#c00', '#d00', '#e00', '#f00'];
Blockly.FieldColour.COLUMNS = 5;


Blockly.Blocks['microbit_accelerometer_get_x'] = {
  init: function() {
    this.jsonInit({"output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_x", "colour": 0, "message0": "Accelerometer X axis", "tooltip": "Get the acceleration measurement in the X axis."});
  }
};


Blockly.Blocks['microbit_accelerometer_get_y'] = {
  init: function() {
    this.jsonInit({"output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_y", "colour": 0, "message0": "Accelerometer Y axis", "tooltip": "Get the acceleration measurement in the Y axis."});
  }
};


Blockly.Blocks['microbit_accelerometer_get_z'] = {
  init: function() {
    this.jsonInit({"output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_z", "colour": 0, "message0": "Accelerometer Z axis", "tooltip": "Get the acceleration measurement in the Z axis."});
  }
};


Blockly.Blocks['microbit_accelerometer_was_gesture'] = {
  init: function() {
    this.jsonInit({"output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.was_gesture", "args0": [{"type": "field_dropdown", "name": "gesture", "options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]]}], "colour": 0, "message0": "Was gesture %1", "tooltip": "Return True or False to indicate if the named gesture was active since the last check."});
  }
};


Blockly.Blocks['microbit_accelerometer_is_gesture'] = {
  init: function() {
    this.jsonInit({"output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.is_gesture", "args0": [{"type": "field_dropdown", "name": "gesture", "options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]]}], "colour": 0, "message0": "Is gesture %1", "tooltip": "Return True or False to indicate if the named gesture is currently active."});
  }
};


Blockly.Blocks['microbit_accelerometer_get_gestures'] = {
  init: function() {
    this.jsonInit({"output": "Array", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_gestures", "colour": 0, "message0": "Get gestures", "tooltip": "Return the gesture history. The most recent gesture is last. Also clears the gesture history."});
  }
};


Blockly.Blocks['microbit_accelerometer_current_gesture'] = {
  init: function() {
    this.jsonInit({"output": "String", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.current_gesture", "colour": 0, "message0": "Curent gesture", "tooltip": "Return the name of the current gesture."});
  }
};


Blockly.Blocks['microbit_button_is_pressed'] = {
  init: function() {
    this.jsonInit({"output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.is_pressed", "args0": [{"type": "field_dropdown", "name": "button", "options": [["A", "a"], ["B", "b"]]}], "colour": 32, "message0": "Button %1 is pressed", "tooltip": "Return True if the specified button is pressed. Otherwise, return False."});
  }
};


Blockly.Blocks['microbit_button_was_pressed'] = {
  init: function() {
    this.jsonInit({"output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.was_pressed", "args0": [{"type": "field_dropdown", "name": "button", "options": [["A", "a"], ["B", "b"]]}], "colour": 32, "message0": "Button %1 was pressed", "tooltip": "Return True if the specified button was pressed since the device started or the last time this was checked."});
  }
};


Blockly.Blocks['microbit_button_get_presses'] = {
  init: function() {
    this.jsonInit({"output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.get_presses", "args0": [{"type": "field_dropdown", "name": "button", "options": [["A", "a"], ["B", "b"]]}], "colour": 32, "message0": "Get number of presses for button %1", "tooltip": "Return the running total of presses for the specified button, and resets this total to zero."});
  }
};


Blockly.Blocks['microbit_compass_calibrate'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.calibrate", "nextStatement": null, "previousStatement": null, "colour": 64, "message0": "Calibrate compass", "tooltip": "Start the callibration process to improve the accuracy of the compass."});
  }
};


Blockly.Blocks['microbit_compass_is_calibrated'] = {
  init: function() {
    this.jsonInit({"output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.is_calibrated", "colour": 64, "message0": "Compass is calibrated?", "tooltip": "Returns True if the compass is calibrated, otherwise returns False."});
  }
};


Blockly.Blocks['microbit_compass_heading'] = {
  init: function() {
    this.jsonInit({"output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.heading", "colour": 64, "message0": "Compass heading", "tooltip": "Return the compass heading as a number between 0 to 360, representing the angle in degrees, clockwise, with north as 0."});
  }
};


Blockly.Blocks['microbit_compass_get_field_strength'] = {
  init: function() {
    this.jsonInit({"output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.get_field_strength", "colour": 64, "message0": "Compass field strength", "tooltip": "Return a number indicating the magnitude of the magnetic field around the device."});
  }
};


Blockly.Blocks['microbit_display_get_pixel'] = {
  init: function() {
    this.jsonInit({"output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.get_pixel", "args0": [{"check": "Number", "type": "input_value", "name": "x"}, {"check": "Number", "type": "input_value", "name": "y"}], "colour": 96, "message0": "Get brightness at X %1 Y %2", "inputsInline": true, "tooltip": "Get the brightness of the LED at column X and row Y as a number between 0 (off) and 9 (brightest)."});
  }
};


Blockly.Blocks['microbit_display_set_pixel'] = {
  init: function() {
    this.jsonInit({"nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.set_pixel", "args0": [{"check": "Number", "type": "input_value", "name": "x"}, {"check": "Number", "type": "input_value", "name": "y"}, {"check": "Number", "type": "input_value", "name": "value"}], "previousStatement": null, "colour": 96, "message0": "Set pixel at X %1 Y %2 to brightness %3", "inputsInline": true, "tooltip": "Set the brightness of the LED at column X and row Y to a value which has to be a number between 0 (off) and 9 (brightest)."});
  }
};


Blockly.Blocks['microbit_display_clear'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.clear", "nextStatement": null, "previousStatement": null, "colour": 96, "message0": "Clear display", "tooltip": "Clear the display - set the brightness of all LEDs to 0 (off)."});
  }
};


Blockly.Blocks['microbit_display_show_image'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show", "args0": [{"check": "microbit_image", "type": "input_value", "name": "image"}], "previousStatement": null, "colour": 96, "message0": "Show image %1", "nextStatement": null, "tooltip": "Show the referenced image on the display."});
  }
};


Blockly.Blocks['microbit_display_show_animation'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show", "args0": [{"check": "Array", "type": "input_value", "name": "images"}, {"type": "field_number", "min": 0, "value": 400, "name": "delay"}, {"type": "input_dummy"}, {"checked": true, "type": "field_checkbox", "name": "wait"}, {"type": "input_dummy"}, {"checked": false, "type": "field_checkbox", "name": "loop"}, {"type": "input_dummy"}, {"checked": false, "type": "field_checkbox", "name": "clear"}], "previousStatement": null, "colour": 96, "message0": "Animate images %1 with a delay of %2 milliseconds between frames. %3 Wait %4 %5 Loop %6 %7 Clear %8", "nextStatement": null, "tooltip": "Display the list of images as an animation with a certain delay between each frame. Indicate if you need to wait before continuing, continuously loop the animation and clear the display when finished."});
  }
};


Blockly.Blocks['microbit_display_scroll'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.scroll", "args0": [{"check": "String", "type": "input_value", "name": "message"}], "previousStatement": null, "colour": 96, "message0": "Scroll message %1", "nextStatement": null, "tooltip": "Scroll the referenced text across the display."});
  }
};


Blockly.Blocks['microbit_display_on'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.on", "nextStatement": null, "previousStatement": null, "colour": 96, "message0": "Turn on display", "tooltip": "Turns on the display."});
  }
};


Blockly.Blocks['microbit_display_off'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.off", "nextStatement": null, "previousStatement": null, "colour": 96, "message0": "Turn off display", "tooltip": "Turn off the display."});
  }
};


Blockly.Blocks['microbit_display_is_on'] = {
  init: function() {
    this.jsonInit({"output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.is_on", "colour": 96, "message0": "Display is on?", "tooltip": "Return True if the display is on, otherwise return False."});
  }
};


Blockly.Blocks['microbit_image_builtins'] = {
  init: function() {
    this.jsonInit({"output": "microbit_image", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#attributes", "args0": [{"type": "field_dropdown", "name": "image", "options": [["HEART", "HEART"], ["HEART_SMALL", "HEART_SMALL"], ["HAPPY", "HAPPY"], ["SMILE", "SMILE"], ["SAD", "SAD"], ["CONFUSED", "CONFUSED"], ["ANGRY", "ANGRY"], ["ASLEEP", "ASLEEP"], ["SURPRISED", "SURPRISED"], ["SILLY", "SILLY"], ["FABULOUS", "FABULOUS"], ["MEH", "MEH"], ["YES", "YES"], ["NO", "NO"], ["CLOCK12", "CLOCK12"], ["CLOCK11", "CLOCK11"], ["CLOCK10", "CLOCK10"], ["CLOCK9", "CLOCK9"], ["CLOCK8", "CLOCK8"], ["CLOCK7", "CLOCK7"], ["CLOCK6", "CLOCK6"], ["CLOCK5", "CLOCK5"], ["CLOCK4", "CLOCK4"], ["CLOCK3", "CLOCK3"], ["CLOCK2", "CLOCK2"], ["CLOCK1", "CLOCK1"], ["ARROW_N", "ARROW_N"], ["ARROW_NE", "ARROW_NE"], ["ARROW_E", "ARROW_E"], ["ARROW_SE", "ARROW_SE"], ["ARROW_S", "ARROW_S"], ["ARROW_SW", "ARROW_SW"], ["ARROW_W", "ARROW_W"], ["ARROW_NW", "ARROW_NW"], ["TRIANGLE", "TRIANGLE"], ["TRIANGLE_LEFT", "TRIANGLE_LEFT"], ["CHESSBOARD", "CHESSBOARD"], ["DIAMOND", "DIAMOND"], ["DIAMOND_SMALL", "DIAMOND_SMALL"], ["SQUARE", "SQUARE"], ["SQUARE_SMALL", "SQUARE_SMALL"], ["RABBIT", "RABBIT"], ["COW", "COW"], ["MUSIC_CROTCHET", "MUSIC_CROTCHET"], ["MUSIC_QUAVER", "MUSIC_QUAVER"], ["MUSIC_QUAVERS", "MUSIC_QUAVERS"], ["PITCHFORK", "PITCHFORK"], ["XMAS", "XMAS"], ["PACMAN", "PACMAN"], ["TARGET", "TARGET"], ["TSHIRT", "TSHIRT"], ["ROLLERSKATE", "ROLLERSKATE"], ["DUCK", "DUCK"], ["HOUSE", "HOUSE"], ["TORTOISE", "TORTOISE"], ["BUTTERFLY", "BUTTERFLY"], ["STICKFIGURE", "STICKFIGURE"], ["GHOST", "GHOST"], ["SWORD", "SWORD"], ["GIRAFFE", "GIRAFFE"], ["SKULL", "SKULL"], ["UMBRELLA", "UMBRELLA"], ["SNAKE", "SNAKE"], ["ALL_CLOCKS", "ALL_CLOCKS"], ["ALL_ARROWS", "ALL_ARROWS"]]}], "colour": 128, "message0": "Built in image %1", "tooltip": "Specify one of the built-in images."});
  }
};


Blockly.Blocks['microbit_image_copy'] = {
  init: function() {
    this.jsonInit({"output": "microbit_image", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.copy", "args0": [{"check": "microbit_image", "type": "input_value", "name": "image"}], "colour": 128, "message0": "Copy image %1", "tooltip": "Create an exact copy of the referenced image."});
  }
};


Blockly.Blocks['microbit_image_invert'] = {
  init: function() {
    this.jsonInit({"output": "microbit_image", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.invert", "args0": [{"check": "microbit_image", "type": "input_value", "name": "image"}], "colour": 128, "message0": "Invert image %1", "tooltip": "Create a new image by inverting the brightness of the pixels in the referenced image."});
  }
};


Blockly.Blocks['microbit_image_create'] = {
  init: function() {
    this.jsonInit({"output": "microbit_image", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image", "args0": [{"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "00"}, {"colour": "#000000", "type": "field_colour", "name": "01"}, {"colour": "#000000", "type": "field_colour", "name": "02"}, {"colour": "#000000", "type": "field_colour", "name": "03"}, {"colour": "#000000", "type": "field_colour", "name": "04"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "10"}, {"colour": "#000000", "type": "field_colour", "name": "11"}, {"colour": "#000000", "type": "field_colour", "name": "12"}, {"colour": "#000000", "type": "field_colour", "name": "13"}, {"colour": "#000000", "type": "field_colour", "name": "14"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "20"}, {"colour": "#000000", "type": "field_colour", "name": "21"}, {"colour": "#000000", "type": "field_colour", "name": "22"}, {"colour": "#000000", "type": "field_colour", "name": "23"}, {"colour": "#000000", "type": "field_colour", "name": "24"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "30"}, {"colour": "#000000", "type": "field_colour", "name": "31"}, {"colour": "#000000", "type": "field_colour", "name": "32"}, {"colour": "#000000", "type": "field_colour", "name": "33"}, {"colour": "#000000", "type": "field_colour", "name": "34"}, {"type": "input_dummy"}, {"colour": "#000000", "type": "field_colour", "name": "40"}, {"colour": "#000000", "type": "field_colour", "name": "41"}, {"colour": "#000000", "type": "field_colour", "name": "42"}, {"colour": "#000000", "type": "field_colour", "name": "43"}, {"colour": "#000000", "type": "field_colour", "name": "44"}], "colour": 128, "message0": "Create image %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30", "tooltip": "Create a new image."});
  }
};


Blockly.Blocks['microbit_microbit_panic'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.panic", "args0": [{"type": "field_number", "max": 255, "min": 0, "value": 0, "name": "code"}], "previousStatement": null, "colour": 160, "message0": "Panic with status code %1", "nextStatement": null, "tooltip": "Enter panic mode to indicate something has gone wrong. Requires a restart. Pass in a number to indicate a status code."});
  }
};


Blockly.Blocks['microbit_microbit_reset'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.reset", "nextStatement": null, "previousStatement": null, "colour": 160, "message0": "Reset micro:bit", "tooltip": "Reset the micro:bit"});
  }
};


Blockly.Blocks['microbit_microbit_sleep'] = {
  init: function() {
    this.jsonInit({"nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.sleep", "args0": [{"check": "Number", "type": "input_value", "name": "duration"}], "previousStatement": null, "colour": 160, "message0": "Sleep %1 milliseconds", "inputsInline": true, "tooltip": "Wait for a specified number of milliseconds before the next instruction."});
  }
};


Blockly.Blocks['microbit_microbit_running_time'] = {
  init: function() {
    this.jsonInit({"output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.running_time", "colour": 160, "message0": "Running time", "tooltip": "Get the number of milliseconds since the board was switched on or restarted."});
  }
};


Blockly.Blocks['microbit_microbit_temperature'] = {
  init: function() {
    this.jsonInit({"output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.temperature", "colour": 160, "message0": "Board temperature", "tooltip": "Get the temperature of the micro:bit in degrees Celcius."});
  }
};


Blockly.Blocks['microbit_music_play_built_in'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies", "args0": [{"type": "field_dropdown", "name": "melody", "options": [["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]]}, {"type": "input_dummy"}, {"checked": true, "type": "field_checkbox", "name": "wait"}, {"type": "input_dummy"}, {"checked": false, "type": "field_checkbox", "name": "loop"}], "previousStatement": null, "colour": 192, "message0": "Play built-in melody %1 %2 Wait %3 %4 Loop %5", "nextStatement": null, "tooltip": "Play one of the built-in melodies. Indicate if you need to wait before continuing or continuously loop the melody."});
  }
};


Blockly.Blocks['microbit_music_pitch'] = {
  init: function() {
    this.jsonInit({"nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.pitch", "args0": [{"type": "field_number", "min": 0, "value": 440, "name": "pitch"}, {"type": "input_dummy"}, {"type": "field_number", "min": 0, "value": 1000, "name": "duration"}], "previousStatement": null, "colour": 192, "message0": "Play pitch %1 %2 for  %3 milliseconds", "inputsInline": true, "tooltip": "Play a pitch at a certain number of cycles per second for a specified number of milliseconds."});
  }
};


Blockly.Blocks['microbit_music_play_list_of_notes'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#musical-notation", "args0": [{"check": "Array", "type": "input_value", "name": "notes"}, {"checked": true, "type": "field_checkbox", "name": "wait"}, {"type": "input_dummy"}, {"checked": false, "type": "field_checkbox", "name": "loop"}], "previousStatement": null, "colour": 192, "message0": "Play notes %1 Wait %2 %3 Loop %4", "nextStatement": null, "tooltip": "Play a list of notes expressed in the special music language. Indicate if you need to wait before continuing or continuously loop the melody."});
  }
};


Blockly.Blocks['microbit_music_reset'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset", "nextStatement": null, "previousStatement": null, "colour": 192, "message0": "Reset music", "tooltip": "Reset all music related settings (current tempo, octave and duration) to default values."});
  }
};


Blockly.Blocks['microbit_music_stop'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.stop", "nextStatement": null, "previousStatement": null, "colour": 192, "message0": "Stop music", "tooltip": "Stop all music playback."});
  }
};


Blockly.Blocks['microbit_music_set_tempo'] = {
  init: function() {
    this.jsonInit({"nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo", "args0": [{"check": "Number", "type": "input_value", "name": "ticks"}, {"check": "Number", "type": "input_value", "name": "bpm"}], "previousStatement": null, "colour": 192, "message0": "Set tempo: 1 beat is %1 ticks at %2 bpm", "inputsInline": true, "tooltip": "Set the speed (tempo) of playback. A certain number of ticks represents a beat. Each beat is to be played a certain number of times a minute (beats per minute or BPM)."});
  }
};


Blockly.Blocks['microbit_music_get_tempo'] = {
  init: function() {
    this.jsonInit({"output": "Array", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo", "colour": 192, "message0": "Get current tempo", "tooltip": "Gets current tempo information as two numbers: number of ticks per beat, and number of beats per minute (BPM)."});
  }
};


Blockly.Blocks['microbit_neopixel_initialise'] = {
  init: function() {
    this.jsonInit({"output": "neopixel_object", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel", "args0": [{"type": "field_dropdown", "name": "pin", "options": [["0", "0"], ["1", "1"], ["2", "2"]]}, {"type": "input_dummy"}, {"type": "field_number", "min": 1, "value": 1, "name": "n"}], "colour": 224, "message0": "Initialise pin %1 with %2 %3 neopixel[s]", "tooltip": "Make an object to control any attached neopixels. Specify the number of neopixels and the pin to which they are attached."});
  }
};


Blockly.Blocks['microbit_neopixel_clear'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.clear", "args0": [{"check": "neopixel_object", "type": "input_value", "name": "neopixel_object"}], "previousStatement": null, "colour": 224, "message0": "Clear neopixels on %1", "nextStatement": null, "tooltip": "Clear all neopixels controlled by the referenced neopixel object."});
  }
};


Blockly.Blocks['microbit_neopixel_show'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.show", "args0": [{"check": "neopixel_object", "type": "input_value", "name": "neopixel_object"}], "previousStatement": null, "colour": 224, "message0": "Show neopixels on %1", "nextStatement": null, "tooltip": "Show / update all the neopixels controlled by the referenced neopixel object."});
  }
};


Blockly.Blocks['microbit_neopixel_set'] = {
  init: function() {
    this.jsonInit({"nextStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#using-neopixels", "args0": [{"check": "neopixel_object", "type": "input_value", "name": "neopixel_object"}, {"check": "Number", "type": "input_value", "name": "pixel"}, {"check": "Number", "type": "input_value", "name": "red"}, {"check": "Number", "type": "input_value", "name": "green"}, {"check": "Number", "type": "input_value", "name": "blue"}], "previousStatement": null, "colour": 224, "message0": "Using neopixels on %1 set pixel in position %2 with red %3 green %4 blue %5", "inputsInline": false, "tooltip": "Use the referenced neopixel object to update the individual neopixel in a specific numbered position with a red, green, blue (RGB) value."});
  }
};


Blockly.Blocks['microbit_pin_touched'] = {
  init: function() {
    this.jsonInit({"output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitTouchPin.is_touched", "args0": [{"type": "field_dropdown", "name": "pin", "options": [["0", "0"], ["1", "1"], ["2", "2"]]}], "colour": 256, "message0": "Pin %1 is touched?", "tooltip": "Return True if the referenced pin is touched."});
  }
};


Blockly.Blocks['microbit_pin_read_analog'] = {
  init: function() {
    this.jsonInit({"output": "Number", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.read_analog", "args0": [{"type": "field_dropdown", "name": "pin", "options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["10", "10"]]}], "colour": 256, "message0": "Read analog on pin %1", "tooltip": "Read analog value from the referenced pin."});
  }
};


Blockly.Blocks['microbit_pin_write_analog'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.write_analog", "args0": [{"check": "Number", "type": "input_value", "name": "output"}, {"type": "field_dropdown", "name": "pin", "options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["10", "10"]]}], "previousStatement": null, "colour": 256, "message0": "Write analog value %1 on pin %2", "nextStatement": null, "tooltip": "Write analog value to the referenced pin."});
  }
};


Blockly.Blocks['microbit_pin_read_digital'] = {
  init: function() {
    this.jsonInit({"output": "Boolean", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.read_digital", "args0": [{"type": "field_dropdown", "name": "pin", "options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "12"], ["14", "14"], ["15", "15"], ["16", "16"], ["19", "19"], ["20", "20"]]}], "colour": 256, "message0": "Read digital value on pin %1", "tooltip": "Read digital value (True or False) from the referenced pin."});
  }
};


Blockly.Blocks['microbit_pin_write_digital'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.write_digital", "args0": [{"check": "Number", "type": "input_value", "name": "output"}, {"type": "field_dropdown", "name": "pin", "options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "12"], ["14", "14"], ["15", "15"], ["16", "16"], ["19", "19"], ["20", "20"]]}], "previousStatement": null, "colour": 256, "message0": "Write digital value %1 on pin %2", "nextStatement": null, "tooltip": "Write digital value (True or False) to the referenced pin."});
  }
};


Blockly.Blocks['microbit_radio_on'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.on", "nextStatement": null, "previousStatement": null, "colour": 288, "message0": "Switch on radio", "tooltip": "Turn on the radio. This needs to be explicitly called since the radio draws power and takes up memory that you may otherwise need."});
  }
};


Blockly.Blocks['microbit_radio_off'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.off", "nextStatement": null, "previousStatement": null, "colour": 288, "message0": "Switch off radio", "tooltip": "Turn off the radio, thus saving power and memory."});
  }
};


Blockly.Blocks['microbit_radio_config'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.config", "args0": [{"type": "field_number", "max": 251, "min": 4, "value": 32, "name": "length"}, {"type": "input_dummy"}, {"type": "field_number", "max": 32, "min": 1, "value": 3, "name": "queue"}, {"type": "input_dummy"}, {"type": "field_number", "max": 100, "min": 0, "value": 7, "name": "channel"}, {"type": "input_dummy"}, {"type": "field_number", "max": 7, "min": 0, "value": 0, "name": "power"}, {"type": "input_dummy"}, {"type": "field_dropdown", "name": "data_rate", "options": [["1Mbit", "RATE_1MBIT"], ["250Kbit", "RATE_250KBIT"], ["2Mbit", "RATE_2MBIT"]]}], "previousStatement": null, "colour": 288, "message0": "Configure radio message length %1 %2 maximum queue length %3 %4 tuned to channel %5 %6 broadcast power %7 %8 data rate %9", "nextStatement": null, "tooltip": "Configure the radio. The length defines how long an individual message can be. The queue specifies the number of messages that can be stored on the incoming message queue. The channel defines the frequency to which the radio is tuned. The power specifies the strength of the broadcast signal. The data rate indicates the speed at which data is transferred."});
  }
};


Blockly.Blocks['microbit_radio_reset'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.reset", "nextStatement": null, "previousStatement": null, "colour": 288, "message0": "Reset radio", "tooltip": "Reset the radio to default settings."});
  }
};


Blockly.Blocks['microbit_radio_send_string'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.send", "args0": [{"check": "String", "type": "input_value", "name": "message"}], "previousStatement": null, "colour": 288, "message0": "Send message %1", "nextStatement": null, "tooltip": "Broadcast a text message."});
  }
};


Blockly.Blocks['microbit_radio_receive'] = {
  init: function() {
    this.jsonInit({"output": "String", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.receive", "colour": 288, "message0": "Receive message", "tooltip": "Receive a message."});
  }
};


Blockly.Blocks['microbit_speech_say'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/speech.html#speech.say", "args0": [{"check": "String", "type": "input_value", "name": "english"}], "previousStatement": null, "colour": 320, "message0": "Say %1", "nextStatement": null, "tooltip": "Attempt to say English input."});
  }
};


Blockly.Blocks['microbit_speech_pronounce'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/speech.html#phonemes", "args0": [{"check": "String", "type": "input_value", "name": "phonemes"}], "previousStatement": null, "colour": 320, "message0": "Pronounce %1", "nextStatement": null, "tooltip": "Precisely pronounce phoneme input."});
  }
};


Blockly.Blocks['microbit_speech_sing'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/speech.html#singing", "args0": [{"check": "String", "type": "input_value", "name": "song"}], "previousStatement": null, "colour": 320, "message0": "Sing %1", "nextStatement": null, "tooltip": "Sing phonemes like a ROBOT."});
  }
};


