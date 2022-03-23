const items = [
    {
    id:0,
    nome: 'Curso_Completo',
    img: 'image.jpg',
    quantidade: 0
    },
]

startShop = () => {
    var containerProdutos = document.getElementById("produtos");
    items.map((val) =>{
        containerProdutos.innerHTML += `
        
        <div class="produto-single">
            <img src="`+val.img+`" />
            <p> `+val.nome+`</p>
            <a id="t" key"`+val.id+`" href="#">Adicionar ao Carrinho</a>
        </div>

        `;
    })
}

startShop();


atualizarCarrinho = () => {
    console.log(items);
}

var links = document.getElementById('t');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}