function checkInput() {
    let xValue = document.querySelector('#x_value');
    xValue.classList.remove('error');
    if (xValue.value.includes(',')) {
        xValue.value = xValue.value.replace(',', '.');
    }
    if (xValue.value.indexOf('.') === -1) {
        return;
    }
    if (xValue.value.length -
        xValue.value.indexOf('.') > 11) {
        xValue.value = xValue.value.slice(0, xValue.value.indexOf('.') + 11);
        xValue.classList.add('error');
    }

    localStorage.setItem('selectedX', xValue.value);
}

document.addEventListener('DOMContentLoaded', function () {
    const selectedX = localStorage.getItem('selectedX');
    if (selectedX) {
        const xValue = document.querySelector('#x_value');
        xValue.value = selectedX;
        checkInput();
    }
});