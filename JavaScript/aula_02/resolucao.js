// Exercício 2a
// Solicita ao usuário que digite seu nome e exibe uma mensagem de boas-vindas em um alerta
let nome = prompt("Digite seu nome:");
alert("Bem-vindo(a), " + nome + "!");

// Exercício 2b
// Solicita ao usuário que digite dois números, realiza a soma e exibe o resultado em um alerta
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let soma = numero1 + numero2;
alert("A soma dos números é: " + soma);

// Exercício 2c
// Calculadora de IMC
// Solicita ao usuário que informe seu peso em kg e altura em metros
let peso = Number(prompt("Informe seu peso em kg:"));
let altura = Number(prompt("Informe sua altura em metros:"));

// Calcula o IMC usando a fórmula IMC = peso / (altura * altura)
let imc = peso / (altura * altura);

// Exibe o resultado do IMC
alert("Seu IMC é: " + imc.toFixed(2));

// Determina a categoria do IMC e exibe a classificação correspondente
if (imc < 18.5) {
    alert("Classificação: Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    alert("Classificação: Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    alert("Classificação: Sobrepeso");
} else {
    alert("Classificação: Obesidade");
}
