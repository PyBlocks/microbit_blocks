[{
  "type": "microbit_pin_touched",
  "message0": "Pin %1 is touched?",
  "args0": [
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
  "output": "Boolean",
  "colour": 120,
  "tooltip": "Return True if the referenced pin is touched.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitTouchPin.is_touched"
},
{
  "type": "microbit_pin_read_analog",
  "message0": "Read analog on pin %1",
  "args0": [
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
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "10",
          "10"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 120,
  "tooltip": "Read analog value from the referenced pin.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.read_analog"
},
{
  "type": "microbit_pin_write_analog",
  "message0": "Write analog value %1 on pin %2",
  "args0": [
    {
      "type": "input_value",
      "name": "output",
      "check": "Number"
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
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "10",
          "10"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Write analog value to the referenced pin.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitAnalogDigitalPin.write_analog"
},
{
  "type": "microbit_pin_read_digital",
  "message0": "Read digital value on pin %1",
  "args0": [
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
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "5",
          "5"
        ],
        [
          "6",
          "6"
        ],
        [
          "7",
          "7"
        ],
        [
          "8",
          "8"
        ],
        [
          "9",
          "9"
        ],
        [
          "10",
          "10"
        ],
        [
          "11",
          "11"
        ],
        [
          "12",
          "12"
        ],
        [
          "13",
          "12"
        ],
        [
          "14",
          "14"
        ],
        [
          "15",
          "15"
        ],
        [
          "16",
          "16"
        ],
        [
          "19",
          "19"
        ],
        [
          "20",
          "20"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 120,
  "tooltip": "Read digital value (True or False) from the referenced pin.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.read_digital"
},
{
  "type": "microbit_pin_write_digital",
  "message0": "Write digital value %1 on pin %2",
  "args0": [
    {
      "type": "input_value",
      "name": "output",
      "check": "Number"
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
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "5",
          "5"
        ],
        [
          "6",
          "6"
        ],
        [
          "7",
          "7"
        ],
        [
          "8",
          "8"
        ],
        [
          "9",
          "9"
        ],
        [
          "10",
          "10"
        ],
        [
          "11",
          "11"
        ],
        [
          "12",
          "12"
        ],
        [
          "13",
          "12"
        ],
        [
          "14",
          "14"
        ],
        [
          "15",
          "15"
        ],
        [
          "16",
          "16"
        ],
        [
          "19",
          "19"
        ],
        [
          "20",
          "20"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Write digital value (True or False) to the referenced pin.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/pin.html#microbit.MicroBitDigitalPin.write_digital"
}]
