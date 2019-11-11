
// main.ts
import { Building } from "./building";
//import { addCalculator, ICalcFunction } from "./calculator";
import  p  from "./person";



const testBuilding: Building = new Building();
testBuilding.addRoom({ width: 10, length: 20 });
testBuilding.addRoom({ width: 21, length: 13 });
testBuilding.addRoom({ width: 8, length: 10 });
console.log("The total area of the house is: ", testBuilding.calcArea());
console.log(p.deathdate());




