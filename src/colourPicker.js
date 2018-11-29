function ColourPicker(){
   this.red = 255;
   this.blue = 255;
   this.green = 255;
   this.COLOUR_MAX = 255;
   this.COLOUR_MIN = 0;
}

ColourPicker.prototype.getRed = function(){
   return this.red;
}

ColourPicker.prototype.getBlue = function(){
   return this.blue;
}

ColourPicker.prototype.getGreen = function(){
   return this.green;
}

ColourPicker.prototype.setRed = function(num){
   this.red = num;
}

ColourPicker.prototype.setBlue = function(num){
   this.blue = num;
}

ColourPicker.prototype.setGreen = function(num){
   this.green = num;
}
ColourPicker.prototype.canIncrease = function(colour, num) {
    return (this[colour] + num <= this.COLOUR_MAX);
}

ColourPicker.prototype.canDecrease = function(colour, num) {
    return (this[colour] - num >= this.COLOUR_MIN);
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = ColourPicker;
}
