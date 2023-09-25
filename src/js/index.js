import "./libs"
//Anotação: Hoisting só funciona com 'var' e declaração de função
//Seleção dos elementos do DOM

const inputNome = document.querySelector('#input-nome');
const selectPrioridade = document.querySelector('#select-prioridade');
const btnIncluir = document.querySelector('#btn-incluir');
const ulLista = document.querySelector('#ul-lista');
const displayNome = document.querySelector('#display-nome');
const btnChamar = document.querySelector('#btn-chamar');

//Array para armazenar os nomes da lista de atendimento
const listaDeAtendimento = new Array();

function incluir() {
    //O 'push' coloca um nome dentro da lista. 'value' é uma propriedade
    //Sempre que incluir, ele logo após chama o 'listar'
    listaDeAtendimento.push(inputNome.value);
    listar();
}

//Fica rodando, pegando o valor da posição e atribuindo na variável
function listar() {
    ulLista.innerHTML = '';
    for (let pessoa of listaDeAtendimento) {
        let li = document.createElement('li')
        li.classList.add('list-group-item')
        li.textContent = pessoa.nome
        ulLista.appendChild(li)
    }
}

//Eventos
//Quando houver o click no botão chama a função 'incluir'

btnIncluir.onclick = function () {
    let pessoa = {
        nome: inputNome.value,
        prioridade: selectPrioridade.value === 'P' ? true : false //A '?' é um operador ternário que permite expressões condicionais de forma concisa
    }
    if (selectPrioridade.value === 'P') {
        pessoa.prioridade = true
    }

    if (pessoa.prioridade) {
        listaDeAtendimento.unshift(pessoa)
    } else {
        listaDeAtendimento.push(pessoa)
    }

    listaDeAtendimento.push(inputNome.value)
    listar()
}