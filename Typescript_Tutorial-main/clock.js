var clock = /** @class */ (function () {
    function clock() {
        this.hours = 12;
        this.min = 00;
        this.sec = 00;
    }
    clock.prototype.incSec = function () {
        return this.sec;
    };
    clock.prototype.getHour = function () {
        return this.hours;
    };
    clock.prototype.getMinute = function () {
        return this.min;
    };
    clock.prototype.getSeconds = function () {
        return this.sec;
    };
    clock.prototype.Display = function () {
        this.incSec();
        console.log(this.getHour() + ":" + this.getMinute() + ":" + this.getSeconds());
    };
    return clock;
}());
var c = new clock();
c.Display();
