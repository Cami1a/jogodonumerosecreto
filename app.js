alert('Bem vindo ao jogo do Número secreto');
numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// se o chute for = ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`escolha um número dentre 1 e ${numeroMaximo}`);
 
    if (chute == numeroSecreto) {
        break;
    } else {
        if(numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}.`);
    
        }else{
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;

    }

}
let palavrastentativas = 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);


