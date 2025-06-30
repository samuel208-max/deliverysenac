function exibirCardapio() {
    cardapioUl.innerHTML = "";
    cardapio.forEach((pizza) => {
        //cria um elemento <li> para inserir cada pizza na UL
        const li = document.createElement('li');
        //atribui uma classe para a <li> criada
        li.className = "pizza";
        //cria um elemento <img> para adicionar a imagem da pizza
        const img = document.createElement('img');
        //atribui a foto da pizza para o 'src' da imagem
        img.src = pizza.foto
        //cria uma div para exibir os ingredientes da pizza
        const ingredientesDiv = document.createElement('div');
        ingredientesDiv.innerHTML = `(${pizza.ingredientes.join(', ')})` //join é uma função que tranforma array em texto
        //atribui uma classe para os ingredientes
        ingredientesDiv.className = "ingredientes";
        //cria um botão para adicionar a pizza ao carrinho
        const button = document.createElement('button');
        //texto para o botão comprar
        button.textContent = "COMPRAR 🛒";
        li.appendChild(img);
        li.append(`${pizza.nome} - R$ ${pizza.valor.toFixed(2)}`);
        li.appendChild(ingredientesDiv);
        li.appendChild(button);
        // adiciona a <li> dentro da <ul>
        cardapioUl.appendChild(li)
        //seleciona o botão "Comprar" no <li> e escuta o eveto 'click' 
        li.querySelector('button').addEventListener('click', () => {
            //quando o botão é clicado, adiciona a pizza em questão no array
            carrinho.push(pizza)
            //aviso de pizza adicionada
            alert(`Pizza de ${pizza.nome} adicionada ao carrinho`)
            //atualizar o carrinho após adicionar pizza
            atualizarCarrinho();
        });
    });
}