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


biblioteca.livros.push({
    titulo: 'O Alquimista',
    autor: 'Paulo Coelho',
    ano: 1988
})

biblioteca.livros.shift()

biblioteca.localizacao = "Av. Pres. Castelo Branco, 255 "

console.log(biblioteca)