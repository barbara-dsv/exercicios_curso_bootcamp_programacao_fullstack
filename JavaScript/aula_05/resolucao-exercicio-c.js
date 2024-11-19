//Crie um objeto chamado biblioteca com as propriedades nome, localizacao, e livros, onde livros é um array de objetos. Cada objeto dentro do array deve representar um livro com titulo, autor, e ano. Adicione pelo menos 3 livros ao array e, em seguida, imprima todos os títulos no console. 

let biblioteca = {
    nome: "Biblioteca Cuca Barra do Ceará",
    localizacao: "Av. Pres. Castelo Branco, 6417 - Barra do Ceará",
    livros: [
        {
            titulo: 'Cangaceiros',
            autor: 'Jose Lins do Rego',
            ano: 1953
        },
        {
            titulo: 'Ensaio sobre a cegueira',
            autor: 'José Saramago',
            ano: 1995
        },
        {
            titulo: 'A Arte da Guerra',
            autor: 'Sun Tzu',
            ano: "500 a.c"
        }
    ]
}


for (let i = 0; i < biblioteca.livros.length; i++) {
    console.log(biblioteca.livros[i].titulo)
}
