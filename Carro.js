class Carro {
    /**
     * 
     * @param {string} modelo 
     * @param {string} marca 
     * @param {number} preco 
     * @param {number} qtde 
     */
    constructor(modelo, marca, preco, qtde) {
        this._modelo = modelo;
        this._marca = marca;
        this._preco = preco;
        this._qtde = qtde;
        this._turnOn = false;
    }
    get modelo() {
        return this._modelo;
    }

    get marca() {
        return this._marca;
    }

    get preco() {
        return this._preco;
    }
    get qtde() {
        return this._qtde;
    }
    get turnOn() {
        return this._turnOn;
    }
    ligar() {
        this._turnOn = true;
        console.log("Vruuummmm!!!!");
    }
    buzinar = () => console.log("Sai da frente!!!");
}

exports.Carro = Carro;
// module.exports = new Carro();