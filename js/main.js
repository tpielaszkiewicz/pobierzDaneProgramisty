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
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (resultJSON) {
            // wyswietl w konsoli
            console.log(resultJSON);
        });
        // funkcja jQuery
        $.ajax({
            url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
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
