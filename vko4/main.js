$(document).ready(function () {
    // tähän koodi, joka ajetaan sivun lataamisen jälkeen.

    $("#title_div").html("<h1>Tervetuloa sääasemalle</h1>")

    $("#home").click(function (e) {

        var time = new Date();
        var aika = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        $("#data_div").html(aika);
    });

    $("#lämpötila").click(function (e) {
        $("#title_div").html("<h1>Lämpötila</h1>")
        var time = new Date();
        var aika = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        $("#data_div").html(aika);
    });

    $("#tuulennopeus").click(function (e) {
        $("#title_div").html("<h1>Tuulennopeus</h1>")
        var time = new Date();
        var aika = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        $("#data_div").html(aika);
    });


});
