

window.addEventListener('DOMContentLoaded', () => {
    const slider = require('./modules/slider');
    const scrolling = require('./modules/scrolling');
    slider();
    scrolling('.pageup');
});