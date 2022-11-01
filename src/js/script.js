

window.addEventListener('DOMContentLoaded', () => {
    const slider = require('./modules/slider');
    const scrolling = require('./modules/scrolling');
    const accordion =  require('./modules/accordion');
    slider();
    scrolling('.pageup');
    accordion('.accordion__item');
});