
//creating a structure for person

interface Person {
  name: string;
  age?: number;
    kids: number;
    ageOfDeath: number;
  calcPets: () => number;
  makeYounger: (years: number) => void;
  greet: (msg: string) => string;
  deathdate: () => number | undefined;
    
}
//creating an object of type person
 var p: Person = {
    name: 'John',
    age: 40,
    kids: 4,
    ageOfDeath:70,
    calcPets: function () {
        return this.kids * 2;
    },
    makeYounger: function (years: number) {
        if (this.age != undefined) {
            this.age -= years;
        }
    },
    greet: function (msg: string) {
            return msg + ', ' + this.name;
    },
    deathdate : function () {
        if (this.age != undefined){
        var yearsleft : number = this.ageOfDeath - this.age;
        var date = new Date();
        var currentyear = date.getFullYear();
        var deathday = yearsleft + currentyear;
        console.log(deathday);
        return deathday;
        
        }   
    }
}
export default p;