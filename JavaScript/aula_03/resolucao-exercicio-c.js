while(true){
    let numero = Number(prompt("Digite um número")) 
    if(numero < 0){
        alert("O programa encerrou porque o número é negativo.")
        break;
    }

    alert(`O dobro de ${numero} é ${numero * 2}`);
}
