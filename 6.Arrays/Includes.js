const array = [1, 2, 3, 4]
let bool = includes(array, 5);

function includes (array, searchedEelement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchedEelement) return true
    else return false
  }
}
console.log(bool)
