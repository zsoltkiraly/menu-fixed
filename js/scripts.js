var fixMenu=function(){function a(a,b){b.style.height=b.offsetHeight+"px",b.querySelector("nav").classList.add(a.position)}function b(a,b){if(window.matchMedia("(min-width: "+a.minWidthOperatingRange+"px)").matches){var c=b.offsetHeight,e=b.getBoundingClientRect().top,f=b.querySelector("nav"),g=c+e;"bottom"==a.position&&(e=g,g=e),"scroll-down"==a.fixed?1==a.scrollAnimation["switch"]?e<=-1*a.scrollAnimation.turnOnDistance?(f.classList.add("fixed-down","animation"),setTimeout(function(){f.classList.add("active")},50)):e>=0&&f.classList.remove("fixed-down","active","animation"):0>=e?f.classList.add("fixed-down"):g>=0&&f.classList.remove("fixed-down"):"scroll-up"==a.fixed&&(-2*c>=g?(f.classList.add("fixed-up"),document.body.getBoundingClientRect().top>d?(f.classList.remove("in-active"),setTimeout(function(){f.classList.add("active")},50)):(f.classList.add("in-active"),setTimeout(function(){f.classList.remove("active")},50)),d=document.body.getBoundingClientRect().top):e>=0&&f.classList.remove("fixed-up","active","in-active"))}}function c(c){var d=document.querySelector("menu."+c.boxContainer);d&&(a(c,d),window.addEventListener("scroll",function(){b(c,d)},!1))}var d=0;return{app:c}}();