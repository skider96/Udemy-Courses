const numbers = [1, 2, 3, 4]
const output = move(numbers, 0, -2)
console.log(output)

function move (numbers, index, direction) {
  const position = index + direction
  if (position >= numbers.length || position < 0) {
    console.error('Invalid offset')
    return
  }

  const output = [...numbers]
  const element = output.splice(index, 1)[0]
  output.splice(position, 0, element)
  return output
}
