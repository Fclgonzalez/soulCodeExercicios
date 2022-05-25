/* EXERCÍCIO 1: Crie um código que receba 3 valores do comprimento de um triângulo e depois mostre um alert informando se o triângulo é equilátero, isóceles ou escaleno. */

/* let lado1 = parseFloat(prompt('Informe o lado 1 do triângulo'))
let lado2 = parseFloat(prompt('Informe o lado 2 do triângulo'))
let lado3 = parseFloat(prompt('Informe o lado 3 do triângulo'))

if (lado1 == lado2 && lado2 == lado3) {
    alert('O triângulo é equilátero.')

} else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
     alert('O triângulo é isósceles.')

} else {
    alert('O triângulo é escaleno.')
} */


/* EXERCÍCIO 2: Faça um script que leia três números inteiros e mostre o maior deles. */

/* let numero1 = parseInt(prompt('Informe primeiro número'))
let numero2 = parseInt(prompt('Informe segundo número'))
let numero3 = parseInt(prompt('Informe terceiro número'))

if (numero1 > numero2) {
    if (numero1 > numero3) {
        alert('O primeiro número é o maior')
    } else {
        alert('O terceiro número é o maior')
    }
} else if (numero2 > numero3) {
    alert('O segundo número é o maior')
} else {
    alert('O terceiro número é o maior')
} */


/* EXERCÍCIO 3: Crie duas variáveis e peça para que o usuário digite dois números inteiros pelo prompt. Após receber os valores nas variáveis, inverta os valores dentro das variáveis, ou seja, o valor da variável x vai para a variável y e o valor da variável y vai para a variável x. Mostre o antes das variáveis e seu depois. */

let x = parseInt(prompt('Digite o valor de x'))
let y = parseInt(prompt('Digite o valor de y'))

document.write(`<p>Valor original das variáveis: x = ${x} e y = ${y}<p>`)

let z = x
x = y
y = z

document.write(`<p>Valor atual das variáveis: x = ${x} e y = ${y}<p>`)

