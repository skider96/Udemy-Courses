const arrayProblem = [1, 2, 3, 4, 1, 2, 1];  

function except(array, excluded) {
  const arrayManipulated = []
  for (const item of array) {
    if (!excluded.includes(item)) {
      arrayManipulated.push(item)
    }
  }
  return arrayManipulated
}
const output = except(arrayProblem, [1, 2])
console.log(output)

