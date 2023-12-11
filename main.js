const name = ['Alex', 'John']

function check(name) {
  return `Hello ${name}!`
}

const result = check("Alex")
console.log(result)


const numbers = [1, 2, 5, 7, 8, 10, 12, 34, 45, 77, 31, 125];

function checkForCopyItem(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i])
    }
  }
}

checkForCopyItem(numbers)




function subNumbers(firstNumber, secondNumber) {
  return firstNumber - secondNumber
}
const Subresult = subNumbers(2, 3)
console.log(Subresult)


function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}
const addresult = addNumbers(2, 3)
console.log(addresult)


function mulNumbers(firstNumber, secondNumber) {
  return firstNumber * secondNumber
}
const Mulresult = mulNumbers(2, 3)
console.log(Mulresult)


function divNumbers(firstNumber, secondNumber) {
  return firstNumber / secondNumber
}
const divresult = divNumbers(2, 3)
console.log(divresult)





































