function ColourPicker(){
   this.red = 255;
   this.blue = 255;
   this.green = 255;
}

ColourPicker.prototype.red = function(){
   return this.red;
}
ColourPicker.prototype.blue = function(){
   return this.blue;
}
ColourPicker.prototype.green = function(){
   return this.green;
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = ColorPicker;
}
