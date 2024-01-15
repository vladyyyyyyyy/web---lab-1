function getTable() {
    $.ajax({
        type: "GET",
        url: "php/index.php",
        async: true,
        data: {'update': "0"},
        success: function(response) {
            document.querySelector('#table > tbody').innerHTML = response;
        },
        error: function(data) {
            alert(data);
        }
    });
}
