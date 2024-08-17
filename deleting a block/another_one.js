let text = document.querySelectorAll('.text-element');
let element = document.querySelectorAll('.element');


element.forEach((el, i) => {
    el.addEventListener('click', () => {
    text[i].style.display = 'none';
    })
})
