// Valor atribuído à variável mensagem: “Pode passar”
var semaforo = "verde";
var mensagem = "";

if (semaforo == "verde") {
    mensagem = "Pode passar";
}

// Valor atribuído à variável mensagem: “Pare”
semaforo = "vermelho";

if (semaforo == "verde") {
    mensagem = "Pode passar";
} else {
    mensagem = "Pare";
}

// Valor atribuído à variável mensagem: “Atenção”
semaforo = "amarelo";

if (semaforo == "verde") {
    mensagem = "Pode passar";
} else if (semaforo == "vermelho") {
    mensagem = "Pare";
} else {
    mensagem = "Atenção";
}

// Valor impresso no console: “Usuário autenticado”
const username = "usuario123";
const password = "123456";

if (username == "usuario123" && password == "123456") {
    console.log("Usuário autenticado");
} else {
    console.log("Login e/ou senha incorrretos");
}

// Valor impresso no console: “CPF válido”
const cpf = "123.456.678.01";

if (cpf.length == 14) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
}

//If Ternário
const chuva = false;
console.log(chuva ? 'Fica em casa.' : 'Pode sair');

//Com operador &&
const preco = 50;
var permiteParcelar = preco > 100 && true;
console.log('Pode Parcelar a compra?', permiteParcelar);