'use strict';

goog.provide('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');
goog.require('Blockly.constants');

Blockly.FieldColour.COLOURS = ['#f00', '#e00', '#d00', '#c00', '#b00', '#a00',
                               '#800', '#600', '#400', '#000'];
Blockly.FieldColour.COLUMNS = 5;


Blockly.Blocks['microbit_accelerometer_get_x'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_x", "tooltip": "Get the acceleration measurement in the X axis.", "output": "Number", "message0": "Accelerometer X axis", "colour": 0});
  }
};


Blockly.Blocks['microbit_accelerometer_get_y'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_y", "tooltip": "Get the acceleration measurement in the Y axis.", "output": "Number", "message0": "Accelerometer Y axis", "colour": 0});
  }
};


Blockly.Blocks['microbit_accelerometer_get_z'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_z", "tooltip": "Get the acceleration measurement in the Z axis.", "output": "Number", "message0": "Accelerometer Z axis", "colour": 0});
  }
};


Blockly.Blocks['microbit_accelerometer_was_gesture'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.was_gesture", "tooltip": "Return True or False to indicate if the named gesture was active since the last check.", "output": "Boolean", "colour": 0, "message0": "Was gesture %1", "args0": [{"options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]], "type": "field_dropdown", "name": "gesture"}]});
  }
};


Blockly.Blocks['microbit_accelerometer_is_gesture'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.is_gesture", "tooltip": "Return True or False to indicate if the named gesture is currently active.", "output": "Boolean", "colour": 0, "message0": "Is gesture %1", "args0": [{"options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]], "type": "field_dropdown", "name": "gesture"}]});
  }
};


Blockly.Blocks['microbit_accelerometer_get_gestures'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_gestures", "tooltip": "Return the gesture history. The most recent gesture is last. Also clears the gesture history.", "output": "Array", "message0": "Get gestures", "colour": 0});
  }
};


Blockly.Blocks['microbit_accelerometer_current_gesture'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.current_gesture", "tooltip": "Return the name of the current gesture.", "output": "String", "message0": "Curent gesture", "colour": 0});
  }
};


Blockly.Blocks['microbit_button_is_pressed'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.is_pressed", "tooltip": "Return True if the specified button is pressed. Otherwise, return False.", "output": "Boolean", "colour": 32, "message0": "Button %1 is pressed", "args0": [{"options": [["A", "a"], ["B", "b"]], "type": "field_dropdown", "name": "button"}]});
  }
};


Blockly.Blocks['microbit_button_was_pressed'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.was_pressed", "tooltip": "Return True if the specified button was pressed since the device started or the last time this was checked.", "output": "Boolean", "colour": 32, "message0": "Button %1 was pressed", "args0": [{"options": [["A", "a"], ["B", "b"]], "type": "field_dropdown", "name": "button"}]});
  }
};


Blockly.Blocks['microbit_button_get_presses'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.get_presses", "tooltip": "Return the running total of presses for the specified button, and resets this total to zero.", "output": "Number", "colour": 32, "message0": "Get number of presses for button %1", "args0": [{"options": [["A", "a"], ["B", "b"]], "type": "field_dropdown", "name": "button"}]});
  }
};


Blockly.Blocks['microbit_compass_calibrate'] = {
  init: function() {
    this.jsonInit({"message0": "Calibrate compass", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.calibrate", "nextStatement": null, "tooltip": "Start the callibration process to improve the accuracy of the compass.", "colour": 64, "previousStatement": null});
  }
};


Blockly.Blocks['microbit_compass_is_calibrated'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.is_calibrated", "tooltip": "Returns True if the compass is calibrated, otherwise returns False.", "output": "Boolean", "message0": "Compass is calibrated?", "colour": 64});
  }
};


Blockly.Blocks['microbit_compass_heading'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.heading", "tooltip": "Return the compass heading as a number between 0 to 360, representing the angle in degrees, clockwise, with north as 0.", "output": "Number", "message0": "Compass heading", "colour": 64});
  }
};


Blockly.Blocks['microbit_compass_get_field_strength'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.get_field_strength", "tooltip": "Return a number indicating the magnitude of the magnetic field around the device.", "output": "Number", "message0": "Compass field strength", "colour": 64});
  }
};


