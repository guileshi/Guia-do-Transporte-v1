var app = document.querySelector(".app")

var terms = document.querySelector('#termOfServices')
var privacy = document.querySelector('#privacy__title')
var publicy = document.querySelector('#publicy__title')
var conditions = document.querySelector('#conditions__title')

var options = {
    root: null, // Tamanho da viewport comum

    threshold: 0.6, // Quantidade em porcetagem que o nosso objeto tem que estar visivel na pagina. sendo 0, 0% e 1, 100%. Ou seja, se o threshold for 1, o objeto TODO deverá estar sendo visto ao pela viewport. Se for 0, se qualquer parte do objeto estiver sendo observada, o valor será true

    rootMargin: "0px" // Setando o tamnho da viewport em si, ao adicionarmos margins ela é somada a seção. Por exemplo se tiverrmos a nossa box com o nosso conteudo de tamanho x, se adicionar uma margin negativa, algo como -150px, a viewport encolhera em -150px, o mesmo ocorre com margens positivas. Independe se o valor for 0, tem que colocar px. Para ter uma visão clara do que exatamente é isso, pensa em uma camera, faz um quadrado com os dedos, fingindo ser uma camera, o tamanho dessa camera é o tamanho dessa margem.
};

var termOptions = {
    root: null,

    threshold: 0.1,

    rootMargin: "-180px"
}

var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target === app) {
            $('.app__image--cell img').animate({
                top: "-10",
                bottom: "0",
                opacity: "1"
            }, 650, function () {
                $(this).animate({
                    top: "0"
                }, 200, function () {
                    $(this).animate({
                        left: "-5",
                        right: "initial",
                        margin: "auto 0"
                    }, 650, function () {
                        $(this).animate({
                            left: "0"
                        }, 200, function () {
                            $('.app__group').animate({
                                opacity: 1
                            }, 600)
                        })
                    })
                })
            });
            observer.unobserve(entry.target);
        } else if (!entry.isIntersecting) {
            return;
        }
    })
}, options);

var observerTerms = new IntersectionObserver(function (entries, observer){
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target === terms){
            $('.termOfServices__links__item').removeClass('active')
            $('#terms').addClass('active')
        } 

        if (entry.isIntersecting && entry.target === privacy){
            $('.termOfServices__links__item').removeClass('active')
            $('#privacy').addClass('active')
        } 

        if (entry.isIntersecting && entry.target === publicy){
            $('.termOfServices__links__item').removeClass('active')
            $('#publicy').addClass('active')
        } 

        if (entry.isIntersecting && entry.target === conditions){
            $('.termOfServices__links__item').removeClass('active')
            $('#conditions').addClass('active')
        } 
    })
}, termOptions)

if(app){
    observer.observe(app)
}

if([terms, publicy, privacy, conditions]){
    observerTerms.observe(terms)
    observerTerms.observe(publicy)
    observerTerms.observe(privacy)
    observerTerms.observe(conditions)
}