const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const STEP = 5
const timer = document.getElementById('timer')
let interval
let isPlaying = false

export function addTime() {
    minutes.innerText = Number(minutes.innerText) + STEP
} 

export function subTime() {
    let min = Number(minutes.innerText)
    if (min > 0) {
        minutes.innerText = min - STEP
    }
}

export function toStart() {
    if (!isPlaying) {
        let min = Number(minutes.innerText)
        let sec = Number(seconds.innerText)

        // Inicia apenas se não estiver zero
        if (min > 0 || sec > 0) {
            isPlaying = true
            timer.classList.add('playing')  // Adiciona a classe 'playing' quando iniciar
            interval = setInterval(() => {
                if (min === 0 && sec === 0) {
                    clearInterval(interval)
                    isPlaying = false
                    timer.classList.remove('playing') // Remove a classe 'playing' quando parar
                    return
                }

                if (sec === 0) {
                    min--
                    sec = 60
                }

                sec--

                minutes.innerText = min < 10 ? '0' + min : min
                seconds.innerText = sec < 10 ? '0' + sec : sec

            }, 1000) // intervalo de 1 segundo
        }
    }
}

export function pause() {
    clearInterval(interval)
    timer.classList.remove('playing')
    isPlaying = false
}