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



function calculate(a, b, operation) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  }
}

console.log (calculate(2, 3, '*'))




































