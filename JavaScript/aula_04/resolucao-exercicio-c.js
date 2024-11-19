
let nome = prompt("Digite seu nome")
let senha = prompt("crie uma senha")

while (nome === senha) {
    alert("Senha não pode ser igual ao nome de usuário")
    nome = prompt("Digite seu nome")
    senha = prompt("crie uma senha")
}

