// Test suite for the MicroPython API expressed is blockly.
var import_microbit = 'from microbit import *';
var import_music = 'import music';
var import_neopixel = 'import neopixel';
var import_radio = 'import radio';
var import_speech = 'import speech';

describe("Blockly code generation for MicroPython on the BBC micro:bit:", function() {

    describe("The accelerometer related generator code creates valid Python.", function() {

        beforeEach(function() {
            Blockly.Python.definitions_.import_microbit = null;
        });

        it("should return valid Python for the get_x block", function() {
            var result = Blockly.Python.microbit_accelerometer_get_x();
            var expected = 'accelerometer.get_x()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });

        it("should return valid Python for the get_y block", function() {
            var result = Blockly.Python.microbit_accelerometer_get_y();
            var expected = 'accelerometer.get_y()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });

        it("should return valid Python for the get_z block", function() {
            var result = Blockly.Python.microbit_accelerometer_get_z();
            var expected = 'accelerometer.get_z()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });

        it("should return valid Python for the was_gesture block", function() {
            var block = {
                'getFieldValue': function(){}
            };
            spyOn(block, 'getFieldValue').and.returnValue('shake');
            var result = Blockly.Python.microbit_accelerometer_was_gesture(block);
            var expected = 'accelerometer.was_gesture("shake")';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('gesture');
        });

        it("should return valid Python for the is_gesture block", function() {
            var block = {
                'getFieldValue': function(){}
            };
            spyOn(block, 'getFieldValue').and.returnValue('shake');
            var result = Blockly.Python.microbit_accelerometer_is_gesture(block);
            var expected = 'accelerometer.is_gesture("shake")';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('gesture');
        });

        it("should return valid Python for the get_gestures block", function() {
            var result = Blockly.Python.microbit_accelerometer_get_gestures();
            var expected = 'accelerometer.get_gestures()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });

        it("should return valid Python for the current_gesture block", function() {
            var result = Blockly.Python.microbit_accelerometer_current_gesture();
            var expected = 'accelerometer.current_gesture()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });
    });

    describe("The button related generator code creates valid Python.", function() {

        beforeEach(function() {
            Blockly.Python.definitions_.import_microbit = null;
        });

        it("should return valid Python for the is_pressed block", function() {
            var block = {
                'getFieldValue': function(){}
            };
            spyOn(block, 'getFieldValue').and.returnValue('a');
            var result = Blockly.Python.microbit_button_is_pressed(block);
            var expected = 'button_a.is_pressed()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('button');
        });

        it("should return valid Python for the was_pressed block", function() {
            var block = {
                'getFieldValue': function(){}
            };
            spyOn(block, 'getFieldValue').and.returnValue('a');
            var result = Blockly.Python.microbit_button_was_pressed(block);
            var expected = 'button_a.was_pressed()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('button');
        });

        it("should return valid Python for the get_presses block", function() {
            var block = {
                'getFieldValue': function(){}
            };
            spyOn(block, 'getFieldValue').and.returnValue('a');
            var result = Blockly.Python.microbit_button_get_presses(block);
            var expected = 'button_a.get_presses()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('button');
        });
    });

    describe("The compass related generator code creates valid Python.", function() {

        beforeEach(function() {
            Blockly.Python.definitions_.import_microbit = null;
        });

        it("should return valid Python for the calibrate block", function() {
            var result = Blockly.Python.microbit_compass_calibrate();
            var expected = 'compass.calibrate()\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });

        it("should return valid Python for the is_calibrated block", function() {
            var result = Blockly.Python.microbit_compass_is_calibrated();
            var expected = 'compass.is_calibrated()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });

        it("should return valid Python for the heading block", function() {
            var result = Blockly.Python.microbit_compass_heading();
            var expected = 'compass.heading()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });

        it("should return valid Python for the get_field_strength block", function() {
            var result = Blockly.Python.microbit_compass_get_field_strength();
            var expected = 'compass.get_field_strength()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });
    });

    describe("The display related generator code creates valid Python.", function() {

        beforeEach(function() {
            Blockly.Python.definitions_.import_microbit = null;
        });

        it("should return valid Python for the get_pixel block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue(0);
            var result = Blockly.Python.microbit_display_get_pixel(block);
            var expected = 'display.get_pixel(0, 0)';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'x', Blockly.Python.ORDER_ATOMIC);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'y', Blockly.Python.ORDER_ATOMIC);
        });

        it("should return valid Python for the set_pixel block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue(4);
            var result = Blockly.Python.microbit_display_set_pixel(block);
            var expected = 'display.set_pixel(4, 4, 4)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'x', Blockly.Python.ORDER_ATOMIC);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'y', Blockly.Python.ORDER_ATOMIC);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'value', Blockly.Python.ORDER_ATOMIC);
        });

        it("should return valid Python for the clear block", function() {
            var result = Blockly.Python.microbit_display_clear();
            var expected = 'display.clear()\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });

        it("should return valid Python for the show_image block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue('Image.HEART');
            var result = Blockly.Python.microbit_display_show_image(block);
            var expected = 'display.show(Image.HEART)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'image', Blockly.Python.ORDER_MEMBER);
        });

        it("should return valid Python for the show_animation block", function() {
            var block = {
              'getFieldValue': function(name){
                if(name === 'delay') {
                  return 100;
                } else if(name === 'wait') {
                  return 'TRUE';
                } else if(name === 'loop') {
                  return 'FALSE';
                } else if(name === 'clear') {
                  return 'FALSE';
                }
              }
            };
            spyOn(Blockly.Python, 'valueToCode').and.returnValue('Image.ALL_CLOCKS');
            spyOn(block, 'getFieldValue').and.callThrough();
            var result = Blockly.Python.microbit_display_show_animation(block);
            var expected = 'display.show(Image.ALL_CLOCKS, delay=100, wait=True, loop=False, clear=False)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'images', Blockly.Python.ORDER_MEMBER);
            expect(block.getFieldValue).toHaveBeenCalledWith('delay');
            expect(block.getFieldValue).toHaveBeenCalledWith('wait');
            expect(block.getFieldValue).toHaveBeenCalledWith('loop');
            expect(block.getFieldValue).toHaveBeenCalledWith('clear');
        });

        it("should return valid Python for the scroll block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue('"Hello"');
            var result = Blockly.Python.microbit_display_scroll(block);
            var expected = 'display.scroll("Hello")\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'message', Blockly.Python.ORDER_ATOMIC);
        });

        it("should return valid Python for the on block", function() {
            var result = Blockly.Python.microbit_display_on();
            var expected = 'display.on()\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });

        it("should return valid Python for the off block", function() {
            var result = Blockly.Python.microbit_display_off();
            var expected = 'display.off()\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });

        it("should return valid Python for the is_on block", function() {
            var result = Blockly.Python.microbit_display_is_on();
            var expected = 'display.is_on()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });
    });

    describe("The image related generator code creates valid Python.", function() {

        beforeEach(function() {
            Blockly.Python.definitions_.import_microbit = null;
        });

        it("should return valid Python for the builtins block", function() {
            var block = {
                'getFieldValue': function(){}
            };
            spyOn(block, 'getFieldValue').and.returnValue('HEART');
            var result = Blockly.Python.microbit_image_builtins(block);
            var expected = 'Image.HEART';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('image');
        });

        it("should return valid Python for the copy block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue('Image.HEART');
            var result = Blockly.Python.microbit_image_copy(block);
            var expected = 'Image.HEART.copy()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'image', Blockly.Python.ORDER_MEMBER);
        });

        it("should return valid Python for the invert block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue('Image.HEART');
            var result = Blockly.Python.microbit_image_invert(block);
            var expected = 'Image.HEART.invert()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'image', Blockly.Python.ORDER_MEMBER);
        });

        it("should return valid Python for the create block", function() {
            var new_image = {
                '00': '#000000', // 0
                '01': '#440000', // 1
                '02': '#660000', // 2
                '03': '#880000', // 3
                '04': '#aa0000', // 4
                '10': '#bb0000', // 5
                '11': '#cc0000', // 6
                '12': '#dd0000', // 7
                '13': '#ee0000', // 8
                '14': '#ff0000', // 9
                '20': '#000000', // 0
                '21': '#440000', // 1
                '22': '#660000', // 2
                '23': '#880000', // 3
                '24': '#aa0000', // 4
                '30': '#bb0000', // 5
                '31': '#cc0000', // 6
                '32': '#dd0000', // 7
                '33': '#ee0000', // 8
                '34': '#ff0000', // 9
                '40': '#bb0000', // 5
                '41': '#cc0000', // 6
                '42': '#dd0000', // 7
                '43': '#ee0000', // 8
                '44': '#ff0000'  // 9
            };
            var image_as_numbers = '01234:56789:01234:56789:56789';
            var block = {
              'getFieldValue': function(name){
                return new_image[name];
              }
            };
            spyOn(block, 'getFieldValue').and.callThrough();
            var result = Blockly.Python.microbit_image_create(block);
            var expected = 'Image("' + image_as_numbers + '")';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('00');
            expect(block.getFieldValue).toHaveBeenCalledWith('01');
            expect(block.getFieldValue).toHaveBeenCalledWith('02');
            expect(block.getFieldValue).toHaveBeenCalledWith('03');
            expect(block.getFieldValue).toHaveBeenCalledWith('04');
            expect(block.getFieldValue).toHaveBeenCalledWith('10');
            expect(block.getFieldValue).toHaveBeenCalledWith('11');
            expect(block.getFieldValue).toHaveBeenCalledWith('12');
            expect(block.getFieldValue).toHaveBeenCalledWith('13');
            expect(block.getFieldValue).toHaveBeenCalledWith('14');
            expect(block.getFieldValue).toHaveBeenCalledWith('20');
            expect(block.getFieldValue).toHaveBeenCalledWith('21');
            expect(block.getFieldValue).toHaveBeenCalledWith('22');
            expect(block.getFieldValue).toHaveBeenCalledWith('23');
            expect(block.getFieldValue).toHaveBeenCalledWith('24');
            expect(block.getFieldValue).toHaveBeenCalledWith('30');
            expect(block.getFieldValue).toHaveBeenCalledWith('31');
            expect(block.getFieldValue).toHaveBeenCalledWith('32');
            expect(block.getFieldValue).toHaveBeenCalledWith('33');
            expect(block.getFieldValue).toHaveBeenCalledWith('34');
            expect(block.getFieldValue).toHaveBeenCalledWith('40');
            expect(block.getFieldValue).toHaveBeenCalledWith('41');
            expect(block.getFieldValue).toHaveBeenCalledWith('42');
            expect(block.getFieldValue).toHaveBeenCalledWith('43');
            expect(block.getFieldValue).toHaveBeenCalledWith('44');
        });
    });

    describe("The microbit related generator code creates valid Python.", function() {

        beforeEach(function() {
            Blockly.Python.definitions_.import_microbit = null;
        });

        it("should return valid Python for the panic block", function() {
            var block = {
                'getFieldValue': function(){}
            };
            spyOn(block, 'getFieldValue').and.returnValue(123);
            var result = Blockly.Python.microbit_microbit_panic(block);
            var expected = 'panic(123)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('code');
        });

        it("should return valid Python for the reset block", function() {
            var block = {};
            var result = Blockly.Python.microbit_microbit_reset(block);
            var expected = 'reset()\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });

        it("should return valid Python for the sleep block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue(2000);
            var result = Blockly.Python.microbit_microbit_sleep(block);
            var expected = 'sleep(2000)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'duration', Blockly.Python.ORDER_ATOMIC);
        });

        it("should return valid Python for the running_time block", function() {
            var block = {};
            var result = Blockly.Python.microbit_microbit_running_time(block);
            var expected = 'running_time()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });

        it("should return valid Python for the temperature block", function() {
            var block = {};
            var result = Blockly.Python.microbit_microbit_temperature(block);
            var expected = 'temperature()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
        });
    });

    describe("The music related generator code creates valid Python.", function() {

        beforeEach(function() {
            Blockly.Python.definitions_.import_music = null;
        });

        it("should return valid Python for the play_built_in block", function() {
            var block = {
              'getFieldValue': function(name){
                if(name === 'melody') {
                  return 'DADADADUM';
                } else if(name === 'wait') {
                  return 'TRUE';
                } else if(name === 'loop') {
                  return 'FALSE';
                }
              }
            };
            spyOn(block, 'getFieldValue').and.callThrough();
            var result = Blockly.Python.microbit_music_play_built_in(block);
            var expected = 'music.play(music.DADADADUM, wait=True, loop=False)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_music).toEqual(import_music);
            expect(block.getFieldValue).toHaveBeenCalledWith('melody');
            expect(block.getFieldValue).toHaveBeenCalledWith('wait');
            expect(block.getFieldValue).toHaveBeenCalledWith('loop');
        });

        it("should return valid Python for the pitch block", function() {
            var block = {
              'getFieldValue': function(name){
                if(name === 'pitch') {
                  return 440;
                } else if(name === 'duration') {
                  return 1000;
                }
              }
            };
            spyOn(block, 'getFieldValue').and.callThrough();
            var result = Blockly.Python.microbit_music_pitch(block);
            var expected = 'music.pitch(440, 1000)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_music).toEqual(import_music);
            expect(block.getFieldValue).toHaveBeenCalledWith('pitch');
            expect(block.getFieldValue).toHaveBeenCalledWith('duration');
        });

        it("should return valid Python for the play_list_of_notes block", function() {
            var block = {
              'getFieldValue': function(name){
                if(name === 'wait') {
                  return 'TRUE';
                } else if(name === 'loop') {
                  return 'FALSE';
                }
              }
            };
            var list_of_notes = '["C4:4", "D", "E", "F", "G" ]';
            spyOn(Blockly.Python, 'valueToCode').and.returnValue(list_of_notes);
            spyOn(block, 'getFieldValue').and.callThrough();
            var result = Blockly.Python.microbit_music_play_list_of_notes(block);
            var expected = 'music.play(' + list_of_notes + ', wait=True, loop=False)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_music).toEqual(import_music);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'notes', Blockly.Python.ORDER_ATOMIC);
            expect(block.getFieldValue).toHaveBeenCalledWith('wait');
            expect(block.getFieldValue).toHaveBeenCalledWith('loop');
        });

        it("should return valid Python for the reset block", function() {
            var block = {};
            var result = Blockly.Python.microbit_music_reset(block);
            var expected = 'music.reset()\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_music).toEqual(import_music);
        });

        it("should return valid Python for the stop block", function() {
            var block = {};
            var result = Blockly.Python.microbit_music_stop(block);
            var expected = 'music.stop()\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_music).toEqual(import_music);
        });

        it("should return valid Python for the set_tempo block", function() {
            var block = {};
            Blockly.Python.valueToCode = function(b, name, order) {
              if (name === 'ticks') {
                return 4;
              } else if (name === 'bpm') {
                return 120;
              }
            }
            spyOn(Blockly.Python, 'valueToCode').and.callThrough();
            var result = Blockly.Python.microbit_music_set_tempo(block);
            var expected = 'music.set_tempo(4, 120)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_music).toEqual(import_music);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'ticks', Blockly.Python.ORDER_ATOMIC);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'bpm', Blockly.Python.ORDER_ATOMIC);
            Blockly.Python.valueToCode = function(){};
        });

        it("should return valid Python for the get_tempo block", function() {
            var block = {};
            var result = Blockly.Python.microbit_music_get_tempo(block);
            var expected = 'music.get_tempo()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_music).toEqual(import_music);
        });

    });

    describe("The neopixel related generator code creates valid Python.", function() {

        beforeEach(function() {
            Blockly.Python.definitions_.import_neopixel = null;
        });

        it("should return valid Python for the initialise block", function() {
            var block = {
              'getFieldValue': function(name){
                if(name === 'n') {
                  return 8;
                } else if(name === 'pin') {
                  return 1;
                }
              }
            };
            spyOn(block, 'getFieldValue').and.callThrough();
            var result = Blockly.Python.microbit_neopixel_initialise(block);
            var expected = 'neopixel.NeoPixel(1, 8)';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_neopixel).toEqual(import_neopixel);
        });

        it("should return valid Python for the clear block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue('foo');
            var result = Blockly.Python.microbit_neopixel_clear(block);
            var expected = 'foo.clear()\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_neopixel).toEqual(import_neopixel);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'neopixel_object', Blockly.Python.ORDER_MEMBER);
        });

        it("should return valid Python for the show block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue('foo');
            var result = Blockly.Python.microbit_neopixel_show(block);
            var expected = 'foo.show()\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_neopixel).toEqual(import_neopixel);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'neopixel_object', Blockly.Python.ORDER_MEMBER);
        });

        it("should return valid Python for the set block", function() {
            var block = {};
            Blockly.Python.valueToCode = function(b, name, order) {
              if (name === 'pixel') {
                return 4;
              } else if (name === 'red') {
                return 60;
              } else if (name === 'green') {
                return 120;
              } else if (name === 'blue') {
                return 240;
              } else if (name === 'neopixel_object') {
                return 'foo';
              }
            }
            spyOn(Blockly.Python, 'valueToCode').and.callThrough();
            var result = Blockly.Python.microbit_neopixel_set(block);
            var expected = 'foo[4] = (60, 120, 240)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_neopixel).toEqual(import_neopixel);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'pixel', Blockly.Python.ORDER_ATOMIC);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'red', Blockly.Python.ORDER_ATOMIC);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'green', Blockly.Python.ORDER_ATOMIC);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'blue', Blockly.Python.ORDER_ATOMIC);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'neopixel_object', Blockly.Python.ORDER_MEMBER);
            Blockly.Python.valueToCode = function(){};
        });

    });

    describe("The pins related generator code creates valid Python.", function() {

        beforeEach(function() {
            Blockly.Python.definitions_.import_microbit = null;
        });

        it("should return valid Python for the touched block", function() {
            var block = {
              'getFieldValue': function(){}
            };
            spyOn(block, 'getFieldValue').and.returnValue('0');
            var result = Blockly.Python.microbit_pin_touched(block);
            var expected = 'pin0.is_touched()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('pin');
        });

        it("should return valid Python for the read_analog block", function() {
            var block = {
              'getFieldValue': function(){}
            };
            spyOn(block, 'getFieldValue').and.returnValue('0');
            var result = Blockly.Python.microbit_pin_read_analog(block);
            var expected = 'pin0.read_analog()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('pin');
        });

        it("should return valid Python for the write_analog block", function() {
            var block = {
              'getFieldValue': function(){}
            };
            spyOn(block, 'getFieldValue').and.returnValue('0');
            spyOn(Blockly.Python, 'valueToCode').and.returnValue(128);
            var result = Blockly.Python.microbit_pin_write_analog(block);
            var expected = 'pin0.write_analog(128)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('pin');
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'output', Blockly.Python.ORDER_ATOMIC);
        });

        it("should return valid Python for the read_digital block", function() {
            var block = {
              'getFieldValue': function(){}
            };
            spyOn(block, 'getFieldValue').and.returnValue('0');
            var result = Blockly.Python.microbit_pin_read_digital(block);
            var expected = 'pin0.read_digital()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('pin');
        });

        it("should return valid Python for the write_digital block", function() {
            var block = {
              'getFieldValue': function(){}
            };
            spyOn(block, 'getFieldValue').and.returnValue('0');
            spyOn(Blockly.Python, 'valueToCode').and.returnValue(1);
            var result = Blockly.Python.microbit_pin_write_digital(block);
            var expected = 'pin0.write_digital(1)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_microbit).toEqual(import_microbit);
            expect(block.getFieldValue).toHaveBeenCalledWith('pin');
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'output', Blockly.Python.ORDER_ATOMIC);
        });
    });

    describe("The radio related generator code creates valid Python.", function() {

        beforeEach(function() {
            Blockly.Python.definitions_.import_radio = null;
        });

        it("should return valid Python for the on block", function() {
            var block = {};
            var result = Blockly.Python.microbit_radio_on(block);
            var expected = 'radio.on()\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_radio).toEqual(import_radio);
        });

        it("should return valid Python for the off block", function() {
            var block = {};
            var result = Blockly.Python.microbit_radio_off(block);
            var expected = 'radio.off()\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_radio).toEqual(import_radio);
        });

        it("should return valid Python for the config block", function() {
            var block = {
              'getFieldValue': function(name){
                if(name === 'length') {
                  return 32;
                } else if(name === 'queue') {
                  return 3;
                } else if(name === 'channel') {
                  return 7;
                } else if(name === 'power') {
                  return 0;
                } else if(name === 'data_rate') {
                  return 'RATE_1MBIT';
                }
              }
            };
            spyOn(block, 'getFieldValue').and.callThrough();
            var result = Blockly.Python.microbit_radio_config(block);
            var expected = 'radio.config(length=32, queue=3, channel=7, power=0, data_rate=radio.RATE_1MBIT)\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_neopixel).toEqual(import_neopixel);
        });

        it("should return valid Python for the reset block", function() {
            var block = {};
            var result = Blockly.Python.microbit_radio_reset(block);
            var expected = 'radio.reset()\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_radio).toEqual(import_radio);
        });

        it("should return valid Python for the reset block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue('"foo"');
            var result = Blockly.Python.microbit_radio_send_string(block);
            var expected = 'radio.send("foo")\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_radio).toEqual(import_radio);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'message', Blockly.Python.ORDER_ATOMIC);
        });

        it("should return valid Python for the receive block", function() {
            var block = {};
            var result = Blockly.Python.microbit_radio_receive(block);
            var expected = 'radio.receive()';
            expect(result).toEqual([expected, Blockly.Python.ORDER_MEMBER]);
            expect(Blockly.Python.definitions_.import_radio).toEqual(import_radio);
        });
    });

    describe("The speech related generator code creates valid Python.", function() {

        beforeEach(function() {
            Blockly.Python.definitions_.import_speech = null;
        });

        it("should return valid Python for the say block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue('"foo"');
            var result = Blockly.Python.microbit_speech_say(block);
            var expected = 'speech.say("foo")\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_speech).toEqual(import_speech);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'english', Blockly.Python.ORDER_ATOMIC);
        });

        it("should return valid Python for the pronounce block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue('"foo"');
            var result = Blockly.Python.microbit_speech_pronounce(block);
            var expected = 'speech.pronounce("foo")\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_speech).toEqual(import_speech);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'phonemes', Blockly.Python.ORDER_ATOMIC);
        });

        it("should return valid Python for the sing block", function() {
            var block = {};
            spyOn(Blockly.Python, 'valueToCode').and.returnValue('"foo"');
            var result = Blockly.Python.microbit_speech_sing(block);
            var expected = 'speech.sing("foo")\n';
            expect(result).toEqual(expected);
            expect(Blockly.Python.definitions_.import_speech).toEqual(import_speech);
            expect(Blockly.Python.valueToCode).toHaveBeenCalledWith(block, 'song', Blockly.Python.ORDER_ATOMIC);
        });

    });
});
