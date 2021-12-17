window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll >= 200){
        $('.slidetop').addClass('unhide')
    } else{
        $('.slidetop').removeClass('unhide')
    }
});

var $doc = $('html,body');
$(".scroll-page").click(function () {
    $doc.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 10);
    return false;
})