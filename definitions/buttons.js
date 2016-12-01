[{
  "type": "microbit_button_is_pressed",
  "message0": "Button %1 is pressed",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "button",
      "options": [
        [
          "A",
          "a"
        ],
        [
          "B",
          "b"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 10,
  "tooltip": "Return True if the specified button is pressed. Otherwise, return False.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.is_pressed"
},
{
  "type": "microbit_button_was_pressed",
  "message0": "Button %1 was pressed",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "button",
      "options": [
        [
          "A",
          "a"
        ],
        [
          "B",
          "b"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 10,
  "tooltip": "Return True if the specified button was pressed since the device started or the last time this was checked.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.was_pressed"
},
{
  "type": "microbit_button_get_presses",
  "message0": "Get number of presses for button %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "button",
      "options": [
        [
          "A",
          "a"
        ],
        [
          "B",
          "b"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 10,
  "tooltip": "Return the running total of presses for the specified button, and resets this total to zero.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/button.html#Button.get_presses"
}]
