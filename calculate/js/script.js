const calc_display = document.querySelector('.calc-display');
const digit = document.querySelectorAll('.digit');
const result = document.querySelector('.item-expepress');
const operand_btn = document.querySelectorAll('.item-btn');

const ac_btn = document.querySelector('.reset__item_ac');
const del_btn = document.querySelector('.reset__item_del');

let current = '';
let prev = '';
let operand = '';
let hasOperand = false;

// Нажатие цифры
digit.forEach(item => {
    item.addEventListener('click', function() {
        if (!item.classList.contains('number-btn__item')) return;

        if (hasOperand) {
            current += item.textContent;
        } else {
            prev += item.textContent;
        }
        calc_display.value += item.textContent
    })
})

// перебор операндов
operand_btn.forEach(item => {
    item.addEventListener('click', function() {
        operand = item.textContent;
        calc_display.value += operand;
        hasOperand = true;
    })
})

// полная очистка поля
del_btn.onclick = function() {
    let current = '';
    let prev = '';
    let operand = '';
    calc_display.value = '';
}

// удаление одной цифры
ac_btn.addEventListener('click', function() {
    calc_display.value = calc_display.value.slice(0, -1);
    current = current.slice(0, -1);
    prev = prev.slice(0, -1);
})

// Нажатие равно
result.addEventListener('click', function(){ 
    if (current !== '' && prev !== '') {
        calculate(operand)
    }
})

// сам калькулятор
function calculate(res_val) {
    let res;

    const currentVal = parseFloat(current);
    const prevVal = parseFloat(prev);

    switch (res_val) {
        case '+':
            res = currentVal + prevVal;
            break;
        case '-':
            res = prevVal - currentVal;
            break;
        case '*':
            res = currentVal * prevVal;
            break;
        case '/':
            if (currentVal === 0) {
                calc_display.value = 'На ноль делить нельзя!';
                return;
            }
            res = prevVal / currentVal;
            break;
    }

    calc_display.value = res;
    current = '';
    prev = '';
    operand = '';
    hasOperand = false;
}
