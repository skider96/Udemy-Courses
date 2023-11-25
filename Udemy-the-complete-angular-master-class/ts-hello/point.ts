export class Point {
    constructor(private _x?: number, public _y?: number) {}
  
    draw() {
      console.log("X: " + this._x + " y: " + this._y);
    }
    get x() {
      return this._x;
    }
  
    set x(value) {
      if (value != undefined && value < 0) 
      throw new Error("Value cannot be set to zero");
  
      this._x = value;
    }
  }