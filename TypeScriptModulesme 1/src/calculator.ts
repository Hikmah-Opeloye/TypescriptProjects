  
  
//execute function when window has loaded
window.onload = function () {
    // creating an instance of addCalculator
  //  var calc = new addCalculator('aval','bval','Output');

};
//var aval = (<HTMLInputElement>document.getElementById('vala')).value;
//var bval = (<HTMLInputElement>document.getElementById('valb')).value;
//creating a structure for any class variable or function
 interface ICalcFunction {
    //assigning a type to the interface
    (x:number,y:number): number;
}
type ButtonEvent = MouseEvent<HTMLButtonElement>
    

 //creating a calculator class and assigning a type to its properties
   class addCalculator {
       //writing its properties access to private and assigning their types
    private x : HTMLInputElement;
    private y : HTMLInputElement;
    private output : HTMLSpanElement;
    private frm: HTMLFormElement;
//adding a factory of object
    constructor() {
        this.x = <HTMLInputElement>document.getElementById('vala');
        this.y = <HTMLInputElement>document.getElementById('valb');
        this.output = <HTMLSpanElement>document.getElementById('outputId');
        this.frm = <HTMLFormElement>document.getElementById('CalcForm');
        this.frm.addEventListener('click', this.wireEvents);
       // this.wireEvents();
    }
    
    wireEvents(e:ButtonEvent) {
        e.preventDefault();
        (<HTMLButtonElement>document.getElementById('addBtn')).addEventListener('click',
            event => { 
               var result :number | undefined;
               if(result != undefined){
                var select = <HTMLSelectElement>document.getElementById('arith');
                if(select.options[select.selectedIndex].value === "+"){
                    result = this.add(parseInt(this.x.value), parseInt(this.y.value));
                }
                if(select.options[select.selectedIndex].value === "-"){
                    result = this.subtract(parseInt(this.x.value), parseInt(this.y.value));
                }
                if(select.options[select.selectedIndex].value === "/"){
                    result = this.divide(parseInt(this.x.value), parseInt(this.y.value));
                }
                this.output.innerHTML = result.toString();
            }
            });
    }
    //creating a method of class addCalculator with type ICalcFunction
    add: ICalcFunction = function (x,y) {
    return x + y;
    }
    subtract: ICalcFunction = function (x,y) {
    return x - y;
        }
    divide: ICalcFunction = function (x,y) {
    return x / y;
            }
}
