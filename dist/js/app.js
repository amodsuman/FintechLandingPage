/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
// Navbar Styling On Scrolling
var nav = document.getElementById('header');
window.addEventListener('scroll', function () {
  if (window.scrollY >= 5) {
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    nav.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px';
  } else {
    nav.style.backgroundColor = 'transparent';
    nav.style.boxShadow = 'none';
  }
}); //Hamburger Menu

var body = document.querySelector('body');
var hamburger = document.querySelector('#hamburger');
var hammenu = document.querySelector('#hammenu');
var span1 = document.querySelector('#span1');
var span2 = document.querySelector('#span2');
hamburger.addEventListener("click", function () {
  if (hamburger.classList.contains('active')) {
    hamburger.classList.remove('active');
    span1.style.marginBottom = '8px';
    span2.style.width = '20px';
    span1.style.transform = 'rotate(0deg)';
    span2.style.transform = 'rotate(0deg)';
    hammenu.style.left = '-500px';
    body.style.overflow = 'auto';
    nav.style.backgroundColor = 'transparent';
    nav.style.boxShadow = 'none';
  } else {
    hamburger.classList.add('active');
    span1.style.marginBottom = '0px';
    span2.style.width = '32px';
    span1.style.transform = 'rotate(45deg)';
    span2.style.transform = 'rotate(-45deg)';
    hammenu.style.left = '0px';
    body.style.overflow = 'hidden';
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    nav.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px';
  }
}); // Swiper JS

var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev"
  }
}); // GSAP Animations
// Hero Section

gsap.from('#heroDesc', {
  duration: 1,
  x: -200,
  opacity: 0,
  scrollTrigger: {
    trigger: '#heroDesc',
    toggleActions: 'restart reverse restart reverse'
  }
});
gsap.from('#heroImg', {
  duration: 1,
  y: 200,
  delay: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: '#heroDesc',
    toggleActions: 'restart reverse restart reverse'
  }
}); // Clients Section

gsap.from('#clients div', {
  duration: 1,
  scale: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: '#clients div',
    toggleActions: 'restart reverse restart reverse'
  }
}); // Roadmap Section

if (screen.width >= 768) {
  gsap.timeline({
    scrollTrigger: {
      trigger: '#roadmapSvg',
      toggleActions: 'restart reverse restart reverse'
    }
  }).from("#svgPath", {
    drawSVG: "0%",
    duration: 2,
    ease: "none"
  }).from("#roadmapStep1", {
    y: 100,
    opacity: 0
  }, '-=1.5').from("#roadmapStep2", {
    y: 100,
    opacity: 0
  }, '-=0.8').from("#roadmapStep3", {
    y: 100,
    opacity: 0
  });
} else {
  gsap.from('#roadmapStep1', {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: '#roadmapStep1',
      toggleActions: 'restart reverse restart reverse'
    }
  });
  gsap.from('#roadmapStep2', {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: '#roadmapStep2',
      toggleActions: 'restart reverse restart reverse'
    }
  });
  gsap.from('#roadmapStep3', {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: '#roadmapStep3',
      toggleActions: 'restart reverse restart reverse'
    }
  });
} // About1 Section


gsap.from('#about1Desc', {
  duration: 1,
  scale: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: '#about1Desc',
    toggleActions: 'restart reverse restart reverse'
  }
});
gsap.from('#about1Box1', {
  duration: 1,
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#about1Box1',
    toggleActions: 'restart reverse restart reverse'
  }
});
gsap.from('#about1Box2', {
  duration: 1,
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#about1Box2',
    toggleActions: 'restart reverse restart reverse'
  }
});
gsap.from('#about1Box3', {
  duration: 1,
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#about1Box3',
    toggleActions: 'restart reverse restart reverse'
  }
});
gsap.from('#moreAboutPlatform', {
  duration: 0.8,
  scale: 0.7,
  yoyo: true,
  repeat: -1,
  scrollTrigger: {
    trigger: '#moreAboutPlatform',
    toggleActions: 'restart reverse restart reverse'
  }
}); // About2 Section

gsap.from('.about2Card', {
  duration: 1,
  x: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '.about2Card',
    toggleActions: 'restart reverse restart reverse'
  }
}); // About3 Section

gsap.from('#about3Box1', {
  duration: 1,
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#about3Box1',
    toggleActions: 'restart reverse restart reverse'
  }
});
gsap.from('#about3Box2', {
  duration: 1,
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#about3Box2',
    toggleActions: 'restart reverse restart reverse'
  }
}); // Testimonials Section

gsap.from('#testimonialsImg', {
  duration: 1,
  x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#testimonialsImg',
    toggleActions: 'restart reverse restart reverse'
  }
});
gsap.from('#testimonialsDesc', {
  duration: 1,
  x: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#testimonialsDesc',
    toggleActions: 'restart reverse restart reverse'
  }
}); // Download Section

gsap.from('#downloads', {
  duration: 1,
  scale: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: '#downloads',
    toggleActions: 'restart reverse restart reverse'
  }
}); // Blogs Section

gsap.from('#seeAllBlogs', {
  duration: 0.8,
  scale: 0.7,
  yoyo: true,
  repeat: -1,
  scrollTrigger: {
    trigger: '#seeAllBlogs',
    toggleActions: 'restart reverse restart reverse'
  }
});
gsap.from('#blogCol1', {
  duration: 1,
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#blogCol1',
    toggleActions: 'restart reverse restart reverse'
  }
});
gsap.from('#blogCol2', {
  duration: 1,
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#blogCol2',
    toggleActions: 'restart reverse restart reverse'
  }
});
gsap.from('#blogCol3 .lastColBlog', {
  duration: 1,
  x: 100,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '#blogCol3',
    toggleActions: 'restart reverse restart reverse'
  }
}); // Form Section

gsap.from('#formDesc', {
  duration: 1,
  x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#formDesc',
    toggleActions: 'restart reverse restart reverse'
  }
});
gsap.from('#form', {
  duration: 1,
  x: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '#form',
    toggleActions: 'restart reverse restart reverse'
  }
});

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklandingpage1"] = self["webpackChunklandingpage1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./assets/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;