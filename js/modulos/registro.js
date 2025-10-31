const menuCheckbox = document.getElementById('menu');
const body = document.querySelector('body');

menuCheckbox.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('menu-open');
    } else {
        body.classList.remove('menu-open');
    }
});