"use strict";
window.onload = function () {
    var Dice = /** @class */ (function () {
        // function that created objects of this class
        function Dice(max) {
            this._max = max;
            this._min = 1;
        }
        Object.defineProperty(Dice.prototype, "max", {
            // access function that allows us to read the private property max/min
            get: function () {
                return this._max;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Dice.prototype, "min", {
            get: function () {
                return this._min;
            },
            // access function that allows us to update the private property min
            set: function (min) {
                this._min = min;
            },
            enumerable: true,
            configurable: true
        });
        //  a method that generates a random number between min and max
        Dice.prototype.roll = function () {
            return Math.floor(Math.random() * this._max) + this._min;
        };
        return Dice;
    }());
    var diceroll = new Dice(6);
    console.log(diceroll);
};
//# sourceMappingURL=dice2.js.map