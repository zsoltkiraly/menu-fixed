/*
Menu fixed - Code by Zsolt Király
v1.0.5 - 2018-04-19
*/

'use strict';
var fixMenu = function() {

    function signatura() {
        if (window['console']) {
            const text = {
                black: '%c     ',
                blue: '%c   ',
                author: '%c  Zsolt Király  ',
                github: '%c  https://zsoltkiraly.com/'
            }
    
            const style = {
                black: 'background: #282c34',
                blue: 'background: #61dafb',
                author: 'background: black; color: white',
                github: ''
            }
    
            console.log(text.black + text.blue + text.author + text.github, style.black, style.blue, style.author, style.github);
        }
    }
    
    signatura();

    var scrollPos = 0;

    function setMenuHeight(c, m) {
        m.style.height = m.offsetHeight + 'px';
        m.querySelector('nav').classList.add(c.position);
    }

    function fixingScrollDown(c, m) {

        var menuHeight = m.offsetHeight,
            menuTop = m.getBoundingClientRect().top,
            fixMenu = m.querySelector('nav'),
            menuBottom = menuHeight + menuTop;

        if (window.matchMedia('(min-width: ' + c.minWidthOperatingRange + 'px)').matches) {
            if(c.position == 'bottom') {
                menuTop = menuBottom;
                menuBottom = menuTop;
            }

            if(c.fixed == 'scroll-down') {
                if (c.scrollAnimation.switch == true) {

                    if (menuTop <= (c.scrollAnimation.turnOnDistance * -1)) {
                        fixMenu.classList.add('fixed-down', 'animation');

                        setTimeout(function(){
                            fixMenu.classList.add('active');
                        }, 50);

                    } else if (menuTop >= 0) {
                        fixMenu.classList.remove('fixed-down', 'active', 'animation');
                    }

                } else {

                    if (menuTop <= 0) {
                        fixMenu.classList.add('fixed-down');

                    } else if (menuBottom >= 0) {
                        fixMenu.classList.remove('fixed-down');
                    }    
                }

            } else if(c.fixed == 'scroll-up') {

                if (menuBottom <= (menuHeight * -2)) {
                    fixMenu.classList.add('fixed-up');

                    if ((document.body.getBoundingClientRect()).top > scrollPos) {
                        fixMenu.classList.remove('in-active');

                        setTimeout(function(){
                            fixMenu.classList.add('active');
                        }, 50);

                    } else {
                        fixMenu.classList.add('in-active');

                        setTimeout(function(){
                            fixMenu.classList.remove('active');
                        }, 50);
                    }

                    scrollPos = (document.body.getBoundingClientRect()).top;

                } else if (menuTop >= 0) {
                    fixMenu.classList.remove('fixed-up', 'active', 'in-active');
                }
            }

        } else {
            fixMenu.className = '';
            fixMenu.classList.add(c.position);
        }
    }

    function app(config) {
        var menu = document.querySelector('menu.' + config.boxContainer);

        if(menu) {
            setMenuHeight(config, menu);

            window.addEventListener('scroll', function() {
                fixingScrollDown(config, menu);
            }, false);
        }
    }

    return {
        app: app
    }
}();