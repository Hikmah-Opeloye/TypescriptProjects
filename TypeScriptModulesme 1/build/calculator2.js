"use strict";
window.onload = function () {
    var Btn = document.getElementById("addBTN");
    Btn.addEventListener('click', calc);
    var valu1 = document.getElementById('val1');
    var valu2 = document.getElementById('val2');
    var span = document.getElementById("calculation");
    var select = document.getElementById('arith');
    var result;
    function calc() {
        if (select.options[select.selectedIndex].value === "+") {
            result = parseInt(valu1.value) + parseInt(valu2.value);
        }
        if (select.options[select.selectedIndex].value === "-") {
            result = parseInt(valu1.value) - parseInt(valu2.value);
        }
        if (select.options[select.selectedIndex].value === "/") {
            result = parseInt(valu1.value) / parseInt(valu2.value);
        }
        span.innerHTML = result.toString();
    }
};
//# sourceMappingURL=calculator2.js.map