// Metodo ForEache
const containerLivros = document.querySelector('#livros')

function exibirLivros(livros){
    containerLivros.innerHTML = ''
    livros.forEach(livro => {
        if (livro.quantidade < 1){
            containerLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens indisponivel" src="${livro.imagem}"
                    alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `
        } else{
            containerLivros.innerHTML += `
                <div class="livro">
                    <img class="livro__imagens" src="${livro.imagem}"
                        alt="${livro.alt}" />
                    <h2 class="livro__titulo">
                        ${livro.titulo}
                    </h2>
                    <p class="livro__descricao">${livro.autor}</p>
                    <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
                    <div class="tags">
                        <span class="tag">${livro.categoria}</span>
                    </div>
                </div>
            `
        }
    })
}

const ValorLivros = document.querySelector('#valor')

function exibirValorDosLivros(livros){
    let valorTotalDeTodosLivros = 0
    livros.forEach((livro) => {
        if (livro.quantidade > 0){
            valorTotalDeTodosLivros += livro.preco
        }
    })
    valorTotalDeTodosLivros = parseInt(valorTotalDeTodosLivros).toFixed(2)
    ValorLivros.textContent = `${valorTotalDeTodosLivros}`
}


// Metodo Map
function aplicarDesconto(livros){
    const desconto = 0.3 
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: Math.ceil(livro.preco - (livro.preco * desconto)) - 0.01}
    })
    return livrosComDesconto
}


// Metdod Filter
function buscarLivrosPorCategoria(livros, categoria) {
    const livrosFiltradosPorCategoria = livros.filter((livro) => {
        return livro.categoria === categoria
    })

    return livrosFiltradosPorCategoria
}

function procurarLivrosDisponiveis(livros){
    let livrosFiltradosPorDisponibilidade = livros.filter((livro) => {
        return livro.quantidade > 1
    })
    return livrosFiltradosPorDisponibilidade
}


// Metodo Sort
function ordenarLivrosPorPreco(livros) {
    return livros.slice().sort((a, b) => a.preco - b.preco)
}