// defyneProperty -> Getter e Setters

function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque;
        },

        set: function(valor) {
            estoquePrivado = valor;
        }
    })
}

const p1 = new Produto('camiseta', 20, 3);
