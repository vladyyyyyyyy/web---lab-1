function validateValues(x, y, r) {

    let validationInfoBox = document.querySelector('.validation_info');
    validationInfoBox.innerHTML = '';
    validationInfoBox.classList.remove("show");

    let validationInfo = '';
    let xValidationSuccess = false;
    let yValidationSuccess = false;
    let rValidationSuccess = false;
    let validationSuccess;

    if (x === undefined || x === '') {
        validationInfo += "<span>Отсутствует значение Y!</span>";
    } else {
        xValidationSuccess = true;
    }

    if (!(y.trim() === '')) {
        let parsedY = Number(y);
        if (!isNaN(parsedY)) {
            if ((parsedY > -3) && (parsedY < 3)) {
                yValidationSuccess = true;
            } else validationInfo += '<span>Значение X - (-3..3)!</span>';
        } else {
            validationInfo += '<span>Значение X - число!</span>';
        }
    } else validationInfo += '<span>Отсутствует значение X!</span>';

    if (!yValidationSuccess) {
        document.querySelector('#y_value').classList.add('error')
    }

    if (r === null || r === '') {
        validationInfo += '<span>Отсутствует значение R!</span>';
    } else {
        rValidationSuccess = true;
    }

    validationSuccess = xValidationSuccess && yValidationSuccess && rValidationSuccess;

    if (!validationSuccess) {
        document.querySelector('.validation_info').innerHTML = '<br>' + validationInfo + '<br>';
        validationInfoBox.classList.add('show');
    }

    return validationSuccess;
}