(function () {
  "use strict";

  //mostrar os botoes navegação e acrescentar listeners
  var $btnPrev = document.querySelector(".carousel__btn--prev");
  var $btnNext = document.querySelector(".carousel__btn--next");
  var $carousel = document.querySelector(".carousel");
  var $carouselInner = document.querySelector(".carousel__inner");
  var $carouselItens = document.querySelectorAll(".carousel__item");
  var bannerAtual = 0;
  var qdtBanners = $carouselItens.length;

  $btnPrev.style.display = "block";
  $btnNext.style.display = "block";

  //incluir overflow hidden no .carousel
  $carousel.style.overflowX = "hidden";

  $btnPrev.addEventListener("click", showPrev);
  $btnNext.addEventListener("click", showNext);

  function showPrev() {
    bannerAtual--;
    mostrarBanner(bannerAtual);
  }

  function showNext() {
    bannerAtual++;
    mostrarBanner(bannerAtual);
  }

  function setupNav(bannerAtual) {
    $btnPrev.disabled = !bannerAtual > 0;
    $btnNext.disabled = bannerAtual === qdtBanners - 1;
  }

  function mostrarBanner(bannerAtual) {
    setupNav(bannerAtual);

    var largura = getComputedStyle($carouselItens[0]).width;
    largura = parseInt(largura);

    var novaPosicao = largura * bannerAtual * -1;

    $carouselInner.style.transform = "translateX(" + novaPosicao + "px)";
  }
})();
