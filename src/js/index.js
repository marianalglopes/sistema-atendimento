import "./libs"

//Seleção dos elementos do DOM
const inputNome = document.querySelector('#input-nome');
const selectPrioridade = document.querySelector('#select-prioridade');
const btnIncluir = document.querySelector('#btn-incluir');
const ulLista = document.querySelector('#ul-lista');
const displayNome = document.querySelector('#display-nome');
const btnChamar = document.querySelector('#btn-chamar');

//Array para armazenar os nomes da lista de atendimento
const listaDeAtendimento = new Array();