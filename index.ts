var Btn = document.getElementById("addBtn");
Btn.addEventListener('click', sum);
  
//concatinating values
function sum():void{
    var valu1 = parseInt(<HTMLInputElement>document.getElementById('val1').value);
    var valu2:HTMLInputElement | null = parseInt(document.getElementById('val2').value);
    var res: any = document.getElementById("result");
    var result:number = valu1+valu2;
    res.innerHTML = result;
    } 

function add(num1:number,num2:number):number{
  return num1+num2;
}
console.log(add(5,7));
