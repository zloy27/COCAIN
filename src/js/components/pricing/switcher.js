export function useSwitcher() {
    let switcherButton = document.querySelector('.price__switch--switcher');
    var switcherCircle = document.querySelector('.price__switch--switcher-circle');
    switcherButton.addEventListener('click', () => {
        if (switcherCircle.classList.contains("active__circle")) {
            switcherCircle.style.left = '2px';
            switcherCircle.style.backgroundColor = '#828282';
            switcherCircle.classList.remove('active__circle')
        } else{
            switcherCircle.style.left = '22px';
            switcherCircle.style.backgroundColor = 'var(--primary-color-30)';
            switcherCircle.classList.add('active__circle')
        }
    })
}