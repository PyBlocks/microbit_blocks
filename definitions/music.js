[{
  "type": "music_play_built_in",
  "message0": "Play built-in melody %1 %2 Wait %3 %4 Loop %5",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "melody",
      "options": [
        [
          "DADADADUM",
          "DADADADUM"
        ],
        [
          "ENTERTAINER",
          "ENTERTAINER"
        ],
        [
          "PRELUDE",
          "PRELUDE"
        ],
        [
          "ODE",
          "ODE"
        ],
        [
          "NYAN",
          "NYAN"
        ],
        [
          "RINGTONE",
          "RINGTONE"
        ],
        [
          "FUNK",
          "FUNK"
        ],
        [
          "BLUES",
          "BLUES"
        ],
        [
          "BIRTHDAY",
          "BIRTHDAY"
        ],
        [
          "WEDDING",
          "WEDDING"
        ],
        [
          "FUNERAL",
          "FUNERAL"
        ],
        [
          "PUNCHLINE",
          "PUNCHLINE"
        ],
        [
          "PYTHON",
          "PYTHON"
        ],
        [
          "BADDY",
          "BADDY"
        ],
        [
          "CHASE",
          "CHASE"
        ],
        [
          "BA_DING",
          "BA_DING"
        ],
        [
          "WAWAWAWAA",
          "WAWAWAWAA"
        ],
        [
          "JUMP_UP",
          "JUMP_UP"
        ],
        [
          "JUMP_DOWN",
          "JUMP_DOWN"
        ],
        [
          "POWER_UP",
          "POWER_UP"
        ],
        [
          "POWER_DOWN",
          "POWER_DOWN"
        ]
      ]
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
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 95,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "music_pitch",
  "message0": "Play pitch %1 %2 for  %3 milliseconds",
  "args0": [
    {
      "type": "field_number",
      "name": "pitch",
      "value": 440,
      "min": 0
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "duration",
      "value": 1000,
      "min": 0
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 95,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "music_play_list_of_notes",
  "message0": "Play notes %1 Wait %2 %3 Loop %4",
  "args0": [
    {
      "type": "input_value",
      "name": "notes",
      "check": "Array"
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
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 95,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "music_reset",
  "message0": "Reset music",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 95,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "music_stop",
  "message0": "Stop music",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 95,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "music_set_tempo",
  "message0": "Set tempo with 1 beat the same as %1 ticks, at  %2 beats per minute",
  "args0": [
    {
      "type": "input_value",
      "name": "ticks",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "bpm",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 95,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
},
{
  "type": "music_get_tempo",
  "message0": "Get current tempo",
  "output": "Array",
  "colour": 95,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
}]
