$(document).ready(function(){
  var colourPicker = new ColourPicker;
  console.log("js loaded");
  $('#red-slider').on('input', function(){
    colourPicker.setRed(this.value);
    setColourView();
  });
  $('#blue-slider').on('input', function(){
    colourPicker.setBlue(this.value);
    setColourView();
  });
  $('#green-slider').on('input', function(){
    colourPicker.setGreen(this.value);
    setColourView();
  });

  function setColourView(){
     $('#colour-view').css("background-color", "rgb(" + colourPicker.getRed() + ","
                                                      + colourPicker.getBlue() + ","
                                                      + colourPicker.getGreen() + ")");
  }

});
