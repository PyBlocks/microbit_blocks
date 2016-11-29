[{
  "type": "neopixel_initialise",
  "message0": "Initialise %1 neopixel[s] %2 on pin %3",
  "args0": [
    {
      "type": "field_number",
      "name": "n",
      "value": 0,
      "min": 1
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "0",
          "0"
        ],
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ]
      ]
    }
  ],
  "output": "neopixel_object",
  "colour": 260,
  "tooltip": "Make an object to control any attached neopixels. Specify the number of neopixels and the pin to which they are attached.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel"
},
{
  "type": "neopixel_clear",
  "message0": "Clear neopixels on %1",
  "args0": [
    {
      "type": "input_value",
      "name": "neopixel_object",
      "check": "neopixel_object"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "Clear all neopixels controlled by the referenced neopixel object.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.clear"
},
{
  "type": "neopixel_show",
  "message0": "Show neopixels on %1",
  "args0": [
    {
      "type": "input_value",
      "name": "neopixel_object",
      "check": "neopixel_object"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "Show / update all the neopixels controlled by the referenced neopixel object.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#neopixel.NeoPixel.show"
},
{
  "type": "neopixel_set",
  "message0": "Using neopixels on %1 set pixel in position %2 with red %3 green %4 blue %5",
  "args0": [
    {
      "type": "input_value",
      "name": "neopixel_object",
      "check": "neopixel_object"
    },
    {
      "type": "input_value",
      "name": "pixel",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "red",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "green",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "blue",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "Use the referenced neopixel object to update the individual neopixel in a specific numbered position with a red, green, blue (RGB) value.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/neopixel.html#using-neopixels"
}]
