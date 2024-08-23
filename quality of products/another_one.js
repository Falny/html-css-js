var btn_prev = document.getElementById('prev');
var btn_next = document.getElementById('next');

var digit = document.querySelector('.count input')

function ChangeDigit(butt) {
    var dig = parseInt(digit.value)
    if (isNaN(dig)) {
        dig = 0;
    }

    if (butt == 'next') {
        dig+=1;
        btn_next.classList.add('color');
        setTimeout(() => btn_next.classList.remove('color'), 300)
    } else {
        dig-=1;
        if(dig < 0) {
            dig=0;
        }
        btn_prev.classList.add('color');
        setTimeout(() => btn_prev.classList.remove('color'), 300)
    }

    digit.value = dig;
}

btn_next.onclick = function() {ChangeDigit('next')}
btn_prev.onclick = function() {ChangeDigit('prev')}
