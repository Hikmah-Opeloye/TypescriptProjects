var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./building", "./person"], function (require, exports, building_1, person_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    person_1 = __importDefault(person_1);
    var testBuilding = new building_1.Building();
    testBuilding.addRoom({ width: 10, length: 20 });
    testBuilding.addRoom({ width: 21, length: 13 });
    testBuilding.addRoom({ width: 8, length: 10 });
    console.log("The total area of the house is: ", testBuilding.calcArea());
    console.log(person_1.default.name);
});
//# sourceMappingURL=main.js.map