/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((module) => {

eval("const accordion = (triggersSelector) => {\r\n    const btns = document.querySelectorAll(triggersSelector);\r\n\r\n\r\n\r\n    btns.forEach(btn => {\r\n        btn.addEventListener('click', function() {\r\n            if(!this.classList.contains('accordion__item')){\r\n                return;\r\n            }\r\n\r\n            if(this.classList.contains('accordion__item')){\r\n\r\n                if(this.classList.contains('accordion__item_show')){ //yes\r\n                    this.classList.remove('accordion__item_show');\r\n                    this.classList.remove('animated', 'fadeIn');\r\n\r\n                } else {\r\n                    this.classList.add('animated', 'fadeIn');\r\n                    this.classList.add('accordion__item_show');\r\n\r\n                }\r\n\r\n                \r\n                // this.classList.add('animated', 'fadeInDown');\r\n\r\n                // this.classList.add('accordion__item_show');\r\n\r\n            }\r\n\r\n            // this.classList.toggle('accordion__item_show');\r\n\r\n        });\r\n});\r\n};\r\n\r\nmodule.exports = accordion;\n\n//# sourceURL=webpack://webpack-demo/./src/js/modules/accordion.js?");

/***/ }),

/***/ "./src/js/modules/moreCards.js":
/*!*************************************!*\
  !*** ./src/js/modules/moreCards.js ***!
  \*************************************/
/***/ ((module) => {

eval("\r\n\r\n\r\n\r\nconst moreCards = (select, wrap) => {\r\n\r\n    \r\n    const getResource = async (url) => {\r\n        let res = await fetch(url);\r\n\r\n        if (!res.ok) {\r\n            throw new Error(`fetch ${url}, status: ${res.status}`);\r\n        }\r\n\r\n        return await res.json();\r\n    };\r\n\r\n\r\n\r\n    \r\n\r\n    const btn = document.querySelector(select);\r\n\r\n    btn.addEventListener('click', function() {\r\n        getResource('http://localhost:3000/card')\r\n            .then(res => createCard(res.card))\r\n            .catch(error =>console.log(error));\r\n\r\n        this.remove();  \r\n    });\r\n\r\n\r\n\r\n    function createCard(response) {\r\n        response.forEach(({src, prise, text, title})  => {\r\n            let card = document.createElement('div');\r\n\r\n\r\n            card.classList.add('animated', 'fadeInUp','product__row__item');\r\n\r\n            card.innerHTML = `\r\n                <img src=${src} alt=\"product\">\r\n                <div class=\"product__item__title\">\r\n                    <h3${title}</h3>\r\n                </div>\r\n                <div class=\"product__item__text\">\r\n                    ${text}\r\n                </div>\r\n                <div class=\"new__item__prise\">\r\n                    ${prise}\r\n                </div>\r\n            \r\n\r\n\r\n            \r\n            `;\r\n\r\n            document.querySelector(wrap).apeendChild(card);\r\n        });\r\n\r\n\r\n    }\r\n\r\n};\r\n\r\n\r\nmodule.exports = moreCards;\n\n//# sourceURL=webpack://webpack-demo/./src/js/modules/moreCards.js?");

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ ((module) => {

eval("const scrolling = (upSelector) => {\r\n    const upElem = document.querySelector(upSelector);\r\n\r\n    window.addEventListener('scroll', () => {\r\n        if (document.documentElement.scrollTop > 500) {\r\n            upElem.classList.add('animated', 'fadeIn');\r\n            upElem.classList.remove('fadeOut');\r\n        } else {\r\n            upElem.classList.add('fadeOut');\r\n            upElem.classList.remove('fadeIn');\r\n        }\r\n    });\r\n\r\n    // Scrolling with raf\r\n\r\n    let links = document.querySelectorAll('[href^=\"#\"]'),\r\n        speed = 0.35;\r\n    \r\n    links.forEach(link => {\r\n        link.addEventListener('click', function(event) {\r\n            event.preventDefault();\r\n\r\n            let widthTop = document.documentElement.scrollTop,\r\n                hash = this.hash,\r\n                toBlock = document.querySelector(hash).getBoundingClientRect().top,\r\n                start = null;\r\n\r\n            requestAnimationFrame(step);\r\n\r\n            function step(time) {\r\n                if (start === null) {\r\n                    start = time;\r\n                }\r\n\r\n                let progress = time - start,\r\n                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));\r\n\r\n                    document.documentElement.scrollTo(0, r);\r\n\r\n                if (r != widthTop + toBlock) {\r\n                    requestAnimationFrame(step);\r\n                } else {\r\n                    location.hash = hash;\r\n                }\r\n            }\r\n        });\r\n    });\r\n\r\n\r\n};\r\n\r\nmodule.exports = scrolling;\n\n//# sourceURL=webpack://webpack-demo/./src/js/modules/scrolling.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((module) => {

eval("function slider(){\r\n    $('.slider__row').slick({\r\n        infinite: true,\r\n        slidesToShow: 3,\r\n        slidesToScroll: 3,\r\n        responsive:[\r\n            {\r\n                breakpoint: 768,\r\n                settings: {\r\n                    slidesToShow:2\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 550,\r\n                settings: {\r\n                    slidesToShow:1\r\n                }\r\n            }\r\n            ],\r\n        prevArrow: '<img src=\"assets/img/slider/prev.png\" alt=\"prev\" class=\"slick-prev\">',\r\n        nextArrow: '<img src=\"assets/img/slider/next.png\" alt=\"next\" class=\"slick-next\">'   \r\n      });\r\n\r\n}\r\n\r\n\r\n\r\nmodule.exports = slider;\r\n    \r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    const slider = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\r\n    const scrolling = __webpack_require__(/*! ./modules/scrolling */ \"./src/js/modules/scrolling.js\");\r\n    const accordion =  __webpack_require__(/*! ./modules/accordion */ \"./src/js/modules/accordion.js\");\r\n    const moreCards = __webpack_require__(/*! ./modules/moreCards */ \"./src/js/modules/moreCards.js\");\r\n    slider();\r\n    scrolling('.pageup');\r\n    accordion('.accordion__item');\r\n    moreCards('.show__more', '.product__row');\r\n});\n\n//# sourceURL=webpack://webpack-demo/./src/js/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;