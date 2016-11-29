[{
  "type": "radio_on",
  "message0": "Switch on radio",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "radio_off",
  "message0": "Switch off radio",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "radio_config",
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
      "name": "NAME",
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
          "1Mbit"
        ],
        [
          "250Kbit",
          "250Kbit"
        ],
        [
          "2Mbit",
          "2Mbit"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "radio_reset",
  "message0": "Reset radio",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "radio_send_string",
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
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "radio_receive",
  "message0": "Receive message",
  "output": "String",
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
}]
