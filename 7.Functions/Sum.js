function sum (array) {
  if (  Array.isArray(array) == false) console.error("The input must be an array");
  let sumOfArray = 0
  for (let i = 0; i < array.length; i++) {
    sumOfArray += array[i]
  }
  console.log(sumOfArray) 
}

sum([1, 2, 3,4]);
