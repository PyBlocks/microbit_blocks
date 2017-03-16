[{
  "type": "microbit_accelerometer_get_x",
  "message0": "Accelerometer X axis",
  "output": "Number",
  "colour": 20,
  "tooltip": "Get the acceleration measurement in the X axis.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_x"
},
{
  "type": "microbit_accelerometer_get_y",
  "message0": "Accelerometer Y axis",
  "output": "Number",
  "colour": 20,
  "tooltip": "Get the acceleration measurement in the Y axis.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_y"
},
{
  "type": "microbit_accelerometer_get_z",
  "message0": "Accelerometer Z axis",
  "output": "Number",
  "colour": 20,
  "tooltip": "Get the acceleration measurement in the Z axis.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_z"
},
{
  "type": "microbit_accelerometer_was_gesture",
  "message0": "Was gesture %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "gesture",
      "options": [
        [
          "shake",
          "shake"
        ],
        [
          "up",
          "up"
        ],
        [
          "down",
          "down"
        ],
        [
          "left",
          "left"
        ],
        [
          "right",
          "right"
        ],
        [
          "face up",
          "face up"
        ],
        [
          "face down",
          "face down"
        ],
        [
          "freefall",
          "freefall"
        ],
        [
          "3g",
          "3g"
        ],
        [
          "6g",
          "6g"
        ],
        [
          "8g",
          "8g"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 20,
  "tooltip": "Return True or False to indicate if the named gesture was active since the last check.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.was_gesture"
},
{
  "type": "microbit_accelerometer_is_gesture",
  "message0": "Is gesture %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "gesture",
      "options": [
        [
          "shake",
          "shake"
        ],
        [
          "up",
          "up"
        ],
        [
          "down",
          "down"
        ],
        [
          "left",
          "left"
        ],
        [
          "right",
          "right"
        ],
        [
          "face up",
          "face up"
        ],
        [
          "face down",
          "face down"
        ],
        [
          "freefall",
          "freefall"
        ],
        [
          "3g",
          "3g"
        ],
        [
          "6g",
          "6g"
        ],
        [
          "8g",
          "8g"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 20,
  "tooltip": "Return True or False to indicate if the named gesture is currently active.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.is_gesture"
},
{
  "type": "microbit_accelerometer_get_gestures",
  "message0": "Get gestures",
  "output": "Array",
  "colour": 20,
  "tooltip": "Return the gesture history. The most recent gesture is last. Also clears the gesture history.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.get_gestures"
},
{
  "type": "microbit_accelerometer_current_gesture",
  "message0": "Current gesture",
  "output": "String",
  "colour": 20,
  "tooltip": "Return the name of the current gesture.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/accelerometer.html#microbit.accelerometer.current_gesture"
}]
