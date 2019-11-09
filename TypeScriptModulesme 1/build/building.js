define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Building = /** @class */ (function () {
        function Building() {
            this.rooms = [];
        }
        Building.prototype.addRoom = function (room) {
            this.rooms.push(room);
        };
        Building.prototype.calcArea = function () {
            var totalArea = 0;
            for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
                var room = _a[_i];
                totalArea += room.width * room.length;
            }
            return totalArea;
        };
        return Building;
    }());
    exports.Building = Building;
});
//# sourceMappingURL=building.js.map