function verificar() {
    var hora = new Date()
    var agora = hora.getHours()
    if (hora >= 0 && hora < 12) {
        document.body.style.background = ('#f8d881')
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = ('d5ad8a')
    } else {
        document.body.style.background = ('#74909e')
    }
}
function somar() {
    var n1 = document.querySelector('input#n1')
    var n2 = document.querySelector('input#n2')
    var n1n = Number(n1.value)
    var n2n = Number(n2.value)
    var s = n1n + n2n
    alert(`${n1n} + ${n2n} = ${s}`)

}
function subtrair() {
    var n1 = document.querySelector('input#n1')
    var n2 = document.querySelector('input#n2')
    var n1n = Number(n1.value)
    var n2n = Number(n2.value)
    var s = n1n - n2n
    alert(`${n1n} - ${n2n} = ${s}`)
}
function multiplicar() {
    var n1 = document.querySelector('input#n1')
    var n2 = document.querySelector('input#n2')
    var n1n = Number(n1.value)
    var n2n = Number(n2.value)
    var s = n1n * n2n
    alert(`${n1n} * ${n2n} = ${s}`)
}
function dividir() {
    var n1 = document.querySelector('input#n1')
    var n2 = document.querySelector('input#n2')
    var n1n = Number(n1.value)
    var n2n = Number(n2.value)
    var s = n1n / n2n
    alert(`${n1n} / ${n2n} = ${s}`)
}
