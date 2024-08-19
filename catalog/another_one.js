let item = document.querySelector('.item');
let elements = document.querySelectorAll('.elements');


function OpenCloseStartPack() {
    elements.forEach((elem) => {
        if (elem.classList.contains('open')) {
            elem.classList.remove('open');
            item.classList.remove('turn');

        } else {
            elem.classList.add('open');
            item.classList.add('turn');

        }
    })
}

item.addEventListener('click', OpenCloseStartPack)