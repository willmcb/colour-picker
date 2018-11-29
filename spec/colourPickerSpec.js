var ColourPicker = require('../src/colourPicker.js');

describe("ColourPicker", function() {
  var colourPicker;
  var twoFiveFive = 255

  beforeEach(function() {
    colourPicker = new ColourPicker();
  });


  it("It's initial state is white", function() {
    expect(colourPicker.getRed()).toBe(twoFiveFive);
    expect(colourPicker.getBlue()).toBe(twoFiveFive);
    expect(colourPicker.getGreen()).toBe(twoFiveFive);
    expect(colourPicker.getOpacity()).toBe(1);
  });

  it("can set a colour value", function() {
    colourPicker.setRed(10);
    colourPicker.setBlue(30);
    colourPicker.setGreen(150);
    expect(colourPicker.getRed()).toBe(10);
    expect(colourPicker.getBlue()).toBe(30);
    expect(colourPicker.getGreen()).toBe(150);
  });

  it("can set an opacity", function() {
    colourPicker.setRed(10);
    colourPicker.setBlue(30);
    colourPicker.setGreen(150);
    colourPicker.setOpacity(0.3);
    expect(colourPicker.getRed()).toBe(10);
    expect(colourPicker.getBlue()).toBe(30);
    expect(colourPicker.getGreen()).toBe(150);
    expect(colourPicker.getOpacity()).toBe(0.3);
  });



  it("can has an overridden toString() that returns the right form", function() {
    var toStringExample = "rgb(150, 160, 220, 1)"
    colourPicker.setRed(150);
    colourPicker.setBlue(160);
    colourPicker.setGreen(220);
    colourPicker.setOpacity(1);
    expect(colourPicker.toString()).toBe(toStringExample);
  });

});
