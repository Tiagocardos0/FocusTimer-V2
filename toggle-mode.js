let darkMode = localStorage.getItem('mode') === 'dark';
const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark', darkMode);

    if (darkMode) {
        localStorage.setItem('mode', 'dark');
        buttonToggle.querySelector('span').textContent = 'Modo ativado';
    } else {
        localStorage.removeItem('mode');
        buttonToggle.querySelector('span').textContent = 'Modo desativado';
    }
});

if (darkMode) {
    document.documentElement.classList.add('dark');
    buttonToggle.querySelector('span').textContent = 'Modo ativado';
} else {
    buttonToggle.querySelector('span').textContent = 'Modo desativado';
}