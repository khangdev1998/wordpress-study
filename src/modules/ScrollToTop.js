import $ from "jquery";

class ScrollToTop {
  constructor() {
    this.scrollTopButton = $(".scroll-top");

    // Setup event listeners
    $(window).on("load scroll", this.toggleScrollTopButton.bind(this));
    this.scrollTopButton.on("click", this.scrollToTop);
  }

  toggleScrollTopButton() {
    $(window).scrollTop() > 100
      ? this.scrollTopButton.addClass("active")
      : this.scrollTopButton.removeClass("active");
  }

  scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  }
}

export default ScrollToTop;
