let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const btnsFiltro = [...document.querySelectorAll('#btnFiltrarLivrosFront, #btnFiltrarLivrosBack, #btnFiltrarLivrosDados')]
const btnLivrosDisponiveis = document.querySelector('#btnLivrosDisponiveis')
const btnOrdernarPorPreço= document.querySelector('#btnOrdenarPorPreco')

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI(){
    try {
        const res = await fetch(endpointDaAPI)
        livros = await res.json()
        console.table(livros)

        let livrosComDesconto = aplicarDesconto(livros)
        exibirLivros(livrosComDesconto)
        exibirValorDosLivros(livrosComDesconto)

        btnsFiltro.forEach((btn) => {
            btn.addEventListener('click', (evt) => {
                // debugger
                let botao = evt.target
                let valueCategoria = botao.value
                let livrosFiltradosPorCategoria = buscarLivrosPorCategoria(livrosComDesconto, valueCategoria)

                exibirLivros(livrosFiltradosPorCategoria)
                exibirValorDosLivros(livrosFiltradosPorCategoria)
            })
        })

        btnLivrosDisponiveis.addEventListener('click', () => {
            let livrosDisponiveis = procurarLivrosDisponiveis(livrosComDesconto)

            exibirLivros(livrosDisponiveis)
            exibirValorDosLivros(livrosDisponiveis)
        })

        btnOrdernarPorPreço.addEventListener('click', () => {
            let livrosOrdenadosPorPreco = ordenarLivrosPorPreco(livrosComDesconto)

            exibirLivros(livrosOrdenadosPorPreco)
            exibirValorDosLivros(livrosOrdenadosPorPreco)
        })
    } catch (error) {
        console.log(error)
    }
}