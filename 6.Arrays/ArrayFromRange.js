const numbers = arrayFromRange(-10, -4);
console.log(numbers)

function arrayFromRange(min, max) {
let arrayManipulated = [];
    for (var i = min; i <= max; i++) {
    arrayManipulated.push(i);
};
return arrayManipulated;
}