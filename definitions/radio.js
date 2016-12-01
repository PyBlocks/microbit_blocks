[{
  "type": "microbit_radio_on",
  "message0": "Switch on radio",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Turn on the radio. This needs to be explicitly called since the radio draws power and takes up memory that you may otherwise need.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.on"
},
{
  "type": "microbit_radio_off",
  "message0": "Switch off radio",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Turn off the radio, thus saving power and memory.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.off"
},
{
  "type": "microbit_radio_config",
  "message0": "Configure radio message length %1 %2 maximum queue length %3 %4 tuned to channel %5 %6 broadcast power %7 %8 data rate %9",
  "args0": [
    {
      "type": "field_number",
      "name": "length",
      "value": 32,
      "min": 4,
      "max": 251
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "queue",
      "value": 3,
      "min": 1,
      "max": 32
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "channel",
      "value": 7,
      "min": 0,
      "max": 100
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "power",
      "value": 0,
      "min": 0,
      "max": 7
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "data_rate",
      "options": [
        [
          "1Mbit",
          "RATE_1MBIT"
        ],
        [
          "250Kbit",
          "RATE_250KBIT"
        ],
        [
          "2Mbit",
          "RATE_2MBIT"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Configure the radio. The length defines how long an individual message can be. The queue specifies the number of messages that can be stored on the incoming message queue. The channel defines the frequency to which the radio is tuned. The power specifies the strength of the broadcast signal. The data rate indicates the speed at which data is transferred.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.config"
},
{
  "type": "microbit_radio_reset",
  "message0": "Reset radio",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Reset the radio to default settings.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.reset"
},
{
  "type": "microbit_radio_send_string",
  "message0": "Send message %1",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Broadcast a text message.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.send"
},
{
  "type": "microbit_radio_receive",
  "message0": "Receive message",
  "output": "String",
  "colour": 330,
  "tooltip": "Receive a message.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.receive"
}]