Blockly.Blocks['microbit_display_get_pixel'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.get_pixel", "inputsInline": true, "tooltip": "Get the brightness of the LED at column X and row Y as a number between 0 (off) and 9 (brightest).", "output": "Number", "message0": "Get brightness at X %1 Y %2", "colour": 96, "args0": [{"check": "Number", "type": "input_value", "name": "x"}, {"check": "Number", "type": "input_value", "name": "y"}]});
  }
};


Blockly.Blocks['microbit_display_set_pixel'] = {
  init: function() {
    this.jsonInit({"args0": [{"check": "Number", "type": "input_value", "name": "x"}, {"check": "Number", "type": "input_value", "name": "y"}, {"check": "Number", "type": "input_value", "name": "value"}], "message0": "Set pixel at X %1 Y %2 to brightness %3", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.set_pixel", "inputsInline": true, "tooltip": "Set the brightness of the LED at column X and row Y to a value which has to be a number between 0 (off) and 9 (brightest).", "colour": 96, "previousStatement": null, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_display_clear'] = {
  init: function() {
    this.jsonInit({"message0": "Clear display", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.clear", "nextStatement": null, "tooltip": "Clear the display - set the brightness of all LEDs to 0 (off).", "colour": 96, "previousStatement": null});
  }
};


Blockly.Blocks['microbit_display_show_image'] = {
  init: function() {
    this.jsonInit({"message0": "Show image %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show", "nextStatement": null, "tooltip": "Show the referenced image on the display.", "previousStatement": null, "colour": 96, "args0": [{"check": "microbit_image", "type": "input_value", "name": "image"}]});
  }
};


Blockly.Blocks['microbit_display_show_animation'] = {
  init: function() {
    this.jsonInit({"message0": "Animate images %1 with a frame delay of %2 ms. %3 Wait %4 %5 Loop %6 %7 Clear %8", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show", "nextStatement": null, "tooltip": "Display the list of images as an animation with a certain delay between each frame. Indicate if you need to wait before continuing, continuously loop the animation and clear the display when finished.", "previousStatement": null, "colour": 96, "args0": [{"check": "Array", "type": "input_value", "name": "images"}, {"type": "field_number", "value": 400, "name": "delay", "min": 0}, {"type": "input_dummy"}, {"checked": true, "type": "field_checkbox", "name": "wait"}, {"type": "input_dummy"}, {"checked": false, "type": "field_checkbox", "name": "loop"}, {"type": "input_dummy"}, {"checked": false, "type": "field_checkbox", "name": "clear"}]});
  }
};


Blockly.Blocks['microbit_display_scroll'] = {
  init: function() {
    this.jsonInit({"message0": "Scroll message %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.scroll", "nextStatement": null, "tooltip": "Scroll the referenced text across the display.", "previousStatement": null, "colour": 96, "args0": [{"check": "String", "type": "input_value", "name": "message"}]});
  }
};


Blockly.Blocks['microbit_display_on'] = {
  init: function() {
    this.jsonInit({"message0": "Turn on display", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.on", "nextStatement": null, "tooltip": "Turns on the display.", "colour": 96, "previousStatement": null});
  }
};


Blockly.Blocks['microbit_display_off'] = {
  init: function() {
    this.jsonInit({"message0": "Turn off display", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.off", "nextStatement": null, "tooltip": "Turn off the display.", "colour": 96, "previousStatement": null});
  }
};


Blockly.Blocks['microbit_display_is_on'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.is_on", "tooltip": "Return True if the display is on, otherwise return False.", "output": "Boolean", "message0": "Display is on?", "colour": 96});
  }
};


Blockly.Blocks['microbit_image_builtins'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#attributes", "tooltip": "Specify one of the built-in images.", "output": ["microbit_image", "Array"], "colour": 128, "message0": "Built in image %1", "args0": [{"options": [["HEART", "HEART"], ["HEART_SMALL", "HEART_SMALL"], ["HAPPY", "HAPPY"], ["SMILE", "SMILE"], ["SAD", "SAD"], ["CONFUSED", "CONFUSED"], ["ANGRY", "ANGRY"], ["ASLEEP", "ASLEEP"], ["SURPRISED", "SURPRISED"], ["SILLY", "SILLY"], ["FABULOUS", "FABULOUS"], ["MEH", "MEH"], ["YES", "YES"], ["NO", "NO"], ["CLOCK12", "CLOCK12"], ["CLOCK11", "CLOCK11"], ["CLOCK10", "CLOCK10"], ["CLOCK9", "CLOCK9"], ["CLOCK8", "CLOCK8"], ["CLOCK7", "CLOCK7"], ["CLOCK6", "CLOCK6"], ["CLOCK5", "CLOCK5"], ["CLOCK4", "CLOCK4"], ["CLOCK3", "CLOCK3"], ["CLOCK2", "CLOCK2"], ["CLOCK1", "CLOCK1"], ["ARROW_N", "ARROW_N"], ["ARROW_NE", "ARROW_NE"], ["ARROW_E", "ARROW_E"], ["ARROW_SE", "ARROW_SE"], ["ARROW_S", "ARROW_S"], ["ARROW_SW", "ARROW_SW"], ["ARROW_W", "ARROW_W"], ["ARROW_NW", "ARROW_NW"], ["TRIANGLE", "TRIANGLE"], ["TRIANGLE_LEFT", "TRIANGLE_LEFT"], ["CHESSBOARD", "CHESSBOARD"], ["DIAMOND", "DIAMOND"], ["DIAMOND_SMALL", "DIAMOND_SMALL"], ["SQUARE", "SQUARE"], ["SQUARE_SMALL", "SQUARE_SMALL"], ["RABBIT", "RABBIT"], ["COW", "COW"], ["MUSIC_CROTCHET", "MUSIC_CROTCHET"], ["MUSIC_QUAVER", "MUSIC_QUAVER"], ["MUSIC_QUAVERS", "MUSIC_QUAVERS"], ["PITCHFORK", "PITCHFORK"], ["XMAS", "XMAS"], ["PACMAN", "PACMAN"], ["TARGET", "TARGET"], ["TSHIRT", "TSHIRT"], ["ROLLERSKATE", "ROLLERSKATE"], ["DUCK", "DUCK"], ["HOUSE", "HOUSE"], ["TORTOISE", "TORTOISE"], ["BUTTERFLY", "BUTTERFLY"], ["STICKFIGURE", "STICKFIGURE"], ["GHOST", "GHOST"], ["SWORD", "SWORD"], ["GIRAFFE", "GIRAFFE"], ["SKULL", "SKULL"], ["UMBRELLA", "UMBRELLA"], ["SNAKE", "SNAKE"], ["ALL_CLOCKS", "ALL_CLOCKS"], ["ALL_ARROWS", "ALL_ARROWS"]], "type": "field_dropdown", "name": "image"}]});
  }
};


Blockly.Blocks['microbit_image_copy'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.copy", "tooltip": "Create an exact copy of the referenced image.", "output": "microbit_image", "colour": 128, "message0": "Copy image %1", "args0": [{"check": "microbit_image", "type": "input_value", "name": "image"}]});
  }
};


Blockly.Blocks['microbit_image_invert'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.invert", "tooltip": "Create a new image by inverting the brightness of the pixels in the referenced image.", "output": "microbit_image", "colour": 128, "message0": "Invert image %1", "args0": [{"check": "microbit_image", "type": "input_value", "name": "image"}]});
  }
};


Blockly.Blocks['microbit_image_create'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image", "tooltip": "Create a new image.", "output": "microbit_image", "colour": 128, "message0": "Create image %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30", "args0": [{"type": "input_dummy"}, {"type": "field_colour", "colour": "#000000", "name": "00"}, {"type": "field_colour", "colour": "#000000", "name": "01"}, {"type": "field_colour", "colour": "#000000", "name": "02"}, {"type": "field_colour", "colour": "#000000", "name": "03"}, {"type": "field_colour", "colour": "#000000", "name": "04"}, {"type": "input_dummy"}, {"type": "field_colour", "colour": "#000000", "name": "10"}, {"type": "field_colour", "colour": "#000000", "name": "11"}, {"type": "field_colour", "colour": "#000000", "name": "12"}, {"type": "field_colour", "colour": "#000000", "name": "13"}, {"type": "field_colour", "colour": "#000000", "name": "14"}, {"type": "input_dummy"}, {"type": "field_colour", "colour": "#000000", "name": "20"}, {"type": "field_colour", "colour": "#000000", "name": "21"}, {"type": "field_colour", "colour": "#000000", "name": "22"}, {"type": "field_colour", "colour": "#000000", "name": "23"}, {"type": "field_colour", "colour": "#000000", "name": "24"}, {"type": "input_dummy"}, {"type": "field_colour", "colour": "#000000", "name": "30"}, {"type": "field_colour", "colour": "#000000", "name": "31"}, {"type": "field_colour", "colour": "#000000", "name": "32"}, {"type": "field_colour", "colour": "#000000", "name": "33"}, {"type": "field_colour", "colour": "#000000", "name": "34"}, {"type": "input_dummy"}, {"type": "field_colour", "colour": "#000000", "name": "40"}, {"type": "field_colour", "colour": "#000000", "name": "41"}, {"type": "field_colour", "colour": "#000000", "name": "42"}, {"type": "field_colour", "colour": "#000000", "name": "43"}, {"type": "field_colour", "colour": "#000000", "name": "44"}]});
  }
};


Blockly.Blocks['microbit_microbit_panic'] = {
  init: function() {
    this.jsonInit({"previousStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.panic", "tooltip": "Enter panic mode to indicate something has gone wrong. Requires a restart. Pass in a number to indicate a status code.", "message0": "Panic with status code %1", "colour": 160, "args0": [{"type": "field_number", "name": "code", "value": 0, "max": 255, "min": 0}]});
  }
};


Blockly.Blocks['microbit_microbit_reset'] = {
  init: function() {
    this.jsonInit({"previousStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.reset", "tooltip": "Reset the micro:bit", "message0": "Reset micro:bit", "colour": 160});
  }
};


Blockly.Blocks['microbit_microbit_sleep'] = {
  init: function() {
    this.jsonInit({"args0": [{"check": "Number", "type": "input_value", "name": "duration"}], "message0": "Sleep %1 milliseconds", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.sleep", "inputsInline": true, "tooltip": "Wait for a specified number of milliseconds before the next instruction.", "colour": 160, "previousStatement": null, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_microbit_running_time'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.running_time", "tooltip": "Get the number of milliseconds since the board was switched on or restarted.", "output": "Number", "message0": "Running time", "colour": 160});
  }
};


Blockly.Blocks['microbit_microbit_temperature'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.temperature", "tooltip": "Get the temperature of the micro:bit in degrees Celcius.", "output": "Number", "message0": "Board temperature", "colour": 160});
  }
};


Blockly.Blocks['microbit_music_play_built_in'] = {
  init: function() {
    this.jsonInit({"message0": "Play built-in melody %1 %2 Wait %3 %4 Loop %5", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies", "nextStatement": null, "tooltip": "Play one of the built-in melodies. Indicate if you need to wait before continuing or continuously loop the melody.", "previousStatement": null, "colour": 192, "args0": [{"options": [["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]], "type": "field_dropdown", "name": "melody"}, {"type": "input_dummy"}, {"checked": true, "type": "field_checkbox", "name": "wait"}, {"type": "input_dummy"}, {"checked": false, "type": "field_checkbox", "name": "loop"}]});
  }
};


Blockly.Blocks['microbit_music_pitch'] = {
  init: function() {
    this.jsonInit({"args0": [{"type": "field_number", "value": 440, "name": "pitch", "min": 0}, {"type": "input_dummy"}, {"type": "field_number", "value": 1000, "name": "duration", "min": 0}], "message0": "Play pitch %1 %2 for  %3 milliseconds", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.pitch", "inputsInline": true, "tooltip": "Play a pitch at a certain number of cycles per second for a specified number of milliseconds.", "colour": 192, "previousStatement": null, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_music_play_list_of_notes'] = {
  init: function() {
    this.jsonInit({"message0": "Play notes %1 Wait %2 %3 Loop %4", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#musical-notation", "nextStatement": null, "tooltip": "Play a list of notes expressed in the special music language. Indicate if you need to wait before continuing or continuously loop the melody.", "previousStatement": null, "colour": 192, "args0": [{"check": "Array", "type": "input_value", "name": "notes"}, {"checked": true, "type": "field_checkbox", "name": "wait"}, {"type": "input_dummy"}, {"checked": false, "type": "field_checkbox", "name": "loop"}]});
  }
};


Blockly.Blocks['microbit_music_reset'] = {
  init: function() {
    this.jsonInit({"message0": "Reset music", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset", "nextStatement": null, "tooltip": "Reset all music related settings (current tempo, octave and duration) to default values.", "colour": 192, "previousStatement": null});
  }
};


Blockly.Blocks['microbit_music_stop'] = {
  init: function() {
    this.jsonInit({"message0": "Stop music", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.stop", "nextStatement": null, "tooltip": "Stop all music playback.", "colour": 192, "previousStatement": null});
  }
};


Blockly.Blocks['microbit_music_set_tempo'] = {
  init: function() {
    this.jsonInit({"args0": [{"check": "Number", "type": "input_value", "name": "ticks"}, {"check": "Number", "type": "input_value", "name": "bpm"}], "message0": "Set tempo: 1 beat is %1 ticks at %2 bpm", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo", "inputsInline": true, "tooltip": "Set the speed (tempo) of playback. A certain number of ticks represents a beat. Each beat is to be played a certain number of times a minute (beats per minute or BPM).", "colour": 192, "previousStatement": null, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_music_get_tempo'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo", "tooltip": "Gets current tempo information as two numbers: number of ticks per beat, and number of beats per minute (BPM).", "output": "Array", "message0": "Get current tempo", "colour": 192});
  }
};


Blockly.Blocks['microbit_neopixel_initialise'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel", "tooltip": "Make an object to control any attached neopixels. Specify the number of neopixels and the pin to which they are attached.", "output": "neopixel_object", "colour": 224, "message0": "Initialise pin %1 with %2 %3 neopixel[s]", "args0": [{"options": [["0", "0"], ["1", "1"], ["2", "2"]], "type": "field_dropdown", "name": "pin"}, {"type": "input_dummy"}, {"type": "field_number", "value": 1, "name": "n", "min": 1}]});
  }
};


Blockly.Blocks['microbit_neopixel_clear'] = {
  init: function() {
    this.jsonInit({"message0": "Clear neopixels on %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.clear", "nextStatement": null, "tooltip": "Clear all neopixels controlled by the referenced neopixel object.", "previousStatement": null, "colour": 224, "args0": [{"check": "neopixel_object", "type": "input_value", "name": "neopixel_object"}]});
  }
};


Blockly.Blocks['microbit_neopixel_show'] = {
  init: function() {
    this.jsonInit({"message0": "Show neopixels on %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.show", "nextStatement": null, "tooltip": "Show / update all the neopixels controlled by the referenced neopixel object.", "previousStatement": null, "colour": 224, "args0": [{"check": "neopixel_object", "type": "input_value", "name": "neopixel_object"}]});
  }
};


Blockly.Blocks['microbit_neopixel_set'] = {
  init: function() {
    this.jsonInit({"args0": [{"check": "neopixel_object", "type": "input_value", "name": "neopixel_object"}, {"check": "Number", "type": "input_value", "name": "pixel"}, {"check": "Number", "type": "input_value", "name": "red"}, {"check": "Number", "type": "input_value", "name": "green"}, {"check": "Number", "type": "input_value", "name": "blue"}], "message0": "Using neopixels on %1 set pixel in position %2 with red %3 green %4 blue %5", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#using-neopixels", "inputsInline": false, "tooltip": "Use the referenced neopixel object to update the individual neopixel in a specific numbered position with a red, green, blue (RGB) value.", "colour": 224, "previousStatement": null, "nextStatement": null});
  }
};


Blockly.Blocks['microbit_pin_touched'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitTouchPin.is_touched", "tooltip": "Return True if the referenced pin is touched.", "output": "Boolean", "colour": 256, "message0": "Pin %1 is touched?", "args0": [{"options": [["0", "0"], ["1", "1"], ["2", "2"]], "type": "field_dropdown", "name": "pin"}]});
  }
};


Blockly.Blocks['microbit_pin_read_analog'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.read_analog", "tooltip": "Read analog value from the referenced pin.", "output": "Number", "colour": 256, "message0": "Read analog on pin %1", "args0": [{"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["10", "10"]], "type": "field_dropdown", "name": "pin"}]});
  }
};


Blockly.Blocks['microbit_pin_write_analog'] = {
  init: function() {
    this.jsonInit({"message0": "Write analog value %1 on pin %2", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.write_analog", "nextStatement": null, "tooltip": "Write analog value to the referenced pin.", "previousStatement": null, "colour": 256, "args0": [{"check": "Number", "type": "input_value", "name": "output"}, {"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["10", "10"]], "type": "field_dropdown", "name": "pin"}]});
  }
};


Blockly.Blocks['microbit_pin_read_digital'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.read_digital", "tooltip": "Read digital value (True or False) from the referenced pin.", "output": "Boolean", "colour": 256, "message0": "Read digital value on pin %1", "args0": [{"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "12"], ["14", "14"], ["15", "15"], ["16", "16"], ["19", "19"], ["20", "20"]], "type": "field_dropdown", "name": "pin"}]});
  }
};


