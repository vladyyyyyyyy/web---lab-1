
function changeR(currentButton) {
    let rValue = currentButton.value;
    let rField = { value: rValue };

    if (rField.value === '') {
        document.querySelectorAll('#r').forEach(element => {
            element.innerHTML = 'R';
        });

        document.querySelectorAll('#-r').forEach(element => {
            element.innerHTML = '-R';
        });

        document.querySelectorAll('#r2').forEach(element => {
            element.innerHTML = 'R/2';
        });

        document.querySelectorAll('#-r2').forEach(element => {
            element.innerHTML = '-R/2';
        });
    } else {
        let rFloat = parseFloat(rField.value);

        document.querySelectorAll('#r').forEach(element => {
            element.innerHTML = rFloat.toString();
        });

        document.querySelectorAll('#-r').forEach(element => {
            element.innerHTML = (-rFloat).toString();
        });

        document.querySelectorAll('#r2').forEach(element => {
            element.innerHTML = (rFloat / 2).toString();
        });

        document.querySelectorAll('#-r2').forEach(element => {
            element.innerHTML = (-rFloat / 2).toString();
        });

        localStorage.setItem('selectedR', rField.value);

        document.querySelectorAll('#r_value button:not([value="' + rField.value + '"])').forEach(element => {
            element.classList.remove('selected');
        });

        currentButton.classList.add('selected');
    }
}

function deselectOthers(currentCheckbox) {
    let checkboxes = document.querySelectorAll('button[name="r_value"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox !== currentCheckbox) {
            checkbox.classList.remove('selected');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const selectedR = localStorage.getItem('selectedR');

    if (selectedR) {
        document.querySelector(`input[name="r_value"][value="${selectedR}"]`).checked = true;
        changeR();
    }
});