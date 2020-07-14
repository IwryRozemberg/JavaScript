const moment = require("moment")

// import moment from 'moment'
// import 'moment/locale/pt-br.js'

const hoje = Date.now();
const date = new Date();
const umDia = 1000 * 60 * 60 * 24;
const umAno = 1000 * 60 * 60 * 24 * 365;
const dtNascimento = new Date('1986-03-09T00:00:00Z')
const dtNascMateus = new Date(2014, 1, 17)
const idade = (hoje - dtNascimento) / umAno;
const diasVividos = (hoje - dtNascimento) / umDia;

console.log('Um dia: ', umDia, '\nUm ano:', umAno);
console.log("Hoje: ", hoje);
console.log("Hoje2: ", date);
console.log("Dia: ", date.getDate(), "Mês: 0-11 ", date.getMonth(), "Ano: ", date.getFullYear());
console.log("Dia da semana: 0-6", date.getDay());
console.log("Um dia: ", umDia);
console.log("Dt Nascimento: ", dtNascimento);
console.log("Idade: ", idade);
console.log("Dias vividos: ", diasVividos);
console.log("Dt Mateus: ", dtNascMateus);
console.log("Idade Mateus: ", ((hoje - dtNascMateus) / umAno));

//Verificar se é uma data
if (date instanceof Date && !isNaN(date)) {
    console.log(moment(date).format('LLL'), 'É uma data válida');
} else {
    console.log(date, 'Não é uma data válida');
}


// Utilizando biblioteca Moment
// https://momentjs.com
console.log("Biblioteca Moment");
console.log(moment.locale());
var march = moment('2017-03')
console.log(march.format('MMMM')) // 'March'

//Alterando para formato brasileiro
moment.locale("pt-br");
console.log(moment.locale()); //check

console.log(moment().format('L'));
const dtNiver = moment(dtNascMateus);
const today = moment();
console.log("Hoje: ", today.format('L'));
console.log('Aniversário: ', dtNiver.format("L"));
console.log('Idade: ', today.diff(dtNiver, 'years'));
console.log('Dias vividos: ', today.diff(dtNiver, 'days'));
console.log(march.format('MMMM')) // 'March', mesmo apos alterado, as variaveis com valores anteriores a alteração, permanecem