const Carro = require('../Carro.js').Carro;

var carrosList = [
    new Carro('Onix', 'Chevrolet', 25000, 4),
    new Carro('Punto', 'Fiat', 12000, 2),
    new Carro('Gol', 'Volkswagen', 14000, 2),
    new Carro('Uno', 'Fiat', 12000, 0),
    new Carro('Corsa', 'Chevrolet', 45000, 5),
    new Carro('Palio', 'Fiat', 12000, 1),
    new Carro('Salveiro', 'Volkswagen', 20000, 2),
    new Carro('Prisma', 'Chevrolet', 14000, 3),
    new Carro('Logan', 'Renault', 15000, 1)
];

var carrosListPersonal = [
    new Carro('Corolla', 'Toyota', 88000, 1),
    new Carro('Golf', 'Volkswagen', 30000, 1),
    new Carro('Ecosport', 'Ford', 50000, 1)
]

// For Each: Utiliza uma função callback para executar a propriedade do Array
let total = 0;

function totalEstoque(item, index) {
    const { preco, qtde } = item
    total += preco * qtde;
    return total;
}
carrosList.forEach(totalEstoque);
console.log("FOREACH: Total do estoque: ", total.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' }));

// Filter: Filtra resultados em um Array
var carrosFiltro = carrosList.filter(carro => carro.marca === 'Renault');
console.log(carrosFiltro);
carrosFiltro = carrosList.filter(carro => carro.marca === 'Volkswagen' && carro.modelo === 'Salveiro');
console.log(carrosFiltro);

// Map: percorre cada item do Array e retorna um novo Array
var totalArray = carrosList.map(carro => carro.preco * carro.qtde)
console.log("MAP: Total do estoque: ",
    totalArray.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' }));
total = 0;
totalArray = carrosList.map(totalEstoque) //Também pode ser utilizado função callback
console.log("MAP: Total do estoque: ",
    total.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' }),
    " = ", totalArray.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' }));

//Reduce: Acumula valores de um array conforme função callback informada, 
const valorInicial = 0 //Tem padrão como 0, não é obrigatório, porém ao não ser informado, a função pula o index 0
total = 0;
total = carrosList.reduce((acumulador, currentCarr) => acumulador + (currentCarr.preco * currentCarr.qtde), valorInicial)
console.log("REDUCE: Total do estoque: ", total.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' }));

function carroMaisCarro(maior, atual) {
    if (maior.length === 0 || atual.preco > maior.preco) {
        maior = atual;
    }
    return maior;
}
let carroCaro = carrosList.reduce(carroMaisCarro, []);
console.log("REDUCE: Carro mais caro: ", carroCaro);

function agruparPorMarca(carrosArray, propriedade) {
    return carrosArray.reduce((acc, obj) => {
        let key = obj[propriedade];
        if (!acc[key]) { acc[key] = []; } //Criar um array vazio caso não exista nenhum com o valor desejado
        acc[key].push(obj);
        return acc;
    }, {});
}
const grupoCarros = agruparPorMarca(carrosList, 'marca');
console.log("REDUCE: Agrupar por marca => ", grupoCarros);

//Concat
let carrosTotal = carrosList.concat(carrosListPersonal);
// console.log("CONCAT: ", carrosTotal);

let carroAtual = carrosTotal.filter(carro => carro['modelo'] === 'Corolla');
console.log("Lingando: ");
carroAtual[0].ligar();
console.log("CARRO ATUAL: ", carroAtual);