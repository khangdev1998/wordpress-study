class Global {
  constructor() {
    // Count hero section
    new PureCounter();

    // Loader web
    this.preloader = document.querySelector("#preloader");
    window.addEventListener("load", () => {
      if (this.preloader) {
        this.preloader.remove();
      }
    });

    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    new Swiper(".slides-1", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  /**
   * Initiate glightbox
   */
  glightbox = GLightbox({
    selector: ".glightbox",
  });

}

export default Global;
