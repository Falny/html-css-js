const stopwatch = document.querySelector('.watch');
const stop_btn = document.querySelector('.stop_btn');
const cont_btn = document.querySelector('.cont_btn');
const reset_btn = document.querySelector('.reset_btn');

let hour = 0;
let minut = 0;
let sec = 0;

function stopWatch() {
    
    sec+=1

    if (sec === 59) {
        minut += 1;
        sec = 0;
    } else if (minut === 59) {
        hour += 1;
        minut = 0;
    } else if (hour === 59 && minut === 59 && sec === 59) {
        clearInterval(timer);
    }

    stopwatch.textContent = `${formatZero(hour)}:${formatZero(minut)}:${formatZero(sec)}`
}

function formatZero(time) {
    // if (time < 10) {
    //     `0${time}`
    // } else {
    //     time
    // }
    return time < 10 ? `0${time}` : time;
}

function stopBtn() {
    reset_btn.addEventListener('click', function() {
        stopwatch.textContent = `${formatZero(0)}:${formatZero(0)}:${formatZero(0)}`;
        clearInterval(timer);
        hour = 0;
        minut = 0;
        sec = 0;
        setTimeout(function() {
            timer = setInterval(stopWatch, 1000)
        }, 200);
    })

    stop_btn.addEventListener('click', function() {
        // stopwatch.textContent = `${formatZero(hour)}:${formatZero(minut)}:${formatZero(sec)}`
        clearInterval(timer);
    })

    cont_btn.addEventListener('click', function() {
        timer = setInterval(stopWatch, 1000);
    })

}
stopBtn()
var timer = setInterval(stopWatch, 1000);
