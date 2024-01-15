function receiveSubmit() {
    let selectedYValues = Array.from(document.querySelectorAll('.btn_group input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    let xValue = document.querySelector('#x_value').value;
    let rValueOption = document.querySelector('button[name="r_value"].selected');
    let rValue = rValueOption ? rValueOption.value : '';

    const date = new Date();
    const offset = date.getTimezoneOffset();

    if (validateValues(selectedYValues, xValue, rValue)) {
        selectedYValues.forEach(yValue => {
            $.ajax({
                type: 'GET',
                url: 'php/index.php',
                data: {
                    'x': parseInt(xValue.trim()),
                    'y': parseFloat(yValue.trim()),
                    'r': parseFloat(rValue.trim()),
                    'utc': offset
                },
                success: function (response) {
                    document.querySelector('#table > tbody').innerHTML = response;
                    console.log("Значение x: " + yValue + " успешно отправлено.");
                },
                error: function (data) {
                    alert("Произошла ошибка при отправке значения x: " + yValue);
                }
            });
        });
    }
}