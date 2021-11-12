var celular;
var tablet;
var pc;

$(window).load(function () {
    if (window.screen.width < 576.98) {

        $('.topbar').addClass('mobile')
        $('.filter').addClass('mobile')
        $('.topbar').addClass('container-fluid')
        $('.topbar').removeClass('container')
        $('#topbar__logo__mobile').css("display", "block");
        $('#topbar__logo__desktop').css("display", "none");
        $('.download-app').css("display", "block")
        $('.explanation__subtitle').text("Procure a transportadora pela rota e faça cotação online sem precisar se cadastrar.")
        $('.quotation__form__btn--icon').html("<i class='fas fa-search fa-lg'></i>" + " <span>PESQUISAR</span>")
        $('.rotes').addClass('mobile')

        if($('#sidebar').hasClass('mobile')){
            $('.sidebar').css("right", "initial")
        }

        addLanguageScript = function(name) {
            var head = document.getElementsByTagName("head")[0],
                script = document.createElement('script');
        
            script.type = 'text/javascript'
            script.src = "js/" + name + '.js'
            head.appendChild(script);
        };
        addLanguageScript('intersection-observer-mobile');

        celular = true;
        console.log("Celular")
    } else if (window.screen.width > 767.98 && window.screen.width <= 1024) {
        
        $('.topbar').addClass('mobile')
        $('.filter').addClass('mobile')
        $('.topbar').addClass('container-fluid')
        $('.topbar').removeClass('container')
        $('#topbar__logo__mobile').css("display", "block");
        $('#topbar__logo__desktop').css("display", "none");
        $('.download-app').css("display", "block")

        if($('#sidebar').hasClass('mobile')){
            $('.sidebar').css("right", "initial")
        }

        addLanguageScript = function(name) {
            var head = document.getElementsByTagName("head")[0],
                script = document.createElement('script');
        
            script.type = 'text/javascript'
            script.src = "js/" + name + '.js'
            head.appendChild(script);
        };
        addLanguageScript('intersection-observer-tablet');

        tablet = true;
        console.log("Tablet")
    } else if (window.screen.width > 1025) {

        $('.topbar__divider').css("display", "block");
        pc = true;
        console.log("Computador")
        addLanguageScript = function(name) {
            var head = document.getElementsByTagName("head")[0],
                script = document.createElement('script');
        
            script.type = 'text/javascript'
            script.src = "js/" + name + '.js'
            head.appendChild(script);
        };
        addLanguageScript('intersection-observer');
    }

});

$('.topbar_list--btn').click(function(){
    $('.sidebar').toggleClass('no__collapse')
    $('#filter--blue').css("display", "block")
})
$('#filter--blue').click(function(){
    $(this).css("display", "none")
    $('.sidebar').toggleClass('no__collapse')
})

// Iniciar contador de numeros
"use strict";
$('.contar').counterUp({
    time: 1000,
    delay: 20
});

// Efeito de rolagem
(function ($) {
    var $doc = $('html,body');
    $(".scroll-page").click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    })
})(jQuery);

function onChangeText(e, classname) {
    if(e.value){
        $(`.${classname}`).addClass('filled')
        $(`.${classname}`).removeClass('empty')
    } else{
        $(`.${classname}`).addClass('empty')
        $(`.${classname}`).removeClass('filled')
    }
}

function onFocus(classname) {
    $(`.${classname}`).addClass('focused')
    $(`.${classname}`).removeClass('blur')
}
function onBlur(classname) {
    $(`.${classname}`).removeClass('focused')
    $(`.${classname}`).addClass('blur')
}