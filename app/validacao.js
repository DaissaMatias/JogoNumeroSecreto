function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute //so de somar ele ja vai tentar converter esse numero para inteiro

    if (chuteForInvalido(numero)) {
        if(chute == 'game over') {
            document.body.innerHTML = 
            `
                <h2>Game Over!</h2>
                <h3>Pressione o botão para jogar novamente.</h3>
                <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button> 
            `
            document.body.style.backgroundColor = 'black';
        } else {
            elementoChute.innerHTML += '<div>Valor inválido</div>'
        }    
       //return // ele vai retornar a essa função e ela não será invocada,
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre 
        ${menorValor} e ${maiorValor}</div>`;

        return // não executará novamente a função
    }

    if(numero === numeroSecreto) { // document.body para tirar todos o valor da tela e redesenhar ela
        document.body.innerHTML = `  
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `            
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></i></div>
        `
    } 
    
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {  // e de evento
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})