const boxes = document.querySelectorAll('.item');
const reset_btn = document.querySelector('.reset-btn');
const str = document.querySelector('.hide');

reset_btn.addEventListener('click', function() {
    boxes.forEach(cell => {
        cell.textContent = '';
    })
    game = 'X';
    str.style.display = 'none';
})

var win = [
    ['item-1', 'item-2', 'item-3'],
    ['item-4', 'item-5', 'item-6'],
    ['item-7', 'item-8', 'item-9'],
    ['item-1', 'item-4', 'item-7'],
    ['item-2', 'item-5', 'item-8'],
    ['item-3', 'item-6', 'item-9'],
    ['item-1', 'item-5', 'item-9'],
    ['item-3', 'item-5', 'item-7'],
]

function Winner(gamer) {
    str.textContent = `Выйграл ${gamer}`
    str.style.display = 'block';
}

function Game(gamer) {
    for (let i=0; i < win.length; i++) {
        let [a, b, c] = win[i];

        const cell1 = document.querySelector(`.${a}`)
        const cell2 = document.querySelector(`.${b}`)
        const cell3 = document.querySelector(`.${c}`)

        if (cell1.textContent === gamer && cell2.textContent === gamer && cell3.textContent === gamer){
            Winner(gamer);
            return true;
        }
    }
    return false
}

function noSides() {
    if ([...boxes].every(cell => cell.textContent)){
        str.textContent = 'Ты пидарас!';
        str.style.display = 'block';
    }
}

let game = 'X';

boxes.forEach(cell => {
    cell.addEventListener('click', function(){
        
        if (cell.textContent.length === 0){
            cell.textContent = game;
            cell.classList.add('icons');
            
            if (Game(game)) {
                return;
            }
            
            noSides();

            if (game === 'X') {
                game = 'O';
            } else {    
                game = 'X';
            }
        }
    })
})
