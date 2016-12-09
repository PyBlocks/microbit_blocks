[{
  "type": "microbit_image_builtins",
  "message0": "Built in image %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "image",
      "options": [
        [
          "HEART",
          "HEART"
        ],
        [
          "HEART_SMALL",
          "HEART_SMALL"
        ],
        [
          "HAPPY",
          "HAPPY"
        ],
        [
          "SMILE",
          "SMILE"
        ],
        [
          "SAD",
          "SAD"
        ],
        [
          "CONFUSED",
          "CONFUSED"
        ],
        [
          "ANGRY",
          "ANGRY"
        ],
        [
          "ASLEEP",
          "ASLEEP"
        ],
        [
          "SURPRISED",
          "SURPRISED"
        ],
        [
          "SILLY",
          "SILLY"
        ],
        [
          "FABULOUS",
          "FABULOUS"
        ],
        [
          "MEH",
          "MEH"
        ],
        [
          "YES",
          "YES"
        ],
        [
          "NO",
          "NO"
        ],
        [
          "CLOCK12",
          "CLOCK12"
        ],
        [
          "CLOCK11",
          "CLOCK11"
        ],
        [
          "CLOCK10",
          "CLOCK10"
        ],
        [
          "CLOCK9",
          "CLOCK9"
        ],
        [
          "CLOCK8",
          "CLOCK8"
        ],
        [
          "CLOCK7",
          "CLOCK7"
        ],
        [
          "CLOCK6",
          "CLOCK6"
        ],
        [
          "CLOCK5",
          "CLOCK5"
        ],
        [
          "CLOCK4",
          "CLOCK4"
        ],
        [
          "CLOCK3",
          "CLOCK3"
        ],
        [
          "CLOCK2",
          "CLOCK2"
        ],
        [
          "CLOCK1",
          "CLOCK1"
        ],
        [
          "ARROW_N",
          "ARROW_N"
        ],
        [
          "ARROW_NE",
          "ARROW_NE"
        ],
        [
          "ARROW_E",
          "ARROW_E"
        ],
        [
          "ARROW_SE",
          "ARROW_SE"
        ],
        [
          "ARROW_S",
          "ARROW_S"
        ],
        [
          "ARROW_SW",
          "ARROW_SW"
        ],
        [
          "ARROW_W",
          "ARROW_W"
        ],
        [
          "ARROW_NW",
          "ARROW_NW"
        ],
        [
          "TRIANGLE",
          "TRIANGLE"
        ],
        [
          "TRIANGLE_LEFT",
          "TRIANGLE_LEFT"
        ],
        [
          "CHESSBOARD",
          "CHESSBOARD"
        ],
        [
          "DIAMOND",
          "DIAMOND"
        ],
        [
          "DIAMOND_SMALL",
          "DIAMOND_SMALL"
        ],
        [
          "SQUARE",
          "SQUARE"
        ],
        [
          "SQUARE_SMALL",
          "SQUARE_SMALL"
        ],
        [
          "RABBIT",
          "RABBIT"
        ],
        [
          "COW",
          "COW"
        ],
        [
          "MUSIC_CROTCHET",
          "MUSIC_CROTCHET"
        ],
        [
          "MUSIC_QUAVER",
          "MUSIC_QUAVER"
        ],
        [
          "MUSIC_QUAVERS",
          "MUSIC_QUAVERS"
        ],
        [
          "PITCHFORK",
          "PITCHFORK"
        ],
        [
          "XMAS",
          "XMAS"
        ],
        [
          "PACMAN",
          "PACMAN"
        ],
        [
          "TARGET",
          "TARGET"
        ],
        [
          "TSHIRT",
          "TSHIRT"
        ],
        [
          "ROLLERSKATE",
          "ROLLERSKATE"
        ],
        [
          "DUCK",
          "DUCK"
        ],
        [
          "HOUSE",
          "HOUSE"
        ],
        [
          "TORTOISE",
          "TORTOISE"
        ],
        [
          "BUTTERFLY",
          "BUTTERFLY"
        ],
        [
          "STICKFIGURE",
          "STICKFIGURE"
        ],
        [
          "GHOST",
          "GHOST"
        ],
        [
          "SWORD",
          "SWORD"
        ],
        [
          "GIRAFFE",
          "GIRAFFE"
        ],
        [
          "SKULL",
          "SKULL"
        ],
        [
          "UMBRELLA",
          "UMBRELLA"
        ],
        [
          "SNAKE",
          "SNAKE"
        ],
        [
          "ALL_CLOCKS",
          "ALL_CLOCKS"
        ],
        [
          "ALL_ARROWS",
          "ALL_ARROWS"
        ]
      ]
    }
  ],
  "output": [
    "microbit_image",
    "Array"
  ],
  "colour": 300,
  "tooltip": "Specify one of the built-in images.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#attributes"
},
{
  "type": "microbit_image_copy",
  "message0": "Copy image %1",
  "args0": [
    {
      "type": "input_value",
      "name": "image",
      "check": "microbit_image"
    }
  ],
  "output": "microbit_image",
  "colour": 300,
  "tooltip": "Create an exact copy of the referenced image.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.copy"
},
{
  "type": "microbit_image_invert",
  "message0": "Invert image %1",
  "args0": [
    {
      "type": "input_value",
      "name": "image",
      "check": "microbit_image"
    }
  ],
  "output": "microbit_image",
  "colour": 300,
  "tooltip": "Create a new image by inverting the brightness of the pixels in the referenced image.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image.invert"
},
{
  "type": "microbit_image_create",
  "message0": "Create image %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "00",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "01",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "02",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "03",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "04",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "10",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "11",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "12",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "13",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "14",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "20",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "21",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "22",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "23",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "24",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "30",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "31",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "32",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "33",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "34",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "40",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "41",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "42",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "43",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "44",
      "colour": "#000000"
    }
  ],
  "output": "microbit_image",
  "colour": 300,
  "tooltip": "Create a new image.",
  "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/image.html#microbit.Image"
}]
