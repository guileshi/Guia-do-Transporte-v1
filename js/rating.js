const stars = [...document.querySelector('#stars').children];


  function clickStar(starsIndex) {
    stars.map((item, index) => {
      if (index <= starsIndex) {
        item.classList.add('star__active');
        return;
      }

      item.classList.remove('star__active');
    });
  }