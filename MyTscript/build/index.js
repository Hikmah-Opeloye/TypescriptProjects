var Btn = document.getElementById("addBtn");
Btn.addEventListener('click', sum);
//concatinating values
function sum() {
    var valu1 = parseInt(document.getElementById('val1').value);
    var valu2 = parseInt(document.getElementById('val2').value);
    var res = document.getElementById("result");
    var result = valu1 + valu2;
    res.innerHTML = result;
}
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 7));
