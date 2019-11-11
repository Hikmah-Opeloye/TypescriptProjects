window.onload = function(){
 

var Btn : HTMLInputElement = document.getElementById("addBTN") as HTMLInputElement;
Btn.addEventListener('click', calc);

var valu1 : HTMLInputElement = document.getElementById('val1') as HTMLInputElement
var valu2 : HTMLInputElement = document.getElementById('val2') as HTMLInputElement;
var span : HTMLSpanElement = document.getElementById("calculation") as HTMLSpanElement;
var select = <HTMLSelectElement>document.getElementById('arith');
let result:number;

function calc():void{

  if(select.options[select.selectedIndex].value === "+"){
    result = parseInt(valu1.value) + parseInt(valu2.value);
  }
  if(select.options[select.selectedIndex].value === "-"){
    result = parseInt(valu1.value) - parseInt(valu2.value);
  }
  if(select.options[select.selectedIndex].value === "/"){
    result = parseInt(valu1.value) / parseInt(valu2.value);
  }
  span.innerHTML = result.toString();
 }

}

