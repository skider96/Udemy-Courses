const array = [1, 2, 3, 4]

const max = getMax(array)
console.log(max)

function getMax (array) {
  if (array.length === 0) return undefined
  let maxNumber = Math.max(0, array.length)
  return maxNumber

  //other methods are these:

  //   array.reduce((accumulator, current) => {
  //     if (current > accumulator) return current
  //     return accumulator)

  // array.reduce((accumulator, current) =>{
  // return (current >accumulator) ? current : accumulator
  // });

  // array.reduce((accumulator, current) => (current > accumulator) ? current : accumulator
}
