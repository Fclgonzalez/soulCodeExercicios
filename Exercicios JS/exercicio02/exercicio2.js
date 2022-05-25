// -> Crie um programa que pergunta quantos números o usuário deseja digitar (tanto inteiro quanto decimal) e receba os números e armazene esses números em um array e depois mostre a soma total deles, a média deles, mostre cada valor em uma potência de 2 e faça a raíz quadrada e cúbica de cada um.

/* let quantidadeDeNumeros = parseInt(prompt("Quantos números você deseja digitar?"))
let array = []

for (let i = 0; i <p quantidadeDeNumeros; i++) {
    array[i] = (parseFloat(prompt(`Digite o ${i+1}º número:`)))  
}

let soma = array.reduce((soma,x) => soma + x)
let media = soma/quantidadeDeNumeros
let potencia = array.map(x => x**2)
let raizQuadrada = array.map(x => x**(1/2))
let raizCubica = array.map(x => x**(1/3))

document.write(`<p>Os valores digitados são: ${array}</p>`)
document.write(`<p>A soma total dos valores é: ${soma}</p>`)
document.write(`<p>A média dos valores é: ${media}</p>`)
document.write(`<p>Os quadrados dos valores são: ${potencia}</p>`)
document.write(`<p>As raizes quadradas dos valores são: ${raizQuadrada}</p>`)
document.write(`<p>As raizes cúbicas dos valores são: ${raizCubica}</p>`) */

//--------------------------------------------------------------------------------------------------------------

// -> Peça ao usuário digitar algum texto no pelo prompt e depois mostre esse texto com todas as letras maiúsculas, com todas as letras minúsculas e depois escreva no console letra por letra do texto que o usuário digitou. (Utilize o método split para fazer esse último)

/* let texto = prompt("Digite o texto desejado")

document.write(`<p>Texto em letras maiúsculas: ${texto.toUpperCase()}</p>`)
document.write(`<p>Testo em letras minúsculas: ${texto.toLowerCase()}</p>`)
document.write(`<p>Letra por letra: ${texto.split('')}</p>`) */

//--------------------------------------------------------------------------------------------------------------

// -> Peça ao usuário para digitar um número binário e o converta para decimal.

//Opção utilizando somente parseInt:

/* let binario = prompt('Digite um número binário:')
document.write(`Número convertido em decimal: ${parseInt(binario,2)}`)
 */

// Opção desenvolvendo a lógica:

let arrBinario
let decimal = 0

do {
    let binario = prompt('Digite um número binário:')
    arrBinario = binario.split('')
    verifica = arrBinario.every(numero => (numero == 0 || numero == 1))

} while (!verifica);

arrBinario.reverse()

for (let i = 0; i < arrBinario.length; i++) {
    if ( arrBinario[i] == 1){
        decimal += (2 ** i)
    }
}

document.write(`Número convertido em decimal: ${decimal}`)


//RESOLUÇÃO DO PROFESSOR
/* const bin = prompt('Digite um número binário')

      let dec = bin
      .split('')
      .reverse()
      .map(x => parseInt(x))
      .map((bin, i) => bin == 1 ? 2 ** i : 0)
      .reduce((x, y) => x + y)

      //dec = parseInt(bin, 2)

      //dec = eval(`0b${bin}`)

      alert(`${bin} para decimal é ${dec}` */