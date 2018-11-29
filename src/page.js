$(document).ready(function(){

  var colourPicker = new ColourPicker;

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

  $('#opacity-slider').on('input', function(){
    colourPicker.setOpacity(this.value);
    setColourView();
  });

  function setColourView(){
     $('#colour-view').css("background-color", colourPicker.toString());
     $('body').css("background-color", colourPicker.oppositeToString());
     $('#rgb-value').css("color", colourPicker.toString());
     $('#rgb-value').text(colourPicker.toString());
  }
});
