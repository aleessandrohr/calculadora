var n1 = document.querySelector('input#n1')
var n2 = document.querySelector('input#n2')

function somar() {
    if (n1.value.length == 0 | n2.value.length == 0) {
        alert('Preencha todos os dados.')
    } else {
        var n1n = Number(n1.value)
        var n2n = Number(n2.value)
        var s = n1n + n2n
        alert(`O resultado é ${s}.`)
    }

}
function subtrair() {
    if (n1.value.length == 0 | n2.value.length == 0) {
        alert('Preencha todos os dados.')
    } else {
    var n1n = Number(n1.value)
    var n2n = Number(n2.value)
    var s = n1n - n2n
    alert(`O resultado é ${s}.`)
    }
}
function multiplicar() {
    if (n1.value.length == 0 | n2.value.length == 0) {
        alert('Preencha todos os dados.')
    } else {
    var n1n = Number(n1.value)
    var n2n = Number(n2.value)
    var s = n1n * n2n
    alert(`O resultado é ${s}.`)
    }
}
function dividir() {
    if (n1.value.length == 0 | n2.value.length == 0) {
        alert('Preencha todos os dados.')
    } else {
    var n1n = Number(n1.value)
    var n2n = Number(n2.value)
    var s = n1n / n2n
    alert(`O resultado é ${s}.`)
    }
}

function ver(){
    alert('Versão 1.2')
    alert('Melhoria de código e novo layout.')
    alert('Se quiser me ajuda a melhorar mais ainda o código e o layout :D')
}

