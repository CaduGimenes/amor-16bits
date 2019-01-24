$(document).ready(function () {

    $("#primeiroEvento").hide()
    $("#segundoEvento").hide()
    $("#terceiroEvento").hide()

    var typed = new Typed('#typed', {
        stringsElement: '#textoBoasVindas',
        typeSpeed: 30,
    }, setTimeout(function () {
        $("#textoBoasVindasFade").fadeOut(2000)
    }, 10000));

    setTimeout(function () {
        $("#textoBoasVindasFade").hide()
        $("#primeiroEvento").fadeIn(2000)
    }, 12000)

    setTimeout(function(){
        $("#primeiroEvento").fadeOut(2000)
    }, 19500)

    setTimeout(function(){
        $("#segundoEvento").fadeIn(2000)
    }, 21500)

    setTimeout(function(){
        $("#segundoEvento").fadeOut(2000)
    }, 29000)

    setTimeout(function(){
        $("#terceiroEvento").fadeIn(2000)
    }, 31000)


    var textoPrimeiroEvento = new Typed('#typedPrimeiroEvento', {
        stringsElement: '#textoPrimeiroEvento',
        typeSpeed: 30
    })

    var respostaDialogoCarlos1 = new Typed('#respostaDialogoCarlos1', {
        stringsElement: '#dialogoCarlos1',
        typeSpeed: 30
    })

    var respostaDialogoAnna1 = new Typed('#respostaDialogoAnna1', {
        stringsElement: '#dialogoAnna1',
        typeSpeed: 30
    })

    var textoTerceiroEvento = new Typed('#typedTerceiroEvento', {
        stringsElement: '#textoTerceiroEvento',
        typeSpeed: 30
    })


    var audio = document.getElementById("audio");

    // Reproduzir as músicas uma por uma
    var strings = "afraid-of-destiny,le-dernier-jour-de-lautomne,the-world-light,acceptance".split(",");
    var index = 1;

    audio.src = 'audios/' + strings[0] + '.mp3';
    audio.play();

    audio.onended = function () {
        if (index < strings.length) {
            audio.src = 'audios/' + strings[index] + '.mp3';
            audio.play();
            index++;
        }
    };

    audio.volume = 0.2;



})