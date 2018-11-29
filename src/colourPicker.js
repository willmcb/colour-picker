function ColourPicker(){
   this.red = 255;
   this.blue = 255;
   this.green = 255;
   this.opacity = 1;
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

ColourPicker.prototype.getOpacity = function(){
   return this.opacity;
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

ColourPicker.prototype.setOpacity = function(num){
   this.opacity = num;
}

ColourPicker.prototype.toString = function() {
   return "rgb(" + this.getRed() + ", " + this.getBlue() + ", " + this.getGreen() + ", " + this.getOpacity() + ")";
}

ColourPicker.prototype.oppositeToString = function() {
   return "rgb(" + (255 - this.getRed()) + ", " + (255 - this.getBlue()) + ", " + (255 - this.getGreen()) + ", " +(1 - this.getOpacity()) + ")";
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = ColourPicker;
}
