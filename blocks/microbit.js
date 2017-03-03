'use strict';

goog.provide('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');
goog.require('Blockly.constants');

Blockly.FieldColour.COLOURS = ['#000', '#400', '#600', '#800', '#a00', '#b00',
                               '#c00', '#d00', '#e00', '#f00'];
Blockly.FieldColour.COLUMNS = 5;


Blockly.Blocks['microbit_accelerometer_get_x'] = {
  init: function() {
    this.jsonInit({"tooltip": "Get the acceleration measurement in the X axis.", "message0": "Accelerometer X axis", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_x", "colour": 0, "output": "Number"});
  }
};


Blockly.Blocks['microbit_accelerometer_get_y'] = {
  init: function() {
    this.jsonInit({"tooltip": "Get the acceleration measurement in the Y axis.", "message0": "Accelerometer Y axis", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_y", "colour": 0, "output": "Number"});
  }
};


Blockly.Blocks['microbit_accelerometer_get_z'] = {
  init: function() {
    this.jsonInit({"tooltip": "Get the acceleration measurement in the Z axis.", "message0": "Accelerometer Z axis", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_z", "colour": 0, "output": "Number"});
  }
};


Blockly.Blocks['microbit_accelerometer_was_gesture'] = {
  init: function() {
    this.jsonInit({"tooltip": "Return True or False to indicate if the named gesture was active since the last check.", "args0": [{"name": "gesture", "type": "field_dropdown", "options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]]}], "message0": "Was gesture %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.was_gesture", "colour": 0, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_accelerometer_is_gesture'] = {
  init: function() {
    this.jsonInit({"tooltip": "Return True or False to indicate if the named gesture is currently active.", "args0": [{"name": "gesture", "type": "field_dropdown", "options": [["shake", "shake"], ["up", "up"], ["down", "down"], ["left", "left"], ["right", "right"], ["face up", "face up"], ["face down", "face down"], ["freefall", "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]]}], "message0": "Is gesture %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.is_gesture", "colour": 0, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_accelerometer_get_gestures'] = {
  init: function() {
    this.jsonInit({"tooltip": "Return the gesture history. The most recent gesture is last. Also clears the gesture history.", "message0": "Get gestures", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_gestures", "colour": 0, "output": "Array"});
  }
};


Blockly.Blocks['microbit_accelerometer_current_gesture'] = {
  init: function() {
    this.jsonInit({"tooltip": "Return the name of the current gesture.", "message0": "Current gesture", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.current_gesture", "colour": 0, "output": "String"});
  }
};


Blockly.Blocks['microbit_button_is_pressed'] = {
  init: function() {
    this.jsonInit({"tooltip": "Return True if the specified button is pressed. Otherwise, return False.", "args0": [{"name": "button", "type": "field_dropdown", "options": [["A", "a"], ["B", "b"]]}], "message0": "Button %1 is pressed", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.is_pressed", "colour": 32, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_button_was_pressed'] = {
  init: function() {
    this.jsonInit({"tooltip": "Return True if the specified button was pressed since the device started or the last time this was checked.", "args0": [{"name": "button", "type": "field_dropdown", "options": [["A", "a"], ["B", "b"]]}], "message0": "Button %1 was pressed", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.was_pressed", "colour": 32, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_button_get_presses'] = {
  init: function() {
    this.jsonInit({"tooltip": "Return the running total of presses for the specified button, and resets this total to zero.", "args0": [{"name": "button", "type": "field_dropdown", "options": [["A", "a"], ["B", "b"]]}], "message0": "Get number of presses for button %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.get_presses", "colour": 32, "output": "Number"});
  }
};


Blockly.Blocks['microbit_compass_calibrate'] = {
  init: function() {
    this.jsonInit({"previousStatement": null, "tooltip": "Start the callibration process to improve the accuracy of the compass.", "nextStatement": null, "message0": "Calibrate compass", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.calibrate", "colour": 64});
  }
};


Blockly.Blocks['microbit_compass_is_calibrated'] = {
  init: function() {
    this.jsonInit({"tooltip": "Returns True if the compass is calibrated, otherwise returns False.", "message0": "Compass is calibrated?", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.is_calibrated", "colour": 64, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_compass_heading'] = {
  init: function() {
    this.jsonInit({"tooltip": "Return the compass heading as a number between 0 to 360, representing the angle in degrees, clockwise, with north as 0.", "message0": "Compass heading", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.heading", "colour": 64, "output": "Number"});
  }
};


Blockly.Blocks['microbit_compass_get_field_strength'] = {
  init: function() {
    this.jsonInit({"tooltip": "Return a number indicating the magnitude of the magnetic field around the device.", "message0": "Compass field strength", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/compass.html#microbit.compass.get_field_strength", "colour": 64, "output": "Number"});
  }
};


Blockly.Blocks['microbit_display_get_pixel'] = {
  init: function() {
    this.jsonInit({"tooltip": "Get the brightness of the LED at column X and row Y as a number between 0 (off) and 9 (brightest).", "args0": [{"name": "x", "check": "Number", "type": "input_value"}, {"name": "y", "check": "Number", "type": "input_value"}], "message0": "Get brightness at X %1 Y %2", "colour": 96, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.get_pixel", "output": "Number", "inputsInline": true});
  }
};


Blockly.Blocks['microbit_display_set_pixel'] = {
  init: function() {
    this.jsonInit({"tooltip": "Set the brightness of the LED at column X and row Y to a value which has to be a number between 0 (off) and 9 (brightest).", "nextStatement": null, "args0": [{"name": "x", "check": "Number", "type": "input_value"}, {"name": "y", "check": "Number", "type": "input_value"}, {"name": "value", "check": "Number", "type": "input_value"}], "message0": "Set pixel at X %1 Y %2 to brightness %3", "colour": 96, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.set_pixel", "previousStatement": null, "inputsInline": true});
  }
};


Blockly.Blocks['microbit_display_clear'] = {
  init: function() {
    this.jsonInit({"previousStatement": null, "tooltip": "Clear the display - set the brightness of all LEDs to 0 (off).", "nextStatement": null, "message0": "Clear display", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.clear", "colour": 96});
  }
};


Blockly.Blocks['microbit_display_show_image'] = {
  init: function() {
    this.jsonInit({"tooltip": "Show the referenced image on the display.", "nextStatement": null, "args0": [{"name": "image", "check": "microbit_image", "type": "input_value"}], "message0": "Show image %1", "colour": 96, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_display_show_animation'] = {
  init: function() {
    this.jsonInit({"tooltip": "Display the list of images as an animation with a certain delay between each frame. Indicate if you need to wait before continuing, continuously loop the animation and clear the display when finished.", "nextStatement": null, "args0": [{"name": "images", "check": "Array", "type": "input_value"}, {"name": "delay", "min": 0, "value": 400, "type": "field_number"}, {"type": "input_dummy"}, {"name": "wait", "checked": true, "type": "field_checkbox"}, {"type": "input_dummy"}, {"name": "loop", "checked": false, "type": "field_checkbox"}, {"type": "input_dummy"}, {"name": "clear", "checked": false, "type": "field_checkbox"}], "message0": "Animate images %1 with a frame delay of %2 ms. %3 Wait %4 %5 Loop %6 %7 Clear %8", "colour": 96, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_display_scroll'] = {
  init: function() {
    this.jsonInit({"tooltip": "Scroll the referenced text across the display.", "nextStatement": null, "args0": [{"name": "message", "check": "String", "type": "input_value"}], "message0": "Scroll message %1", "colour": 96, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.scroll", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_display_on'] = {
  init: function() {
    this.jsonInit({"previousStatement": null, "tooltip": "Turns on the display.", "nextStatement": null, "message0": "Turn on display", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.on", "colour": 96});
  }
};


Blockly.Blocks['microbit_display_off'] = {
  init: function() {
    this.jsonInit({"previousStatement": null, "tooltip": "Turn off the display.", "nextStatement": null, "message0": "Turn off display", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.off", "colour": 96});
  }
};


Blockly.Blocks['microbit_display_is_on'] = {
  init: function() {
    this.jsonInit({"tooltip": "Return True if the display is on, otherwise return False.", "message0": "Display is on?", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.is_on", "colour": 96, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_image_builtins'] = {
  init: function() {
    this.jsonInit({"tooltip": "Specify one of the built-in images.", "args0": [{"name": "image", "type": "field_dropdown", "options": [["HEART", "HEART"], ["HEART_SMALL", "HEART_SMALL"], ["HAPPY", "HAPPY"], ["SMILE", "SMILE"], ["SAD", "SAD"], ["CONFUSED", "CONFUSED"], ["ANGRY", "ANGRY"], ["ASLEEP", "ASLEEP"], ["SURPRISED", "SURPRISED"], ["SILLY", "SILLY"], ["FABULOUS", "FABULOUS"], ["MEH", "MEH"], ["YES", "YES"], ["NO", "NO"], ["CLOCK12", "CLOCK12"], ["CLOCK11", "CLOCK11"], ["CLOCK10", "CLOCK10"], ["CLOCK9", "CLOCK9"], ["CLOCK8", "CLOCK8"], ["CLOCK7", "CLOCK7"], ["CLOCK6", "CLOCK6"], ["CLOCK5", "CLOCK5"], ["CLOCK4", "CLOCK4"], ["CLOCK3", "CLOCK3"], ["CLOCK2", "CLOCK2"], ["CLOCK1", "CLOCK1"], ["ARROW_N", "ARROW_N"], ["ARROW_NE", "ARROW_NE"], ["ARROW_E", "ARROW_E"], ["ARROW_SE", "ARROW_SE"], ["ARROW_S", "ARROW_S"], ["ARROW_SW", "ARROW_SW"], ["ARROW_W", "ARROW_W"], ["ARROW_NW", "ARROW_NW"], ["TRIANGLE", "TRIANGLE"], ["TRIANGLE_LEFT", "TRIANGLE_LEFT"], ["CHESSBOARD", "CHESSBOARD"], ["DIAMOND", "DIAMOND"], ["DIAMOND_SMALL", "DIAMOND_SMALL"], ["SQUARE", "SQUARE"], ["SQUARE_SMALL", "SQUARE_SMALL"], ["RABBIT", "RABBIT"], ["COW", "COW"], ["MUSIC_CROTCHET", "MUSIC_CROTCHET"], ["MUSIC_QUAVER", "MUSIC_QUAVER"], ["MUSIC_QUAVERS", "MUSIC_QUAVERS"], ["PITCHFORK", "PITCHFORK"], ["XMAS", "XMAS"], ["PACMAN", "PACMAN"], ["TARGET", "TARGET"], ["TSHIRT", "TSHIRT"], ["ROLLERSKATE", "ROLLERSKATE"], ["DUCK", "DUCK"], ["HOUSE", "HOUSE"], ["TORTOISE", "TORTOISE"], ["BUTTERFLY", "BUTTERFLY"], ["STICKFIGURE", "STICKFIGURE"], ["GHOST", "GHOST"], ["SWORD", "SWORD"], ["GIRAFFE", "GIRAFFE"], ["SKULL", "SKULL"], ["UMBRELLA", "UMBRELLA"], ["SNAKE", "SNAKE"], ["ALL_CLOCKS", "ALL_CLOCKS"], ["ALL_ARROWS", "ALL_ARROWS"]]}], "message0": "Built in image %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#attributes", "colour": 128, "output": ["microbit_image", "Array"]});
  }
};


Blockly.Blocks['microbit_image_copy'] = {
  init: function() {
    this.jsonInit({"tooltip": "Create an exact copy of the referenced image.", "args0": [{"name": "image", "check": "microbit_image", "type": "input_value"}], "message0": "Copy image %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.copy", "colour": 128, "output": "microbit_image"});
  }
};


Blockly.Blocks['microbit_image_invert'] = {
  init: function() {
    this.jsonInit({"tooltip": "Create a new image by inverting the brightness of the pixels in the referenced image.", "args0": [{"name": "image", "check": "microbit_image", "type": "input_value"}], "message0": "Invert image %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.invert", "colour": 128, "output": "microbit_image"});
  }
};


Blockly.Blocks['microbit_image_create'] = {
  init: function() {
    this.jsonInit({"tooltip": "Create a new image.", "args0": [{"type": "input_dummy"}, {"name": "00", "type": "field_colour", "colour": "#000000"}, {"name": "01", "type": "field_colour", "colour": "#000000"}, {"name": "02", "type": "field_colour", "colour": "#000000"}, {"name": "03", "type": "field_colour", "colour": "#000000"}, {"name": "04", "type": "field_colour", "colour": "#000000"}, {"type": "input_dummy"}, {"name": "10", "type": "field_colour", "colour": "#000000"}, {"name": "11", "type": "field_colour", "colour": "#000000"}, {"name": "12", "type": "field_colour", "colour": "#000000"}, {"name": "13", "type": "field_colour", "colour": "#000000"}, {"name": "14", "type": "field_colour", "colour": "#000000"}, {"type": "input_dummy"}, {"name": "20", "type": "field_colour", "colour": "#000000"}, {"name": "21", "type": "field_colour", "colour": "#000000"}, {"name": "22", "type": "field_colour", "colour": "#000000"}, {"name": "23", "type": "field_colour", "colour": "#000000"}, {"name": "24", "type": "field_colour", "colour": "#000000"}, {"type": "input_dummy"}, {"name": "30", "type": "field_colour", "colour": "#000000"}, {"name": "31", "type": "field_colour", "colour": "#000000"}, {"name": "32", "type": "field_colour", "colour": "#000000"}, {"name": "33", "type": "field_colour", "colour": "#000000"}, {"name": "34", "type": "field_colour", "colour": "#000000"}, {"type": "input_dummy"}, {"name": "40", "type": "field_colour", "colour": "#000000"}, {"name": "41", "type": "field_colour", "colour": "#000000"}, {"name": "42", "type": "field_colour", "colour": "#000000"}, {"name": "43", "type": "field_colour", "colour": "#000000"}, {"name": "44", "type": "field_colour", "colour": "#000000"}], "message0": "Create image %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image", "colour": 128, "output": "microbit_image"});
  }
};


Blockly.Blocks['microbit_microbit_panic'] = {
  init: function() {
    this.jsonInit({"tooltip": "Enter panic mode to indicate something has gone wrong. Requires a restart. Pass in a number to indicate a status code.", "previousStatement": null, "message0": "Panic with status code %1", "colour": 160, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.panic", "args0": [{"value": 0, "name": "code", "min": 0, "max": 255, "type": "field_number"}]});
  }
};


Blockly.Blocks['microbit_microbit_reset'] = {
  init: function() {
    this.jsonInit({"tooltip": "Reset the micro:bit", "previousStatement": null, "message0": "Reset micro:bit", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.reset", "colour": 160});
  }
};


Blockly.Blocks['microbit_microbit_sleep'] = {
  init: function() {
    this.jsonInit({"tooltip": "Wait for a specified number of milliseconds before the next instruction.", "nextStatement": null, "args0": [{"name": "duration", "check": "Number", "type": "input_value"}], "message0": "Sleep %1 milliseconds", "colour": 160, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.sleep", "previousStatement": null, "inputsInline": true});
  }
};


Blockly.Blocks['microbit_microbit_running_time'] = {
  init: function() {
    this.jsonInit({"tooltip": "Get the number of milliseconds since the board was switched on or restarted.", "message0": "Running time", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.running_time", "colour": 160, "output": "Number"});
  }
};


Blockly.Blocks['microbit_microbit_temperature'] = {
  init: function() {
    this.jsonInit({"tooltip": "Get the temperature of the micro:bit in degrees Celcius.", "message0": "Board temperature", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.temperature", "colour": 160, "output": "Number"});
  }
};


Blockly.Blocks['microbit_music_play_built_in'] = {
  init: function() {
    this.jsonInit({"tooltip": "Play one of the built-in melodies. Indicate if you need to wait before continuing or continuously loop the melody.", "nextStatement": null, "args0": [{"name": "melody", "type": "field_dropdown", "options": [["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]]}, {"type": "input_dummy"}, {"name": "wait", "checked": true, "type": "field_checkbox"}, {"type": "input_dummy"}, {"name": "loop", "checked": false, "type": "field_checkbox"}], "message0": "Play built-in melody %1 %2 Wait %3 %4 Loop %5", "colour": 192, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_music_pitch'] = {
  init: function() {
    this.jsonInit({"tooltip": "Play a pitch at a certain number of cycles per second for a specified number of milliseconds.", "nextStatement": null, "args0": [{"name": "pitch", "min": 0, "value": 440, "type": "field_number"}, {"type": "input_dummy"}, {"name": "duration", "min": 0, "value": 1000, "type": "field_number"}], "message0": "Play pitch %1 %2 for  %3 milliseconds", "colour": 192, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.pitch", "previousStatement": null, "inputsInline": true});
  }
};


Blockly.Blocks['microbit_music_play_list_of_notes'] = {
  init: function() {
    this.jsonInit({"tooltip": "Play a list of notes expressed in the special music language. Indicate if you need to wait before continuing or continuously loop the melody.", "nextStatement": null, "args0": [{"name": "notes", "check": "Array", "type": "input_value"}, {"name": "wait", "checked": true, "type": "field_checkbox"}, {"type": "input_dummy"}, {"name": "loop", "checked": false, "type": "field_checkbox"}], "message0": "Play notes %1 Wait %2 %3 Loop %4", "colour": 192, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#musical-notation", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_music_reset'] = {
  init: function() {
    this.jsonInit({"previousStatement": null, "tooltip": "Reset all music related settings (current tempo, octave and duration) to default values.", "nextStatement": null, "message0": "Reset music", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset", "colour": 192});
  }
};


Blockly.Blocks['microbit_music_stop'] = {
  init: function() {
    this.jsonInit({"previousStatement": null, "tooltip": "Stop all music playback.", "nextStatement": null, "message0": "Stop music", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.stop", "colour": 192});
  }
};


Blockly.Blocks['microbit_music_set_tempo'] = {
  init: function() {
    this.jsonInit({"tooltip": "Set the speed (tempo) of playback. A certain number of ticks represents a beat. Each beat is to be played a certain number of times a minute (beats per minute or BPM).", "nextStatement": null, "args0": [{"name": "ticks", "check": "Number", "type": "input_value"}, {"name": "bpm", "check": "Number", "type": "input_value"}], "message0": "Set tempo: 1 beat is %1 ticks at %2 bpm", "colour": 192, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo", "previousStatement": null, "inputsInline": true});
  }
};


Blockly.Blocks['microbit_music_get_tempo'] = {
  init: function() {
    this.jsonInit({"tooltip": "Gets current tempo information as two numbers: number of ticks per beat, and number of beats per minute (BPM).", "message0": "Get current tempo", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo", "colour": 192, "output": "Array"});
  }
};


Blockly.Blocks['microbit_neopixel_initialise'] = {
  init: function() {
    this.jsonInit({"tooltip": "Make an object to control any attached neopixels. Specify the number of neopixels and the pin to which they are attached.", "args0": [{"name": "pin", "type": "field_dropdown", "options": [["0", "0"], ["1", "1"], ["2", "2"]]}, {"type": "input_dummy"}, {"name": "n", "min": 1, "value": 1, "type": "field_number"}], "message0": "Initialise pin %1 with %2 %3 neopixel[s]", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel", "colour": 224, "output": "neopixel_object"});
  }
};


Blockly.Blocks['microbit_neopixel_clear'] = {
  init: function() {
    this.jsonInit({"tooltip": "Clear all neopixels controlled by the referenced neopixel object.", "nextStatement": null, "args0": [{"name": "neopixel_object", "check": "neopixel_object", "type": "input_value"}], "message0": "Clear neopixels on %1", "colour": 224, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.clear", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_neopixel_show'] = {
  init: function() {
    this.jsonInit({"tooltip": "Show / update all the neopixels controlled by the referenced neopixel object.", "nextStatement": null, "args0": [{"name": "neopixel_object", "check": "neopixel_object", "type": "input_value"}], "message0": "Show neopixels on %1", "colour": 224, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.show", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_neopixel_set'] = {
  init: function() {
    this.jsonInit({"tooltip": "Use the referenced neopixel object to update the individual neopixel in a specific numbered position with a red, green, blue (RGB) value.", "nextStatement": null, "args0": [{"name": "neopixel_object", "check": "neopixel_object", "type": "input_value"}, {"name": "pixel", "check": "Number", "type": "input_value"}, {"name": "red", "check": "Number", "type": "input_value"}, {"name": "green", "check": "Number", "type": "input_value"}, {"name": "blue", "check": "Number", "type": "input_value"}], "message0": "Using neopixels on %1 set pixel in position %2 with red %3 green %4 blue %5", "colour": 224, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#using-neopixels", "previousStatement": null, "inputsInline": false});
  }
};


Blockly.Blocks['microbit_pin_touched'] = {
  init: function() {
    this.jsonInit({"tooltip": "Return True if the referenced pin is touched.", "args0": [{"name": "pin", "type": "field_dropdown", "options": [["0", "0"], ["1", "1"], ["2", "2"]]}], "message0": "Pin %1 is touched?", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitTouchPin.is_touched", "colour": 256, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_pin_read_analog'] = {
  init: function() {
    this.jsonInit({"tooltip": "Read analog value from the referenced pin.", "args0": [{"name": "pin", "type": "field_dropdown", "options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["10", "10"]]}], "message0": "Read analog on pin %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.read_analog", "colour": 256, "output": "Number"});
  }
};


Blockly.Blocks['microbit_pin_write_analog'] = {
  init: function() {
    this.jsonInit({"tooltip": "Write analog value to the referenced pin.", "nextStatement": null, "args0": [{"name": "output", "check": "Number", "type": "input_value"}, {"name": "pin", "type": "field_dropdown", "options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["10", "10"]]}], "message0": "Write analog value %1 on pin %2", "colour": 256, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.write_analog", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_pin_read_digital'] = {
  init: function() {
    this.jsonInit({"tooltip": "Read digital value (True or False) from the referenced pin.", "args0": [{"name": "pin", "type": "field_dropdown", "options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "12"], ["14", "14"], ["15", "15"], ["16", "16"], ["19", "19"], ["20", "20"]]}], "message0": "Read digital value on pin %1", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.read_digital", "colour": 256, "output": "Boolean"});
  }
};


Blockly.Blocks['microbit_pin_write_digital'] = {
  init: function() {
    this.jsonInit({"tooltip": "Write digital value (True or False) to the referenced pin.", "nextStatement": null, "args0": [{"name": "output", "check": "Number", "type": "input_value"}, {"name": "pin", "type": "field_dropdown", "options": [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "12"], ["14", "14"], ["15", "15"], ["16", "16"], ["19", "19"], ["20", "20"]]}], "message0": "Write digital value %1 on pin %2", "colour": 256, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.write_digital", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_radio_on'] = {
  init: function() {
    this.jsonInit({"previousStatement": null, "tooltip": "Turn on the radio. This needs to be explicitly called since the radio draws power and takes up memory that you may otherwise need.", "nextStatement": null, "message0": "Switch on radio", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.on", "colour": 288});
  }
};


Blockly.Blocks['microbit_radio_off'] = {
  init: function() {
    this.jsonInit({"previousStatement": null, "tooltip": "Turn off the radio, thus saving power and memory.", "nextStatement": null, "message0": "Switch off radio", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.off", "colour": 288});
  }
};


Blockly.Blocks['microbit_radio_config'] = {
  init: function() {
    this.jsonInit({"tooltip": "Configure the radio. The length defines how long an individual message can be. The queue specifies the number of messages that can be stored on the incoming message queue. The channel defines the frequency to which the radio is tuned. The power specifies the strength of the broadcast signal. The data rate indicates the speed at which data is transferred.", "nextStatement": null, "args0": [{"value": 32, "name": "length", "min": 4, "max": 251, "type": "field_number"}, {"type": "input_dummy"}, {"value": 3, "name": "queue", "min": 1, "max": 32, "type": "field_number"}, {"type": "input_dummy"}, {"value": 7, "name": "channel", "min": 0, "max": 100, "type": "field_number"}, {"type": "input_dummy"}, {"value": 0, "name": "power", "min": 0, "max": 7, "type": "field_number"}, {"type": "input_dummy"}, {"name": "data_rate", "type": "field_dropdown", "options": [["1Mbit", "RATE_1MBIT"], ["250Kbit", "RATE_250KBIT"], ["2Mbit", "RATE_2MBIT"]]}], "message0": "Configure radio message length %1 %2 maximum queue length %3 %4 tuned to channel %5 %6 broadcast power %7 %8 data rate %9", "colour": 288, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.config", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_radio_reset'] = {
  init: function() {
    this.jsonInit({"previousStatement": null, "tooltip": "Reset the radio to default settings.", "nextStatement": null, "message0": "Reset radio", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.reset", "colour": 288});
  }
};


Blockly.Blocks['microbit_radio_send_string'] = {
  init: function() {
    this.jsonInit({"tooltip": "Broadcast a text message.", "nextStatement": null, "args0": [{"name": "message", "check": "String", "type": "input_value"}], "message0": "Send message %1", "colour": 288, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.send", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_radio_receive'] = {
  init: function() {
    this.jsonInit({"tooltip": "Receive a message.", "message0": "Receive message", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.receive", "colour": 288, "output": "String"});
  }
};


Blockly.Blocks['microbit_speech_say'] = {
  init: function() {
    this.jsonInit({"tooltip": "Attempt to say English input.", "nextStatement": null, "args0": [{"name": "english", "check": "String", "type": "input_value"}], "message0": "Say %1", "colour": 320, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/speech.html#speech.say", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_speech_pronounce'] = {
  init: function() {
    this.jsonInit({"tooltip": "Precisely pronounce phoneme input.", "nextStatement": null, "args0": [{"name": "phonemes", "check": "String", "type": "input_value"}], "message0": "Pronounce %1", "colour": 320, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/speech.html#phonemes", "previousStatement": null});
  }
};


Blockly.Blocks['microbit_speech_sing'] = {
  init: function() {
    this.jsonInit({"tooltip": "Sing phonemes like a ROBOT.", "nextStatement": null, "args0": [{"name": "song", "check": "String", "type": "input_value"}], "message0": "Sing %1", "colour": 320, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/speech.html#singing", "previousStatement": null});
  }
};


