/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Global.js":
/*!*******************************!*\
  !*** ./src/modules/Global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
        disableOnInteraction: false
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
  /**
   * Initiate glightbox
   */
  glightbox = GLightbox({
    selector: ".glightbox"
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Global);

/***/ }),

/***/ "./src/modules/MobileMenu.js":
/*!***********************************!*\
  !*** ./src/modules/MobileMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class MobileMenu {
  constructor() {
    this.mobileNavShowBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mobile-nav-show");
    this.mobileNavHideBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mobile-nav-hide");
    this.navDropdowns = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".navbar .dropdown > a");
    this.btnMobileNavToggle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mobile-nav-toggle");
    this.events();
  }
  events() {
    // Toggle mobile nav (using jQuery event handling)
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.btnMobileNavToggle).on("click", event => {
      event.preventDefault();
      this.mobileNavToogle();
    });

    // Toggle mobile nav dropdowns
    this.navDropdowns.click(event => {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mobile-nav-active").length) {
        event.preventDefault();
        this.navDropdownToggle(jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target));
      }
    });
  }
  mobileNavToogle() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").toggleClass("mobile-nav-active");
    this.mobileNavShowBtn.toggleClass("d-none");
    this.mobileNavHideBtn.toggleClass("d-none");
  }
  navDropdownToggle(el) {
    el.toggleClass("active");
    el.next().toggleClass("dropdown-active");
    el.find(".dropdown-indicator").toggleClass("bi-chevron-up bi-chevron-down");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ "./src/modules/ScrollToTop.js":
/*!************************************!*\
  !*** ./src/modules/ScrollToTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class ScrollToTop {
  constructor() {
    this.scrollTopButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".scroll-top");

    // Setup event listeners
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("load scroll", this.toggleScrollTopButton.bind(this));
    this.scrollTopButton.on("click", this.scrollToTop);
  }
  toggleScrollTopButton() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > 100 ? this.scrollTopButton.addClass("active") : this.scrollTopButton.removeClass("active");
  }
  scrollToTop() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({
      scrollTop: 0
    }, "smooth");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTop);

/***/ }),

/***/ "./src/modules/SelectHeader.js":
/*!*************************************!*\
  !*** ./src/modules/SelectHeader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class SelectHeader {
  constructor() {
    this.selectHeader = document.querySelector("#header");
    if (this.selectHeader) {
      document.addEventListener("scroll", () => {
        window.scrollY > 100 ? this.selectHeader.classList.add("sticked") : this.selectHeader.classList.remove("sticked");
      });
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectHeader);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ScrollToTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ScrollToTop */ "./src/modules/ScrollToTop.js");
/* harmony import */ var _modules_SelectHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/SelectHeader */ "./src/modules/SelectHeader.js");
/* harmony import */ var _modules_Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Global */ "./src/modules/Global.js");
/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/MobileMenu */ "./src/modules/MobileMenu.js");





// Instantiate a new object using our modules/classes
const global = new _modules_Global__WEBPACK_IMPORTED_MODULE_2__["default"]();
const scrollToTop = new _modules_ScrollToTop__WEBPACK_IMPORTED_MODULE_0__["default"]();
const selectHeader = new _modules_SelectHeader__WEBPACK_IMPORTED_MODULE_1__["default"]();
const mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_3__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map