function FizzBuzz (input) {
  if (typeof input !== 'number') console.log('Not a number')
  else if (input % 3 === 0 && input % 5 === 0) console.log('FizzBuzz')
  else if (input % 5 === 0) console.log('Buzz')
  else if (input % 3 === 0) console.log('Fizz')
  else if (input % 3 !== 0 || input % 5 !== 0) console.log(input)
}

//console.log(FizzBuzz('85'))
