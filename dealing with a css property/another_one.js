let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');

function ChangeAnimation() {
    item1.classList.add('visible');
    item2.classList.remove('visible');

    setTimeout(() => {
       item1.classList.add('exit-right')
       item2.classList.add('visible')
    }, 2000)

    setTimeout(() => {
        item2.classList.add('exit-right')
        item1.classList.remove('exit-right')
        setTimeout(() => {
            item2.classList.remove('exit-right')
            ChangeAnimation()
        }, 1000)
    }, 2500)
}

ChangeAnimation()