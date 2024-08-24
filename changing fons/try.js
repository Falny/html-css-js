var foto = document.querySelectorAll('.foto');
var i = 0;
function changeFoto() {
    foto.forEach(f => f.classList.remove('visible'))

    foto[i].classList.add('visible')

    i = (i + 1) % foto.length;

    setTimeout(changeFoto, 4000)
}

changeFoto()