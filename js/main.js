'use strict';

$(document).ready(function () {
    assign_handler();
});


function assign_handler() {
    $('#pobierz').on('click', function () {
        var imie = $('#imie');
        var nazwisko = $('#nazwisko');
        var zawod = $('#zawod');
        var firma = $('#firma');

        // uzywajac samego get JSon
        $.getJSON('https://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108', function (resultJSON) {
            // wyswietl w konsoli
            console.log(resultJSON);
        });
        // funkcja jQuery
        $.ajax({
            url: "https://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108",
            dataType: 'json',
            success: function (resultJSON) {
                imie.text("Imię to: " + resultJSON.imie);
                nazwisko.text("Nazwisko to: " + resultJSON.nazwisko);
                zawod.text("Zawod to: " + resultJSON.zawod);
                firma.text("Firma to: " + resultJSON.firma);
            },
            onerror: function (msg) {
                console.log(msg);
            }
        });
    })
}
