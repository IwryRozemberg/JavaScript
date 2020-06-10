const desconto = (preco, aliquota) => preco * aliquota
const teste = desconto(560, 0.08)
console.log("Resulado: ", teste.toFixed(2));


var testeVar = 0; //Variavel "global", dispnivel em todo código, valor pode ser alterado
let testeLet = 0; //variavel local, valor pode ser alterado
const testeConst = 0; //variavel local, valor estatico, obrigatorio inicializacao

var numero = 9;
console.log("Número inicial: ",numero, "Incrementação após Impressão: ", numero++); //Imprime depois faz o incremento
console.log("Número inicial: ", numero, "Incrementação antes Impressão: ", ++numero); //Faz o incremento depois imprime

//Objetos
// a) Criando objeto com função construtora

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falar = function() {
        return `Meu nome é ${this.nome} ${this.sobrenome}`
    };
}

const iwry = new Pessoa("Iwry Rozemberg", "Sousa");
iwry.nome = "IWRY"; //Alterando o nome
console.log("a) Função Construtora com this: ",iwry.falar(), "Nome Get:", iwry.nome);


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
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    falar() {
        return `Meu nome é ${this.getNome} ${this.getSobrenome}`;
    }
    get getNome() {
        return this._nome;
    }
    /**
     * @param {(arg0: string) => void} value
     */
    set nome(value) {
        this._nome = value;
    }
    get nome() {
        return this._sobrenome;
    }
    /**
     * @param {(arg0: string) => void} value
     */
    set sobrenome(value) {
        this._sobrenome = sobrenome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
}
// iwry.iwryClass.nome()
const iwryClass = new PessoaClass("Iwry Rozemberg", "Sousa");
iwryClass.nome = "IWRY"; //Alterando o nome
console.log("c) Com Classe: ",iwryClass.falar(), "Nome Get:", iwryClass.getNome);

let funcionario = iwryClass // Ao atribuir um objeto em outro, quando um deles sobre alteração, todos sofrerão, ou seja, é atribuição por referência
let gerente = {...iwryClass}; //Object.assing transfere apenas os valores para outro objeto, porem só as propriedades, as funcionalidades não irão ser transferidas.
funcionario.nome = "Novo Funcionario "
console.log("1. Funcionário: ",funcionario, funcionario.falar(), "\n2. Iwry: ", iwryClass, iwryClass.falar(), "\n3. Gerente: ", gerente, gerente.nome);


function makeAPICall(obj){
    let ob = Object.assign({}, obj);
    ob['name'] = "hari";
    console.log('Obect in API call ', ob);
    // make an API call with obj as params
  }
  
  function doTask(){
    let mainObj = {'status' : 'new' };
    console.log('Object before API call ', mainObj);
    makeAPICall(mainObj);
    console.log('Object after API call ', mainObj);
  }
  
  doTask()