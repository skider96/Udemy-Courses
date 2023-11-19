function facotryCreatedObject (name, value) {
  return {
    nameOfObject: name,
    valueOfObject: value,
    greet: function () {
      console.log(
        `This is ${this.nameOfObject} and value is ${this.valueOfObject}.`
      )
    }
  }
}

let factory = facotryCreatedObject('dani', 27)
factory.greet()

function ConstructorFunction (name, value) {
  ;(this.nameOfObject = name),
    (this.valueOfObject = value),
    (this.greet = function () {
      console.log(
        `This is ${this.nameOfObject} and value is ${this.valueOfObject}.`
      )
    })
}

let constructedFunction = new ConstructorFunction('moshe', 23);
constructedFunction.greet();
