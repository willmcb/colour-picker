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

  $('#opacity-slider').on('input', function(){
    colourPicker.setOpacity(this.value);
    setColourView();
  });

  function setColourView(){
     $('#colour-view').css("background-color", "rgb(" + colourPicker.getRed() + ","
                                                      + colourPicker.getBlue() + ","
                                                      + colourPicker.getGreen() + ","
                                                      + colourPicker.getOpacity() + ")");
     $('body').css("background-color", "rgb(" + (255 - colourPicker.getRed()) + ","
                                              + (255 - colourPicker.getBlue()) + ","
                                              + (255 - colourPicker.getGreen()) + ","
                                              + (1 - colourPicker.getOpacity()) + ")");
     $('#rgb-value').css("color", colourPicker.toString());
     $('#rgb-value').text(colourPicker.toString());
  }

});
