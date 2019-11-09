import { Dimension } from "./dimensions";
export class Building {
    private rooms: Array<Dimension> = [];
    public addRoom(room: Dimension) {
        this.rooms.push(room);
    }
    public calcArea(): number {
        let totalArea: number = 0; for (let room of this.rooms) {
            totalArea += room.width * room.length;
        }
        return totalArea;
    }
}
