try {
    const array = [1, 2, 3, 4]
    const result = countOccurrences(null, 2)
    console.log(result)
    
}
catch (error){
console.log(error);
}

function countOccurrences (array, searchELement) {
    let occurrences = 0
  if (!Array.isArray(array)) throw new Error(`The first argument must be an array`)

  for (let i = 0; i < array.length; i++) {
    array[i] === searchELement ? occurrences++ : occurrences
  }
  return occurrences
}



