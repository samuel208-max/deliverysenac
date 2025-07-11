function atualizarCarrinho() {
    //liimpar carrinho
    carrinhoUL.innerHTML = '';
    //cria a variavel para o total a pagar
    let total = 0;

    //============ Adicionar itens ao carrinho =============
    carrinho.forEach((pizza) => {
        const liCarrinho = document.createElement('li');
        
        //adicionar uma classe ao <li> do carrinho
        liCarrinho.className = "item_carrinho";

        //definir conteúdo do <li> do carrinho
        liCarrinho.textContent = `${pizza.nome} - R$${pizza.valor.toFixed(2)}`;
        carrinhoUL.appendChild(liCarrinho);

        //cria botão para remover item do carrinho
        const removerBtn = document.createElement('button');
        removerBtn.textContent = "X";

        //define uma classe para o botão remover
        removerBtn.className = "btn_remover"
        total += pizza.valor;
        liCarrinho.appendChild(removerBtn);
        removerBtn.addEventListener('click', () => {
            let indiceClicado = carrinho.indexOf(pizza);
            removerCarrinho(indiceClicado);
            alert(`Item removido: ${pizza.nome}`);

        });
    });

    //=========== Exibe o valor total a pagar =====================
    const divTotal = document.querySelector('.total')
    divTotal.innerHTML = `TOTAL R$${total.toFixed(2)}`

}; //fecha função atualizar