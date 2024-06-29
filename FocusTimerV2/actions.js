
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const STEP = 5
const timer = document.getElementById('timer')
let interval
export function addTime() {
    minutes.innerHTML = Number(minutes.innerHTML) + STEP
} 

export function subTime() {
    let min = Number(minutes.innerText)

    if(min > 0 ) {
        minutes.innerHTML = min - STEP
    }

}

export function play() {
    let min = Number(minutes.innerText)
    let sec = Number(seconds.innerText)
    timer.classList.add('playing')

    if(min && sec == 0 && timer.classList.contains('playing')) {
        interval = setInterval(() => {
            if(min <= 0 && sec <= 0) {
                
                return
            }

            if(sec == 0) {
                min --
                sec = 60
            }
    
            sec --
    
            minutes.innerHTML = min < 10 ? '0' + min : min
            seconds.innerHTML = sec < 10 ? '0' + sec : sec
            
            
    
        }, 10)
    }

}

export function pause() {
    let min = Number(minutes.innerText)
    let sec = Number(seconds.innerText)
    timer.classList.remove('playing')

    minutes.innerHTML = min < 10 ? '0' + min : min
    seconds.innerHTML = sec < 10 ? '0' + sec : sec


    setTimeout(()=>clearInterval(interval), 0);
}
