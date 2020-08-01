var roda = window.document.getElementById('rodape')//footer => rodape
var logo = window.document.getElementById('logo')//header => logo
var menu = window.document.getElementById('menu')//header => menu
var titu = window.document.getElementById('titulo')//section => titulo
var cont = window.document.getElementById('conteudo')//section => conteudo
var resp = window.document.getElementById('resposta')//section => resposta
//logo
logo.innerHTML = `<img src="./img/calculadora.png" width="70">`
//menu
menu.innerHTML = `<a href="#" class="menu">Home</a>`
menu.innerHTML += `<a href="#" class="menu">Juros compostos</a>`
//rodape
roda.innerHTML = `&copy Hebert de Carvalho`
//titulo
titu.innerHTML = `<h1>Calculadora</h1>`

