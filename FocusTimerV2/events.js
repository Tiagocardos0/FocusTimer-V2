import { buttonState, controls } from "./elements.js";
import * as actions from "./actions.js";
import * as sounds from "./sounds.js";

let currentAudio = null;

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.parentNode.parentNode.dataset.action;

        if (!action) {
            return;
        }

        switch (action) {
            case 'toggle-running':
                actions.toStart();
                break;
            case 'toggle-pause':
                actions.pause();
                break;
            case 'toggle-more':
                actions.addTime();
                break;
            case 'toggle-anyless':
                actions.subTime();
                break;
        }
    });
}

export function btnControls() {
    buttonState.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) return;

        const action = button.dataset.action;

        switch (action) {
            case 'sound-tree':
                handleSoundPlay(sounds.SoundForest)
                break;
            case 'sound-cloud':
                handleSoundPlay(sounds.SoundRain)
                break;
            case 'sound-store':
                handleSoundPlay(sounds.SoundCoffeeShop)
                break;
            case 'sound-fire':
                handleSoundPlay(sounds.SoundFireplace)
                break;
        }
    });
}

//Função que pausa o audio e volta ao inicio
function handleSoundPlay(audio) {
    if(currentAudio && !currentAudio.paused) {
        currentAudio.pause()
        currentAudio.currentTime = 0; // Reinicia o áudio
    }

    currentAudio = audio;
    currentAudio.play();
}