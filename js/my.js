var celular;
var tablet;
var pc;

$(window).load(function () {
    if (window.screen.width < 576.98) {
        celular = true;
        document.getElementById('logoImg').src = "img/logo-2-vermelho.png"
        console.log("Celular")
        $(".bg-baixeApp").removeClass('hide')
        // console.log("Tela menor que 580 pixels")
    } else if (window.screen.width > 767.98 && window.screen.width <= 1024) {
        tablet = true;
        document.getElementById('logoImg').src = "img/logo-2-vermelho.png"
        console.log("Tablet")
        // console.log("Tela maior que 700 pixels")
    } else if (window.screen.width > 1025) {
        pc = true;
        console.log("Computador")
        // console.log("Tela maior que 1000px")
    }

    if (celular == true || tablet == true) {
        $('#navbar').removeClass('topbar-hide')

        $('.btn-link-cadastrar').text("Cadastrar-se")
        
        $("#carousel-butons").addClass("hide")
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
    }
});

$('.mudanca_hide').hide(); /* Começa Escondido */
$('#mudanca').change(function(){
         
    if($(this).val() == "opt2"){
            $('.mudanca_hide').show(); /* Mostrar */
            $('#valorNota, #peso, #quantidade').attr('required', true);
    }else{
            $('.mudanca_hide').hide(); /* Esconder */
            $('#valorNota, #peso, #quantidade').removeAttr('required');
    }
});

$("#botao-entrar").mouseenter(function () {     
    $(".dropdown-menu").addClass("show");
});

$("#botao-entrar").mouseleave(function () {     
    $(".dropdown-menu").removeClass("show");
});


"use strict";
/*Inicializar nosso contador */
$('.contar').counterUp({
    time: 1000,
    delay: 20
});

(function ($) {
    /*Efeito de rolagem de tela para os links clicados */
    var $doc = $('html,body');
    $(".scroll-page").click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    })
})(jQuery);