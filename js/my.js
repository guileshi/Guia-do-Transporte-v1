var celular = false;
var tablet = false;
var pc = false;

$(window).load("index.html", function () {
    if (window.screen.width < 576.98) {
        celular = true
        document.getElementById('logoImg').src = "img/logo-2-vermelho.png"
        // console.log("Tela menor que 580 pixels")
    } else if (window.screen.width > 767.98 && window.screen.width <= 1024) {
        tablet = true
        document.getElementById('logoImg').src = "img/logo-2-vermelho.png"
        // console.log("Tela maior que 700 pixels")
    } else if (window.screen.width > 1025) {
        pc = true
        // console.log("Tela maior que 1000px")
    }

    if (pc == false) {
        $('#navbar').removeClass('topbar-hide')
    }

    if (celular == true || tablet == true) {
        $('#menuNav').addClass('navbar-mobile')

        $('#para-empresa').removeClass('hide')
        $('#para-motorista').removeClass('hide')
        $('#para-cotacao').removeClass('hide')

        $('.btn-link-cadastrar').text("Cadastrar-se")
    }
    // console.log(`Celular = ${celular}, Tablet = ${tablet}, PC = ${pc}`)
});

$(window).scroll(function (e) {
    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop(); // Variavel para pegar o scroll

    if (pc == true) {
        if (scroll != 0) {
            $('#navbar').removeClass('topbar-hide')
            document.getElementById('logoImg').src = "img/logo-2-vermelho.png"
        }
        else {
            $('#navbar').addClass('topbar-hide')
            document.getElementById('logoImg').src = "img/logo-2.png"
        }

        if (scroll > 1299) {
            $('#para-empresa').removeClass('hide')
            $('#para-empresa').addClass('unHide')
        }

        if (scroll > 1600) {
            $('#para-motorista').removeClass('hide')
            $('#para-motorista').addClass('unHide')
        }

        if (scroll > 2000) {
            $('#para-cotacao').removeClass('hide')
            $('#para-cotacao').addClass('unHide')
        }
    }
    // console.log("Scroll: " + scroll)
});

$("body").on('click', '.confirm-password', function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#confirm-password");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});

$("body").on('click', '.password', function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#password");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});

$('.mystaff_hide').hide(); /* Começa Escondido */
$('#mystuff').change(function(){
         
    if($(this).val() == "opt2"){
            $('.mystaff_hide').show(); /* Mostrar */
            $('#valorNota, #peso, #quantidade').attr('required', true);
    }else{
            $('.mystaff_hide').hide(); /* Esconder */
            $('#valorNota, #peso, #quantidade').removeAttr('required');
    }
});

"use strict";
/*Inicializar nosso contador */
$('.contar').counterUp({
    time: 1000,
    delay: 10
});
