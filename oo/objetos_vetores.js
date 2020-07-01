var sapatos = { cor: "marrom", marca: "Nike", tamanho: 42 };
sapatos.tamanho = 47;

console.log(sapatos.tamanho);
delete sapatos.tamanho;
console.log(sapatos.tamanho);
sapatos.tamanho = 42;
console.log(sapatos);



var objeto1 = { valor: 2.4 }; //Criando 1º objeto
var objeto2 = objeto1; // Referenciando objeto em outra variavel
var objeto3 = { valor: 2.4 }; //Criando um novo objeto com mesmo valor

console.log(objeto1 === objeto2); // são o mesmo objeto
console.log(objeto1 == objeto3); // são objetos diferentes, mesmo tendo o mesmo valor

objeto1.valor = 4.8; //ao alterar o valor de um objeto, todos as referencias também serão alteradas
console.log(objeto2.valor);
console.log(objeto3.valor);


var lista = [];
lista.push("arroz");
lista.push("feijão");
lista.push("carne");
console.log(lista.join(", ")); //Une todo array em uma string
console.log(lista.pop()); //retira ultimo elemento da pilha
console.log(lista);

const valorMulta = 25.50;
const taxaEmbarque = 12;
// Função Call
var A = {
    valorBase: 100,
    taxa: 10,
    desconto: 8,
    calcular: function(multa, valorEmbarque) {
        return this.valorBase + (this.taxa - this.desconto) + multa + valorEmbarque;
    }
};

var B = {
    valorBase: 120,
    taxa: 25,
    desconto: 0
};



console.log("A: ", A.calcular(valorMulta, taxaEmbarque));
console.log("com call(), A empresta calcular para B: ", A.calcular.call(B, valorMulta, taxaEmbarque));
console.log("com apply(), também, porém com array de argumentos: ", A.calcular.apply(B, [valorMulta, taxaEmbarque]));

//Protótipos

function User(id, name) {
    this.id = id;
    this.name = name;
}

User.prototype.getId = function() { return this.id };
User.prototype.getName = function() { return this.name };

const usuario = new User(1, 'Iwry Rozemberg');
console.dir(usuario);

function AccountUser(id, name, login, senha) {
    User.call(this, id, name);
    this.login = login;
    this.senha = senha;
}

AccountUser.prototype = new User();
AccountUser.prototype.getLogin = function() { return this.login };
AccountUser.prototype.getSenha = function() { return this.senha };

const usuario01 = new AccountUser(2, 'Mateus Macedo', 'parazim', '170214');
console.log(usuario01);
console.log(usuario01.getId());


function compararMenorQueOuIgual(x, y) {
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
}

function menorOuIgual(x, y) {
    return x <= y;
}

function comparador(predicado) {
    return function(x, y) {
        if (truthy(predicado(x, y))) {
            return -1;
        } else if (truthy(predicado(y, x))) {
            return 1;
        } else {
            return 0;
        }
    }
}

var arraySort = [1, 3, -1, -6, 0, -100, 22, 20, -30, 1114].sort(comparador(menorOuIgual))