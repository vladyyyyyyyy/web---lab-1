const checkboxes = document.querySelectorAll('.btn_group input[type="checkbox"]');
const yValuesInput = document.querySelector('#y_value');

const savedYValues = localStorage.getItem('savedYValues');
if (savedYValues) {
    const yValuesArray = savedYValues.split(',');
    checkboxes.forEach(checkbox => {
        if (yValuesArray.includes(checkbox.value)) {
            checkbox.checked = true;
        }
    });
    yValuesArray.value = savedYValues;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateYValues);
});

function updateYValues() {
    const selectedValues = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    yValuesInput.value = selectedValues.join(',');
    localStorage.setItem('savedXValues', yValuesInput.value);
}