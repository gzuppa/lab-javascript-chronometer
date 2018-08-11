// Constructor
function Chronometer(){
    this.currentTime = 0;
    this.intervalId = 0;
}


Chronometer.prototype.startClick = function () {
    //var that = this
    this.intervalId = setInterval(() => {
        this.currentTime++
    }, 1000);
    console.log(this.currentTime);
};

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return (this.currentTime % 60);  
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    number = number.toString();
    if (number.length == 1){
        return ("0" + number)
    }
        else 
        return number
};

Chronometer.prototype.setTime = function () {

};

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
