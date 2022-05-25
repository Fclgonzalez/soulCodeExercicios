const lampApagada = document.querySelector('.apagada')
const lampAcesa = document.querySelector('.acesa')
const btnAcendeApaga = document.querySelector('#acende-apaga')
lampApagada.style.opacity = 1

btnAcendeApaga.addEventListener('click', () => {

    if (lampApagada.style.opacity == 1){
        lampApagada.style.opacity = 0
        lampAcesa.style.opacity = 1

    } else {
        lampAcesa.style.opacity = 0
        lampApagada.style.opacity = 1
    }
})