Blockly.Blocks['microbit_pin_write_digital'] = {
  init: function() {
    this.jsonInit({"message0": "Write digital value %1 on pin %2", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.write_digital", "nextStatement": null, "tooltip": "Write digital value (True or False) to the referenced pin.", "previousStatement": null, "colour": 256, "args0": [{"check": "Number", "type": "input_value", "name": "output"}, {"options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "12"], ["14", "14"], ["15", "15"], ["16", "16"], ["19", "19"], ["20", "20"]], "type": "field_dropdown", "name": "pin"}]});
  }
};


Blockly.Blocks['microbit_radio_on'] = {
  init: function() {
    this.jsonInit({"message0": "Switch on radio", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.on", "nextStatement": null, "tooltip": "Turn on the radio. This needs to be explicitly called since the radio draws power and takes up memory that you may otherwise need.", "colour": 288, "previousStatement": null});
  }
};


Blockly.Blocks['microbit_radio_off'] = {
  init: function() {
    this.jsonInit({"message0": "Switch off radio", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.off", "nextStatement": null, "tooltip": "Turn off the radio, thus saving power and memory.", "colour": 288, "previousStatement": null});
  }
};


Blockly.Blocks['microbit_radio_config'] = {
  init: function() {
    this.jsonInit({"message0": "Configure radio message length %1 %2 maximum queue length %3 %4 tuned to channel %5 %6 broadcast power %7 %8 data rate %9", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.config", "nextStatement": null, "tooltip": "Configure the radio. The length defines how long an individual message can be. The queue specifies the number of messages that can be stored on the incoming message queue. The channel defines the frequency to which the radio is tuned. The power specifies the strength of the broadcast signal. The data rate indicates the speed at which data is transferred.", "previousStatement": null, "colour": 288, "args0": [{"type": "field_number", "name": "length", "value": 32, "max": 251, "min": 4}, {"type": "input_dummy"}, {"type": "field_number", "name": "queue", "value": 3, "max": 32, "min": 1}, {"type": "input_dummy"}, {"type": "field_number", "name": "channel", "value": 7, "max": 100, "min": 0}, {"type": "input_dummy"}, {"type": "field_number", "name": "power", "value": 0, "max": 7, "min": 0}, {"type": "input_dummy"}, {"options": [["1Mbit", "RATE_1MBIT"], ["250Kbit", "RATE_250KBIT"], ["2Mbit", "RATE_2MBIT"]], "type": "field_dropdown", "name": "data_rate"}]});
  }
};


Blockly.Blocks['microbit_radio_reset'] = {
  init: function() {
    this.jsonInit({"message0": "Reset radio", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.reset", "nextStatement": null, "tooltip": "Reset the radio to default settings.", "colour": 288, "previousStatement": null});
  }
};


Blockly.Blocks['microbit_radio_send_string'] = {
  init: function() {
    this.jsonInit({"message0": "Send message %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.send", "nextStatement": null, "tooltip": "Broadcast a text message.", "previousStatement": null, "colour": 288, "args0": [{"check": "String", "type": "input_value", "name": "message"}]});
  }
};


Blockly.Blocks['microbit_radio_receive'] = {
  init: function() {
    this.jsonInit({"helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.receive", "tooltip": "Receive a message.", "output": "String", "message0": "Receive message", "colour": 288});
  }
};


Blockly.Blocks['microbit_speech_say'] = {
  init: function() {
    this.jsonInit({"message0": "Say %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/speech.html#speech.say", "nextStatement": null, "tooltip": "Attempt to say English input.", "previousStatement": null, "colour": 320, "args0": [{"check": "String", "type": "input_value", "name": "english"}]});
  }
};


Blockly.Blocks['microbit_speech_pronounce'] = {
  init: function() {
    this.jsonInit({"message0": "Pronounce %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/speech.html#phonemes", "nextStatement": null, "tooltip": "Precisely pronounce phoneme input.", "previousStatement": null, "colour": 320, "args0": [{"check": "String", "type": "input_value", "name": "phonemes"}]});
  }
};


Blockly.Blocks['microbit_speech_sing'] = {
  init: function() {
    this.jsonInit({"message0": "Sing %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/speech.html#singing", "nextStatement": null, "tooltip": "Sing phonemes like a ROBOT.", "previousStatement": null, "colour": 320, "args0": [{"check": "String", "type": "input_value", "name": "song"}]});
  }
};


