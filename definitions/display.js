[{
  "type": "microbit_display_get_pixel",
  "message0": "Get brightness at X %1 Y %2",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 0,
  "tooltip": "Get the brightness of the LED at column X and row Y as a number between 0 (off) and 9 (brightest).",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.get_pixel"
},
{
  "type": "microbit_display_set_pixel",
  "message0": "Set pixel at X %1 Y %2 to brightness %3",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "value",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Set the brightness of the LED at column X and row Y to a value which has to be a number between 0 (off) and 9 (brightest).",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.set_pixel"
},
{
  "type": "microbit_display_clear",
  "message0": "Clear display",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Clear the display - set the brightness of all LEDs to 0 (off).",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.clear"
},
{
  "type": "microbit_display_show_image",
  "message0": "Show image %1",
  "args0": [
    {
      "type": "input_value",
      "name": "image",
      "check": "microbit_image"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Show the referenced image on the display.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show"
},
{
  "type": "microbit_display_show_animation",
  "message0": "Animate images %1 with a frame delay of %2 ms. %3 Wait %4 %5 Loop %6 %7 Clear %8",
  "args0": [
    {
      "type": "input_value",
      "name": "images",
      "check": "Array"
    },
    {
      "type": "field_number",
      "name": "delay",
      "value": 400,
      "min": 0
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "wait",
      "checked": true
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "loop",
      "checked": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "clear",
      "checked": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Display the list of images as an animation with a certain delay between each frame. Indicate if you need to wait before continuing, continuously loop the animation and clear the display when finished.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show"
},
{
  "type": "microbit_display_scroll",
  "message0": "Scroll message %1",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Scroll the referenced text across the display.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.scroll"
},
{
  "type": "microbit_display_on",
  "message0": "Turn on display",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Turns on the display.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.on"
},
{
  "type": "microbit_display_off",
  "message0": "Turn off display",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Turn off the display.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.off"
},
{
  "type": "microbit_display_is_on",
  "message0": "Display is on?",
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Return True if the display is on, otherwise return False.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.is_on"
}]
