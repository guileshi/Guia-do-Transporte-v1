const rating = [...document.querySelector('#rating').children];

const stars = [...document.querySelector('#stars').children];

var starsAvegare;

function getAverage(){
    starRating(starsAvegare - 1);
}

function starRating(star){

    return rating.map((item, index) => {
        if (index <= star) {
            item.classList.add('star__active');
            return;
        }
        
        item.classList.remove('star__active');
    });

}

function clickStar(star){

    stars.map((item, index) => {
        if (index <= star) {
            item.classList.add('star__active');
            return;
        }
        
        item.classList.remove('star__active');
    });

    starsAvegare = star + 1 
}


$(window).load(() => {

    getAverage()

})