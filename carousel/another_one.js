let btn_prev = document.getElementById('prev');
let btn_next = document.getElementById('next');

let images = document.querySelectorAll('.carousel-item')

let i = 0;

function ChangeImages(butt) {
    images[i].classList.remove('visible')

    if (butt == 'next') {
        i++;
        if (i >= images.length) {
            i = 0;
        }
    } else {
        i--;
        if (i < 0) {
            i = images.length - 1;
        }
    }

    images[i].classList.add('visible')
}

btn_prev.onclick = function() {ChangeImages('prev')}
btn_next.onclick = function() {ChangeImages('next')}