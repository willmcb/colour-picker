var ColourPicker = require('../src/colourPicker.js');

describe("ColourPicker", function() {
  var colourPicker;
  var twoFiveFive = 255

  beforeEach(function() {
    colourPicker = new ColourPicker();
  });


  it("It's initial state is white", function() {
    checkColours(twoFiveFive);
  });

  it("can decrease a colour value", function(){
    coloursDown();
    checkColours(twoFiveFive - 10);
  });

  it("can increase a colour value", function(){
    [1,2, 3, 4].forEach(function(){
       coloursDown();
    });
    coloursUp();
    checkColours(twoFiveFive - 30);
  });

  it("can't increase a colour values above 255", function(){
    coloursUp();
    checkColours(twoFiveFive);
  });

  it("can't decrease a colour values above below zero", function(){
    var nearMinValue = 5;
    colourPicker.red = nearMinValue;
    colourPicker.blue = nearMinValue;
    colourPicker.green = nearMinValue;
    coloursDown();
    checkColours(5);
  });

  function checkColours(value) {
    expect(colourPicker.getRed()).toBe(value);
    expect(colourPicker.getBlue()).toBe(value);
    expect(colourPicker.getGreen()).toBe(value);
  }

  function coloursDown() {
    colourPicker.colourDown('red', 10);
    colourPicker.colourDown('blue', 10);
    colourPicker.colourDown('green', 10);
  }

  function coloursUp() {
    colourPicker.colourUp('red', 10);
    colourPicker.colourUp('blue', 10);
    colourPicker.colourUp('green', 10);
  }
});
