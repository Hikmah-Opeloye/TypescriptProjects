"use strict";
//execute function when window has loaded
window.onload = function () {
    // creating an instance of addCalculator
    //  var calc = new addCalculator('aval','bval','Output');
};
//creating a calculator class and assigning a type to its properties
var addCalculator = /** @class */ (function () {
    //adding a factory of object
    function addCalculator() {
        //creating a method of class addCalculator with type ICalcFunction
        this.add = function (x, y) {
            return x + y;
        };
        this.subtract = function (x, y) {
            return x - y;
        };
        this.divide = function (x, y) {
            return x / y;
        };
        this.x = document.getElementById('vala');
        this.y = document.getElementById('valb');
        this.output = document.getElementById('outputId');
        this.frm = document.getElementById('CalcForm');
        this.frm.addEventListener('click', this.wireEvents);
        // this.wireEvents();
    }
    addCalculator.prototype.wireEvents = function (e) {
        var _this = this;
        e.preventDefault();
        document.getElementById('addBtn').addEventListener('click', function (event) {
            var result;
            if (result != undefined) {
                var select = document.getElementById('arith');
                if (select.options[select.selectedIndex].value === "+") {
                    result = _this.add(parseInt(_this.x.value), parseInt(_this.y.value));
                }
                if (select.options[select.selectedIndex].value === "-") {
                    result = _this.subtract(parseInt(_this.x.value), parseInt(_this.y.value));
                }
                if (select.options[select.selectedIndex].value === "/") {
                    result = _this.divide(parseInt(_this.x.value), parseInt(_this.y.value));
                }
                _this.output.innerHTML = result.toString();
            }
        });
    };
    return addCalculator;
}());
//# sourceMappingURL=calculator.js.map