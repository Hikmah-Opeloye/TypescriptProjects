interface Person {
  name: string;
  age?: number;
  kids: number;
  calcPets: () => number;
  makeYounger: (years: number) => void;
  greet: (msg: string) => string;
  deathdate: () => number;
    
}

var p: Person = {
  name: 'John',
  age: 40,
  kids: 4,
  calcPets: function () {
      return this.kids * 2;
  },
  makeYounger: function (years: number) {
      this.age -= years;
  },
  greet: function (msg: string) {
      return msg + ', ' + this.name;
  }
  deathdate: function () {
    var yearsleft : number = 80.96 - this.age;
    var date = new Date();
    var currentyear = date.getDate();
    console.log(currentyear);
    var deathday = yearsleft + currentyear;
    
    return deathday;
  }
};