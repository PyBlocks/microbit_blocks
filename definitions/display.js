[{
  "type": "display_get_pixel",
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
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "display_set_pixel",
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
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "display_clear",
  "message0": "Clear display",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "display_show_image",
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
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "display_show_animation",
  "message0": "Animate images %1 with a delay of %2 milliseconds between frames. %3 Wait %4 %5 Loop %6 %7 Clear %8",
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
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "display_scroll",
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
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "display_on",
  "message0": "Turn on display",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "display_off",
  "message0": "Turn off display",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "display_is_on",
  "message0": "Display is on?",
  "output": "Boolean",
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
}]
