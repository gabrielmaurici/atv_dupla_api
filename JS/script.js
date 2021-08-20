const host = 'http://192.168.0.172/api';
const endPoint = host + '/Jogo';

function cadastrar() {
    let jogo = document.getElementById('nome').value;
    let descricao = document.getElementById('descricao').value;
    let cadastroJogo = {'Nome': jogo, 'Descricao': descricao};
    let model = JSON.stringify(cadastroJogo);
    cadastrarBanco(model);
}

function cadastrarBanco(model) {
    let request = new XMLHttpRequest();

    request.open('POST', endPoint);
    request.setRequestHeader("Content-Type", "application/json; charset = UTF-8")
    request.send(model);
    request.onload = function(){
        console.log(request.status);
    }
}

function listarTodos() {
    let request = new XMLHttpRequest();

    request.open('GET', endPoint);
    request.send();
    request.onload = function() {
        let jogos = JSON.parse(this.responseText);
        console.log(jogos);
        let tabela = document.getElementById('table-jogos');
        let corpo = tabela.getElementsByTagName('tbody')[0];
        corpo.innerHTML = '';

        jogos.forEach(jogo => {
            corpo.innerHTML += 
            `   <tr>
                    <td scope="row">${jogo.id}</td>
                    <td>${jogo.nome}</td>
                    <td>${jogo.descricao}</td>
                </tr>
            `
        });
    }
}