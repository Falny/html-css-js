const data = document.querySelector('.data')

let day = 0;
let hour = 23;
let minut = 59;
let sec = 59;

function Timer() {

    data.textContent = `${day}d ${hour}h ${minut}m ${sec}s`

    if (day===0 && hour===0 && minut===0 && sec===0) {
        clearInterval(timer);
    } else {
        if (sec == 0) {
            minut -= 1;
            sec=59;
        }
        if (minut == 0) {
            hour -= 1;
            minut=59;
        }
        if (hour == 0) {
            day -= 1;
            hour=59;
        }
    }
    sec -= 1;
        
    
}

var timer = setInterval(Timer, 1000);


