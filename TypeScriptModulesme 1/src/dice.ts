window.onload = function()
{
    var bTn:HTMLButtonElement = document.getElementById('btn') as HTMLButtonElement;
bTn.addEventListener('click',roll);

function roll():void 
{
var dice1:HTMLDivElement = document.getElementById('die1') as HTMLDivElement;
var dice2:HTMLDivElement = document.getElementById('die2') as HTMLDivElement;
var display:HTMLHeadingElement = document.getElementById('result') as HTMLHeadingElement;

var d1:number = Math.floor(Math.random()* 6)+ 1;
var d2:number = Math.floor(Math.random()* 6)+ 1;
var total:number = d1+d2;
dice1.innerHTML = d1.toString();
dice2.innerHTML = d2.toString();
display.innerHTML = total.toString();
if(d1 == d2){
    
    display.innerHTML += "  Thats a Double, you get another turn"; 
}




}
}