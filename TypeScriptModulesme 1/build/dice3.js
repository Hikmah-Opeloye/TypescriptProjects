"use strict";
window.onload = function () {
    //end of interface
    var Dice = /** @class */ (function () {
        // function that created objects of this class
        function Dice() {
            this._max = 6;
            this._min = 1;
            this.dice1 = document.getElementById('die1');
            this.dice2 = document.getElementById('die2');
            this.display = document.getElementById('result');
            this.rolldice();
        }
        Dice.prototype.rolldice = function () {
            var _this = this;
            document.getElementById('btn').addEventListener('click', function (occur) {
                console.log("hello");
                var d1 = Math.floor(Math.random() * _this._max) + _this._min;
                var d2 = Math.floor(Math.random() * _this._max) + _this._min;
                var total = d1 + d2;
                _this.dice1.innerHTML = d1.toString();
                _this.dice2.innerHTML = d2.toString();
                _this.display.innerHTML = total.toString();
                if (d1 == d2) {
                    _this.display.innerHTML += "  Thats a Double, you get another turn";
                }
            });
        };
        return Dice;
    }());
    //end of function
};
//# sourceMappingURL=dice3.js.map