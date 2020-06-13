

// substring
const email = "iwryrozemberg@gmail.com";

const login = email.substring(0,email.indexOf("@"));
const dominio = email.substring(email.indexOf("@")+1); //Assume string.length se a posição final não for informada

console.log("NOME:", login, " HOST: ", dominio);

//split
const nome = "Iwry Rozemberg Mariano de Sousa"
var resultado = email.split("@");
console.log("SPLIT: ",resultado);


//Replace: /i ignora case-sensitve
var meuSaldo = "O saldo atual é R$ 1550"
var saque = 150;
var deposito = 98.50;
meuSaldo = meuSaldo.replace(/\d+/g, 
    (saldoAnterior) =>  parseInt(saldoAnterior) + deposito - saque);
console.log("REPLACE: Saldo => ",meuSaldo);

//IndexOf: é CaseSensitive
console.log("INDEXOF: ",nome.indexOf("DE"));
console.log("INDEXOF: ", nome.toLowerCase().indexOf("de")); //toLowerCase para poder "driblar" o case-sensitive


//Slice
console.log("SLICE: Saldo",meuSaldo.trim().slice(-9)); //Valor negativo inicia a contagem da direita, positiva da esquerda

