const stars = [...document.querySelector('#stars').children];

function getAverage(){
    const starsAvegare = 2; // Media avaliação
    starRating(starsAvegare - 1)
}

function starRating(star){

    return stars.map((item, index) => {
        if (index <= star) {
            item.classList.add('star__active');
            return;
        }
        
        item.classList.remove('star__active');
    });

}


$(window).load(() => {

    getAverage()

})