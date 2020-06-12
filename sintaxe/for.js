const Carro = require("../Carro.js").default

var carrosList = [
    new Carro('Corsa', 'Chevrolet', 45000, 5),
    new Carro('Punto', 'Fiat', 120000, 2)
];
// For: Estrutura comum do for, necessário contador
// Necessário informar, inicio, incremento e condição de término
var total = 0;
for (let i = 0; i < carrosList.length; i++) {
    total += carrosList[i].preco * carrosList[i].qtde;
}
console.log("a) FOR: Total do estoque: ", total.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' }));

// For of
// Percorre itens de uma lista até seu término
total = 0;
for (const carro of carrosList) {
    total += carro.preco * carro.qtde
}
console.log("b) FOROF: Total do estoque: ", total.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' }));

// For in
// Não há necessidade de informar o término ou incremento, acesso a propriedades enumeradas
total = 0;
for (const i in carrosList) {
    const { preco, qtde } = carrosList[i];
    total += preco * qtde;
}
console.log("C) FORIN: Total do estoque: ", total.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' }));

const cores = ['Verde', 'Amarelo', 'Azul', 'Branco']
for (const i in cores) {
    if (cores.hasOwnProperty(i)) {
        console.log(i, ": ", cores[i]);
    }
}

// For Each: Utiliza uma função callback para executar a propriedade do Array
total = 0;
function totalEstoque(item, index) {
    const { preco, qtde } = item
    total += preco * qtde;
}
carrosList.forEach(totalEstoque);
console.log("D) FOREACH: Total do estoque: ", total.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' }));
