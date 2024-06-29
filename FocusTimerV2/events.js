import { controls } from "./elements.js";
import * as actions from "./actions.js";

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.parentNode.parentNode.dataset.action

        if (action === undefined) {
            return
        }

        switch(action) {
            case 'toggle-running':
                actions.play()
                break;
            case 'toggle-pause':
                actions.pause()
                break;
            case 'toggle-more':
                actions.addTime()
                break;
            case 'toggle-anyless':
                actions.subTime()
                break;
        }
    })
}