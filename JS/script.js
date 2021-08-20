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
                    <td>
                        <a href="./editar.html?id=${jogo.id}">Editar</a>
                        <a href="" onclick="deletar(${jogo.id})">Deletar</a>
                    </td>
                </tr>
            `
        });
    }
}

//Não funcional
function editar() {
    let id = document.getElementById('id').value;
    let jogo = document.getElementById('nome').value;
    let descricao = document.getElementById('descricao').value;
    let cadastroJogo = {'Id': id, 'Nome': jogo, 'Descricao': descricao};
    let model = JSON.stringify(cadastroJogo);
    updateBanco(model);
}
//Não funcional
function updateBanco(model) {
    let request = new XMLHttpRequest();
    request.open('PUT', endpoint+'/'+model.id);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(model));
    request.onload = function(){
        console.log(request.status);
    }
}