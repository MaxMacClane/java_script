let num = 56
let firstName = 'Tyler'

const isProgrammer = true

firstName = 'Tyler MacClane'
// isProgrammer = false

// alert(firstName)


// console.log(num + 10)
// console.log(num - 10)
// console.log(num / 10)
// console.log(num * 10)
// console.log(num)


// console.log(num)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')



// console.log(input1.value)input2.value


// console.log(resultElement.textContent)

const sum = Number(input1.value) + Number(input2.value)
resultElement.textContent = sum
console.log(typeof sum)
