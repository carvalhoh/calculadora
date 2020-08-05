let n1 = window.document.getElementById('fn1')
let n2 = window.document.getElementById('fn2')
let resp = window.document.querySelector('div#resposta')
var tots, totr, totm, totd = 0
function n1Vazio(n1){
    if(n1.length == 0){
        return true
    } else {
        return false
    }
}
function n2Vazio(n2){
    if(n2.length == 0){
        return true
    } else {
        return false
    }
}


function somar() {
    if (n1Vazio(n1.value) == true || n2Vazio(n2.value) == true){
        window.alert(`falta digitar um valor.`)
    } else {
    tots = Number(n1.value) + Number(n2.value)
    resp.innerHTML = `O valor da soma entre ${n1.value} e ${n2.value} é ${tots}`
    }
}

function subtrair() {
    if (n1Vazio(n1.value) == true || n2Vazio(n2.value) == true){
        window.alert(`falta digitar um valor.`)
    } else {
    totr = Number(n1.value) - Number(n2.value)
    resp.innerHTML = `O valor da subtração entre ${n1.value} e ${n2.value} é ${totr}`
    }
}

function multiplicar() {
    if (n1Vazio(n1.value) == true || n2Vazio(n2.value) == true){
        window.alert(`falta digitar um valor.`)
    } else {
    totm = Number(n1.value) * Number(n2.value)
    resp.innerHTML = `O valor da multiplicação entre ${n1.value} e ${n2.value} é ${totm}`
    }
}

function dividir() {
    if (n1Vazio(n1.value) == true || n2Vazio(n2.value) == true){
        window.alert(`falta digitar um valor.`)
    } else {
    totd = Number(n1.value) / Number(n2.value)
    resp.innerHTML = `O valor da divisão entre ${n1.value} e ${n2.value} é ${totd}`
    }
}

function todos() {
    if (n1Vazio(n1.value) == true || n2Vazio(n2.value) == true){
        window.alert(`falta digitar um valor.`)
    } else {
        somar()
        subtrair()
        multiplicar()
        dividir()
        resp.innerHTML = `O valor de todas as operações entre ${n1.value} e ${n2.value} é:`
        resp.innerHTML += `<br>O valor da soma é ${tots}.`
        resp.innerHTML += `<br>O valor da subtração é ${totr}.`
        resp.innerHTML += `<br>O valor da multiplicação é ${totm}.`
        resp.innerHTML += `<br>O valor da divisão é ${totd}.`
    }
}