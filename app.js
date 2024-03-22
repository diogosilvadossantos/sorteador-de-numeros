// function exibirTextoNaTela(tag,  texto) {
//     let campo = document.getElementById(tag);
//     campo.innerHTML = texto;
// }

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero = 0;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        
        sorteados.push(numero);
        
        
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    document.getElementById('btn-reiniciar').removeAttribute('disabled');
    limparCampo();
    
    // alert(sorteados);
    // if (quantidade === 1) {
    //     exibirTextoNaTela('resultado', `O número sorteado é: ${sorteados}`);
        
    // } else {
    //     exibirTextoNaTela('resultado', `Os números sorteados são: ${sorteados}`);
    // }
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function limparCampo() {
    quantidade.value = '';
    de.value = '';
    ate.value = '';
}

function reiniciar(){
    limparCampo();
    document.getElementById('btn-reiniciar').setAttribute('disabled', true);
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
}