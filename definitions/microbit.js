[{
  "type": "microbit_microbit_panic",
  "message0": "Panic with status code %1",
  "args0": [
    {
      "type": "field_number",
      "name": "code",
      "value": 0,
      "min": 0,
      "max": 255
    }
  ],
  "previousStatement": null,
  "colour": 210,
  "tooltip": "Enter panic mode to indicate something has gone wrong. Requires a restart. Pass in a number to indicate a status code.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.panic"
},
{
  "type": "microbit_microbit_reset",
  "message0": "Reset micro:bit",
  "previousStatement": null,
  "colour": 210,
  "tooltip": "Reset the micro:bit",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.reset"
},
{
  "type": "microbit_microbit_sleep",
  "message0": "Sleep %1 milliseconds",
  "args0": [
    {
      "type": "input_value",
      "name": "duration",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "Wait for a specified number of milliseconds before the next instruction.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.sleep"
},
{
  "type": "microbit_microbit_running_time",
  "message0": "Running time",
  "output": "Number",
  "colour": 210,
  "tooltip": "Get the number of milliseconds since the board was switched on or restarted.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.running_time"
},
{
  "type": "microbit_microbit_temperature",
  "message0": "Board temperature",
  "output": "Number",
  "colour": 210,
  "tooltip": "Get the temperature of the micro:bit in degrees Celcius.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/microbit.html#microbit.temperature"
}]
