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