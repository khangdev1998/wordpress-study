import $ from "jquery";

class MobileMenu {
  constructor() {
    this.mobileNavShowBtn = $(".mobile-nav-show"); 
    this.mobileNavHideBtn = $(".mobile-nav-hide");
    this.navDropdowns = $(".navbar .dropdown > a");
    this.btnMobileNavToggle = $(".mobile-nav-toggle");
    this.events();
  }

  events() {
    // Toggle mobile nav (using jQuery event handling)
    $(this.btnMobileNavToggle).on("click", (event) => {
      event.preventDefault();
      this.mobileNavToogle();
    });

    // Toggle mobile nav dropdowns
    this.navDropdowns.click((event) => {
      if ($(".mobile-nav-active").length) {
        event.preventDefault();
        this.navDropdownToggle($(event.target));
      }
    });
  }

  mobileNavToogle() {
    $("body").toggleClass("mobile-nav-active");
    this.mobileNavShowBtn.toggleClass("d-none");
    this.mobileNavHideBtn.toggleClass("d-none");
  }

  navDropdownToggle(el) {
    el.toggleClass("active");
    el.next().toggleClass("dropdown-active"); 
    el.find(".dropdown-indicator").toggleClass("bi-chevron-up bi-chevron-down");
  }
}

export default MobileMenu;
