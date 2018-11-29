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
  });

  it("can set a colour value", function() {
    colourPicker.setRed(10);
    colourPicker.setBlue(30);
    colourPicker.setGreen(150);
    expect(colourPicker.getRed()).toBe(10);
    expect(colourPicker.getBlue()).toBe(30);
    expect(colourPicker.getGreen()).toBe(150);
  });
});
