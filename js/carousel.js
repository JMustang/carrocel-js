(() => {
    'use strict'

    var btnPrev = document.querySelector('.carousel__btn--prev');
    var btnNext = document.querySelector('.carousel__btn--next');
    var carousel = document.querySelector('.carousel');

    btnPrev.style.display = 'block';
    btnNext.style.display = 'block';

    btnPrev.addEventListener('click', showPrev);
    btnNext.addEventListener('click', showNext);

    function showPrev() {
        alert('prev');
    }

    function showNext() {
        alert('Next');
    }

    carousel.style.overflowX = 'hidden';
})()