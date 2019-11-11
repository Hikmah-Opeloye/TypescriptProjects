window.onload = function()
{
//end of interface
    class Dice {
        // properties that are private to this class
        _max: number;
        _min: number;
         dice1:HTMLDivElement;
         dice2:HTMLDivElement;
         display:HTMLHeadingElement;
        // function that created objects of this class
        constructor() {
             this._max = 6;
             this._min = 1;
             this.dice1 = <HTMLDivElement>document.getElementById('die1');
             this.dice2 = <HTMLDivElement>document.getElementById('die2');
             this.display= document.getElementById('result') as HTMLHeadingElement;
             this.rolldice();
        }
        rolldice ():void{
            (<HTMLButtonElement>document.getElementById('btn')).addEventListener('click', occur => 
            {
            console.log("hello");
            var d1:number = Math.floor(Math.random()* this._max)+ this._min;
            var d2:number = Math.floor(Math.random()* this._max)+ this._min;
            var total:number = d1+d2;
            this.dice1.innerHTML = d1.toString();
            this.dice2.innerHTML = d2.toString();
            this.display.innerHTML = total.toString();
                if(d1 == d2){
                    this.display.innerHTML += "  Thats a Double, you get another turn"; 
                }
            });
        }
      
    //end of dice
}

//end of function
}