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

let factoryFunction = facotryCreatedObject('dani', 27)
factoryFunction.greet()

function ConstructorFunction (name, value) {
  ;(this.nameOfObject = name),
    (this.valueOfObject = value),
    (this.greet = function () {
      console.log(
        `This is ${this.nameOfObject} and value is ${this.valueOfObject}.`
      )
    })
}

let constructedFunction = new ConstructorFunction('moshe', 23)
constructedFunction.greet()

function equalObjects (firstParameter, secondParameter) {
  
  return (firstParameter == secondParameter) 
}

function sameObjects (firstParameter, secondParameter) {
  return (firstParameter === secondParameter) 
}

let equalityObjects =  equalObjects(factoryFunction, constructedFunction);
let sameObjectsLet = sameObjects(factoryFunction, constructedFunction)
console.log(equalityObjects);
console.log(sameObjectsLet);
