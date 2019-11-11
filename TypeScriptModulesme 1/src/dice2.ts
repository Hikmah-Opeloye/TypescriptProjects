window.onload = function()
{
    class Dice {

    // properties that are private to this class
    private   _max: number;
    private   _min: number;

    // function that created objects of this class
     constructor(max: number) {
         this._max = max;
         this._min = 1;
    }

     // access function that allows us to read the private property max/min
    get max(): number {
        return this._max;
     }
    get min(): number {
        return this._min;
    }
    // access function that allows us to update the private property min
    set min(min: number) {
        this._min = min;
    }
   
    //  a method that generates a random number between min and max
    roll() {
        return Math.floor(Math.random() * this._max)  + this._min;
    }
}

var diceroll = new Dice(6);

console.log(diceroll);

}