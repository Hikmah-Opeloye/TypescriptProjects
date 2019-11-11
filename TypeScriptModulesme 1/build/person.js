//creating a structure for person
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //creating an object of type person
    var p = {
        name: 'John',
        age: 40,
        kids: 4,
        ageOfDeath: 70,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            if (this.age != undefined) {
                this.age -= years;
            }
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        },
        deathdate: function () {
            if (this.age != undefined) {
                var yearsleft = this.ageOfDeath - this.age;
                var date = new Date();
                var currentyear = date.getFullYear();
                var deathday = yearsleft + currentyear;
                return deathday;
            }
        }
    };
    exports.default = p;
});
//# sourceMappingURL=person.js.map