"use strict";
window.onload = function () {
    var Btn = document.getElementById("addBtn");
    Btn.addEventListener('click', sum);
    var valu1 = document.getElementById('val2');
    var valu2 = document.getElementById('val2');
    var span = document.getElementById("result");
    var select = document.getElementById('arith').value;
    var result;
    function sum() {
        if (select === "+") {
            result = parseInt(valu1.value) + parseInt(valu2.value);
        }
        if (select === "-") {
            result = parseInt(valu1.value) - parseInt(valu2.value);
        }
        if (select === "/") {
            result = parseInt(valu1.value) / parseInt(valu2.value);
        }
        span.innerHTML = result.toString();
    }
};
//# sourceMappingURL=calculator.js.map