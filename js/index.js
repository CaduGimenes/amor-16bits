$(document).ready(function () {

    $("#primeiroEvento").hide()
    $("#segundoEvento").hide()
    $("#terceiroEvento").hide()
    $("#quartoEvento").hide()
    $('#quintoEvento').hide()
    $('#sextoEvento').hide()

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

    setTimeout(function () {
        $("#primeiroEvento").fadeOut(2000)
    }, 19500)

    setTimeout(function () {
        $("#segundoEvento").fadeIn(2000)
    }, 21500)

    setTimeout(function () {
        $("#segundoEvento").fadeOut(2000)
    }, 31000)

    setTimeout(function () {
        $("#terceiroEvento").fadeIn(2000)
    }, 33000)

    setTimeout(function () {
        $("#terceiroEvento").fadeOut(2000)
    }, 45000)

    setTimeout(function () {
        $("#quartoEvento").fadeIn(2000)
    }, 47000)

    setTimeout(function () {
        $("#quartoEvento").fadeOut(2000)
    }, 66000)

    setTimeout(function () {
        $("#quintoEvento").fadeIn(2000)
    }, 68000)

    setTimeout(function () {
        $("#quintoEvento").fadeOut(2000)
    }, 78000)

    setTimeout(function () {
        $("#sextoEvento").fadeOut(2000)
    }, 80000)

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

    var textoQuartoEvento = new Typed('#typedQuartoEvento', {
        stringsElement: '#textoQuartoEvento',
        typeSpeed: 30
    })

    var respostaDialogoCarlos2 = new Typed('#respostaDialogoCarlos2', {
        stringsElement: '#dialogoCarlos2',
        typeSpeed: 30
    })

    var respostaDialogoAnna2 = new Typed('#respostaDialogoAnna2', {
        stringsElement: '#dialogoAnna2',
        typeSpeed: 30
    })


    var audio = document.getElementById("audio");

    // Reproduzir as músicas uma por uma
    var strings = "acceptance,le-dernier-jour-de-lautomne,afraid-of-destiny,the-world-light".split(",");
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