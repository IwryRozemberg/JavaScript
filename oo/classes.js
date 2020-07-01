class Pessoa {
    /**
     * Construtor da classe Pessoa
     * @param {string} nome Nome da pessoa
     * @param {String} cpf  CPF da pessoa
     * @param {Date} dataNascimento Data de nascimento da pessoa
     */
    constructor(nome, cpf, dataNascimento) {
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = new Date(dataNascimento);
    }

    cpfIsValid(value) {
        return /^\d.\d.\d-\d$/.test(value);
    }

    get nome() { return this._nome }
    get cpf() { return this._cpf }
    get dataNascimento() { return this.dataNascimento }
    set nome(value) { this._nome = value }
    set cpf(value) {
        if (this.cpfIsValid(value)) {
            this._cpf = value;
        } else {
            throw new Error('número cpf inválido');
        }
    }
    set dataNascimento(value) { this._dataNascimento = value }
}


class Juridico extends Pessoa {
    cpfIsValid() {
        throw new Error('Este método não pode ser acessado a partir dessta classe')
    }
}


const fulano = new Pessoa('Iwry', '005.859.021,86', '09/03/1986');

console.log(fulano);

function converterIdade(idade) {
    let intIdade;
    if (typeof idade === 'string') {
        intIdade = parseInt(idade, 10);
        if (isNaN(intIdade)) {
            warn(`Falha na conversão do valor: ${idade}`);
            intIdade = 0;
        }
    } else {
        intIdade = idade;
    }
    return intIdade;
}

function fail(msg) {
    throw new Error(msg);
}

function warn(msg) {
    console.warn(msg);
}

console.log(converterIdade("42"));
console.log(converterIdade(42));
console.log(converterIdade("abc"));