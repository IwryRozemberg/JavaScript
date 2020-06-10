const desconto = (preco, aliquota) => preco * aliquota
const teste = desconto(560, 0.08)
console.log("Resulado: ", teste.toFixed(2));


var testeVar = 0; //Variavel "global", dispnivel em todo código, valor pode ser alterado
let testeLet = 0; //variavel local, valor pode ser alterado
const TESTE_CONST = 0; //variavel local, valor estatico, obrigatorio inicializacao

//Objetos
// a) Criando objeto com função construtora

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falar = () => `Meu nome é ${this.nome} ${this.sobrenome}`;
}

const iwry = new Pessoa("Iwry Rozemberg", "Sousa");
iwry.nome = "IWRY"; //Alterando o nome
console.log("a) Função Construtora com this: ",iwry.falar(), "Nome Get:", iwry.nome);


// Encapsulado com Get e Set
function PessoaGet(nome, sobrenome) {
    var nome = nome; 
    var sobrenome = sobrenome;

    this.falar = () => `Meu nome é ${this.getNome()} ${this.getSobrenome()}`;
    this.getNome = () => nome;
    this.setNome = (value) => nome = value;
    this.getSobrenome = () => sobrenome;
    this.setSobrenome = (value) => sobrenome = value;
}

const iwryGet = new PessoaGet("Iwry Rozemberg", "Sousa");
iwryGet.setNome("IWRY"); //Alterando o nome
console.log("a2) Função Construtora com Get e Set: ",iwryGet.falar(), "Nome Get:", iwryGet.getNome());

// b) Objeto Libeteal: Código não é reaproveitável.

var iwryLiteral = {
    nome: "Iwry Rozemberg",
    sobrenome: "Sousa",
    // falar: () => `Meu nome é ${this.nome} ${this.sobrenome}` -- Arrow function não funcionou
    falar: function () {return `Meu nome é ${this.nome} ${this.sobrenome}`}
}
iwryLiteral.nome = "IWRY"; //Alterando o nome
console.log("b) Objeto Literal: ",iwryLiteral.falar(), "Nome Get:", iwryLiteral.nome);


// c) Criando a Classe Pessoa
class PessoaClass {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar = () => `Meu nome é ${this.getNome()} ${this.getSobrenome()}`;
    getNome = () => nome;
    setNome = (value) => nome = value;
    getSobrenome = () => sobrenome;
    setSobrenome = (value) => sobrenome = value;
}

const iwryClass = new PessoaGet("Iwry Rozemberg", "Sousa");
iwryClass.setNome("IWRY"); //Alterando o nome
console.log("c) Com Classe: ",iwryClass.falar(), "Nome Get:", iwryClass.getNome());

// Testando Refências
var funcionario = iwryClass
funcionario.setNome("Jorge")
console.log("Funcionário: ",funcionario.falar(), "Iwry: ", iwryClass.falar());


var numero = 9;
console.log(numero++); //Imprime depois faz o incremento
console.log(++numero); //Faz o incremento depois imprime
