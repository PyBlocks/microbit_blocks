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
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
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
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
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
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "neopixel_set",
  "message0": "Set pixel in position %1 with red %2 green %3 blue %4 for neopixels on %5",
  "args0": [
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
    },
    {
      "type": "input_value",
      "name": "neopixel_object",
      "check": "neopixel_object"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
}]
