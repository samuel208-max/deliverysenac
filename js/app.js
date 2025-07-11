const cardapioUl = document.getElementById('cardapio') //<ul id="cardapio"></ul>
const modal = document.getElementById('modal');
const formCadastro = document.getElementById('cadastraPizza')
const adicionarPizza = document.getElementById('adicionarPizza')
const carrinhoUL = document.getElementById('carrinho'); //<ul id="carrinho"></ul>

adicionarPizza.addEventListener('click', () => {
    modal.open = true;
});
formCadastro.addEventListener('submit', (evento) => {
    //para o evento padrão do formulario
    evento.preventDefault();
    let nome = document.getElementById('nome').value
    let foto = document.getElementById('foto').value
    let valor = parseFloat(document.getElementById('valor').value)
    let itemIngredientes = document.getElementById('ingredientes').value
    let ingredientes = itemIngredientes.split(', ') //separa uma string e transforma em array
    // console.log(itemIngredientes)
    // console.log(ingredientes);

    let novaPizza = {
        foto: foto,
        nome: nome,
        ingredientes: ingredientes, //[ingredientes]
        valor: valor
    };
    cardapio.push(novaPizza);
    cardapioUl.innerHTML = ""
    console.log(cardapio)
    exibirCardapio();
    modal.open = false;
})

let carrinho = [];
//zera a lista do cardapio
cardapioUl.innerHTML = "";
//repetição para exibir a lista de pizzas no cardapio (ul)

//================EVENTO ABRIR CARRINHO=================
//seleciona o botão no menu para abrir o carrinho
const btnAbrirCarrinho = document.getElementById('abrirCarrinho');
//Seleciona a DIV "checkout"  para manipular o display (block ou none)
const checkout = document.getElementById('checkout');
btnAbrirCarrinho.addEventListener('click', () => {
    //altera o display da div para block
    checkout.style.display = 'block';
});

// ===================EVENTO FECHAR CARRINHO==================

const fecharCarrinho = document.getElementById('fecharCarrinho');
fecharCarrinho.addEventListener('click', () => {
    //altera o display da div para 'none'
    checkout.style.display = 'none';
});

function removerCarrinho(indice) {
    //remove o indice clicado //splice(onde começa a excluir, quantidade a remover)
    carrinho.splice(indice, 1);
    //atualiza o carrinho após a remoção
    atualizarCarrinho();
}
exibirCardapio();

//---------------- fechar modal -----------------
const fecharModal = document.getElementById('fecharModal')
fecharModal.addEventListener('click', () => {
    modal.open = false;
})