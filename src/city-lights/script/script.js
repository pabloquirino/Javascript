let img = window.document.querySelector('#img')
let foto = ['img/city-no-light.jpg','img/city-light.jpg']
let indiceAtual = 0

function clicar() {
    indiceAtual = 1 - indiceAtual // alternar índice de 'foto1 entre 0 e 1
    img.src = foto[indiceAtual]
}