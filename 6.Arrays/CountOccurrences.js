const array = [1, 2, 3, 4]
function countOccurrences (array, searchELement) {
  let occurrences = 0
  for (let i = 0; i < array.length; i++) {
    array[i] === searchELement ? occurrences++ : occurrences
  }
  return occurrences
}
const result = countOccurrences(array, 2)
console.log(result)
