const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navigasi = document.getElementById('navigasi-bar');

if (bar) {
    bar.addEventListener('click', () => {
        navigasi.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        navigasi.classList.remove('active')
    })
}