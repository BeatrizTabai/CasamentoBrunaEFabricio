var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true /* Para vir c/ primeir0 input marcad0*/

setInterval(() => {
    proximaImg() /*chama a função*/
}, 5000); /*Para determinar o tempo que vai passar as imagens 5segunds*/ 

function proximaImg(){  /*declara função*/
    cont ++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true /*para as bolinhas mudarem conforme o slide for passando*/
}

function copiar() {
    navigator.clipboard.writeText('bruna_amandae@hotmail.com').then(() => {
        alert("Chave PIX copiada com sucesso!")})
}

function copiartexto(texto) {
    navigator.clipboard.writeText(texto)
}