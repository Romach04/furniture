

window.addEventListener('DOMContentLoaded', () => {
    const slider = require('./modules/slider');
    const scrolling = require('./modules/scrolling');
    const accordion =  require('./modules/accordion');
    const moreCards = require('./modules/moreCards');
    slider();
    scrolling('.pageup');
    accordion('.accordion__item');
    moreCards('.show__more', '.product__row');
});