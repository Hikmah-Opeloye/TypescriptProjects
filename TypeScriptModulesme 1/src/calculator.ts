  
  
//execute function when window has loaded
window.onload = function () {
    // creating an instance of addCalculator
    var calc = new addCalculator('X','Y','Output');

};

//creating a structure for any class variable or function
 interface ICalcFunction {
    //assigning a type to the interface
    (x:number,y:number): number;
}
 //creating a calculator class and assigning a type to its properties
   class addCalculator {
    private x : HTMLInputElement;
    private y : HTMLInputElement;
    private output : HTMLSpanElement;

//adding a factory f object
    constructor(xId: string, yId: string, outputId: string) {
        this.x = <HTMLInputElement>document.getElementById(xId);
        this.y = <HTMLInputElement>document.getElementById(yId);
        this.output = <HTMLSpanElement>document.getElementById(outputId);
        this.wireEvents();
    }

    wireEvents() {
        (<HTMLButtonElement>document.getElementById('addBtn')).addEventListener('click',
            event => {
                var result = this.add(parseInt(this.x.value), parseInt(this.y.value));
                this.output.innerHTML = result.toString();
            });
    }
    //creating a method of class addCalculator with type ICalcFunction
    add: ICalcFunction = function (x,y) {
    return x + y;
    }
}
