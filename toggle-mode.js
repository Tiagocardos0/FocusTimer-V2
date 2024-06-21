let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('dark')

    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget
        .queryselectior('span').textContent = `${mode} modo ativado!`

    darkMode = !darkMode
})