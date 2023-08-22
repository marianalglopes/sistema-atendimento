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

function incluir(){
//O 'push' coloca um nome dentro da lista. 'value' é uma propriedade
//Sempre que incluir, ele logo após chama o 'listar'
    listaDeAtendimento.push(inputNome.value);
    listar();
}

function listar(){
//Fica rodando, pegando o valor da posição e atribuindo na variável
    for(let nome of listaDeAtendimento){
        console.log(nome);
    }
}

//Eventos
//Quando houver o click no botão chama a função 'incluir'
btnIncluir.onclick = incluir