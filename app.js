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

        // Verifica se o valor "do número" é menor que o valor de "até o número"
        if (ate <= de) {
            alert('O valor do número deve ser maior que o valor de até o número!');   
        } else {
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }

            // Adiciona o número sorteado ao array
            sorteados.push(numero);

            // Verifica se a quantidade de números a serem sorteados é maior que o intervalo informado
            if (quantidade > (ate - de + 1)) {
                alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
                return;
            }  

            let resultado = document.getElementById('resultado');
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
            document.getElementById('btn-reiniciar').removeAttribute('disabled');
            
        }
       
    }

      
    // limparCampo();
    
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

// function limparCampo() {
//     quantidade.value = '';
//     de.value = '';
//     ate.value = '';
// }

function reiniciar(){
    // limparCampo();
    document.getElementById('btn-reiniciar').setAttribute('disabled', true);
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    quantidade.value = '';
    de.value = '';
    ate.value = '';
}