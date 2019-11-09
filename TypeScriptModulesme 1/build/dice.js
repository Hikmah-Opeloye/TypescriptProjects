"use strict";
window.onload = function () {
    var bTn = document.getElementById('btn');
    bTn.addEventListener('click', roll);
    function roll() {
        var dice1 = document.getElementById('die1');
        var dice2 = document.getElementById('die2');
        var display = document.getElementById('result');
        var d1 = Math.floor(Math.random() * 6) + 1;
        var d2 = Math.floor(Math.random() * 6) + 1;
        var total = d1 + d2;
        dice1.innerHTML = d1.toString();
        dice2.innerHTML = d2.toString();
        display.innerHTML = total.toString();
        if (d1 == d2) {
            display.innerHTML += "  Thats a Double, you get another turn";
        }
    }
};
//# sourceMappingURL=dice.js.map