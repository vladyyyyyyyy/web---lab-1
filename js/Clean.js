function cleanInput() {
    let selectedElems = document.querySelectorAll('.selected');
    selectedElems.forEach(element => {
        element.classList.remove('selected');
    });
    selectedElems = document.querySelectorAll('.error')
    selectedElems.forEach(element => {
        element.classList.remove('error');
    });
    document.querySelector('.validation_info').classList.remove('show');
    document.querySelector('.validation_info').innerHTML = '';
    yValuesInput.value = '';
    document.querySelector('button[name="r_value"].selected').value = '';
    changeR(null);
}
function cleanTable() {
    let tBody = document.querySelector('#table > tbody');
    tBody.innerHTML = '';

    fetch('php/index.php?clear=true')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
}