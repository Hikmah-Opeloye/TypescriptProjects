"use strict";
//execute function when window has loaded
window.onload = function () {
    // creating an instance of addCalculator
    var calc = new addCalculator('X', 'Y', 'Output');
};
//creating a calculator class and assigning a type to its properties
var addCalculator = /** @class */ (function () {
    //adding a factory f object
    function addCalculator(xId, yId, outputId) {
        //creating a method of class addCalculator with type ICalcFunction
        this.add = function (x, y) {
            return x + y;
        };
        this.x = document.getElementById(xId);
        this.y = document.getElementById(yId);
        this.output = document.getElementById(outputId);
        this.wireEvents();
    }
    addCalculator.prototype.wireEvents = function () {
        var _this = this;
        document.getElementById('addBtn').addEventListener('click', function (event) {
            var result = _this.add(parseInt(_this.x.value), parseInt(_this.y.value));
            _this.output.innerHTML = result.toString();
        });
    };
    return addCalculator;
}());
//# sourceMappingURL=calculator.js.map