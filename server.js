const http = require('http');
const porta = 8081;
const fs = require('fs'); //File System

http.createServer((requisicao, resposta) => {
    fs.readFile(__dirname + '/web/dom.html', (erro, conteudo) => {
        if (erro) {
            console.log(erro);
        } else {
            resposta.write(conteudo);
        }
        resposta.end();
    })
}).listen(porta);

console.log(`Servidor está em execução: http://localhost:${porta}`);