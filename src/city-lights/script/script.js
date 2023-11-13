let img = window.document.querySelector('#img')
let foto = ['img/city-no-light.jpg','img/city-light.jpg'] // array com src das imgs
let indiceAtual = 0 //começa com índice 0

function clicar() {
    indiceAtual = 1 - indiceAtual // alternar índice de 'foto1 entre 0 e 1
    img.src = foto[indiceAtual] 
}