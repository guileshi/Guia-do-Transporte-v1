var celular;
var tablet;
var pc;

var addLanguageScript = function (name) {
    var head = document.getElementsByTagName("head")[0],
        script = document.createElement('script');

    script.type = 'text/javascript'
    script.src = "js/" + name + '.js'
    script.classList.add('intersection-observer')
    head.appendChild(script);
};

function init() {
    if (window.screen.width < 767) {

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
        $('.topbar__quotation__form').css("display", "none")


        if (window.screen.width <= 320) {


            addLanguageScript('intersection-observer-small-mobile');
        } else {

            addLanguageScript('intersection-observer-mobile');
        }

        celular = true;
    } else if (window.screen.width > 767.98 && window.screen.width <= 1024) {

        $('.topbar').addClass('mobile')
        $('.filter').addClass('mobile')
        $('.topbar').addClass('container-fluid')
        $('.topbar__divider').css("display", "none");
        $('.topbar').removeClass('container')
        $('#topbar__logo__mobile').css("display", "block");
        $('#topbar__logo__desktop').css("display", "none");
        $('.download-app').css("display", "block")
        $('.topbar__quotation__form').css("display", "none")


        addLanguageScript('intersection-observer-tablet');

        tablet = true;
    } else if (window.screen.width > 1025) {

        $('.topbar__divider').css("display", "block");
        $('.topbar').removeClass('mobile')
        $('.filter').removeClass('mobile')
        $('.topbar').removeClass('container-fluid')
        $('.topbar').addClass('container')
        $('#topbar__logo__mobile').css("display", "none");
        $('#topbar__logo__desktop').css("display", "block");
        $('.quotation__form__btn--icon').html("<i class='fas fa-search fa-lg'></i>")


        if ($('body').is('#transportadoras')) {
            return
        } else {

            addLanguageScript('intersection-observer');
        }


        pc = true;
    }
}

$(window).load(function () {
    init()
});


// Transição de tela de loading
$(window).on("load", function () {
    $(".loading__background").fadeOut("slow");
});
// ---

// Sidebar
$('.topbar_list--btn').click(function () {
    $('.sidebar').toggleClass('no__collapse')
    $('#filter--blue').css("display", "block")
})

$('#filter--blue,.sidebar__list__btn--close').click(function () {
    $('#filter--blue').css("display", "none")
    $('.sidebar').toggleClass('no__collapse')
})

$(document).on('keyup', function (e) {
    if (e.key == "Escape") {
        $('.sidebar').removeClass('no__collapse')
        $('#filter--blue').css("display", "none")
    }
});
//   ---

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
// ---

// Form
const inputOrigin = document.getElementById('origin')
const inputOriginTop = document.getElementById('origin-top')
const inputDestination = document.getElementById('destination')
const inputDestinationTop = document.getElementById('destination-top')

function getTextOrigin() {
    document.getElementById('origin').oninput = () => {
        inputOriginTop.value = inputOrigin.value
    }
}
function getTextOriginTop() {
    document.getElementById('origin-top').oninput = () => {
        inputOrigin.value = inputOriginTop.value
    }
}
function getTextDestination() {
    document.getElementById('destination').oninput = () => {
        inputDestinationTop.value = inputDestination.value
    }
}
function getTextDestinationTop() {
    document.getElementById('destination-top').oninput = () => {
        inputDestination.value = inputDestinationTop.value
    }
}

function onChangeText(e, classname) {
    if (e.value) {
        $(`.${classname}`).addClass('filled')
        $(`.${classname}`).removeClass('empty')
    } else {
        $(`.${classname}`).addClass('empty')
        $(`.${classname}`).removeClass('filled')
    }

    getTextOrigin();
    getTextOriginTop();
    getTextDestination();
    getTextDestinationTop();
}

function onFocus(classname) {
    $(`.${classname}`).addClass('focused')
    $(`.${classname}`).removeClass('blur')

    getTextOrigin();
    getTextOriginTop();
    getTextDestination();
    getTextDestinationTop();
}
function onBlur(classname) {
    $(`.${classname}`).removeClass('focused')
    $(`.${classname}`).addClass('blur')

    getTextOrigin();
    getTextOriginTop();
    getTextDestination();
    getTextDestinationTop();
}

// Botão de aceitar cookies
$('#cookie__btn--accept').click(function () {
    $(".cookie").css("display", "none")
})

// Botão de fechar os cookies
$('.cookie__close__btn').click(function () {
    $(".cookie").css("display", "none")
})

$(".showPassword__eye").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash")

    var input = $($(this).attr("myinput"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
