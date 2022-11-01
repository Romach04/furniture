const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);



    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if(!this.classList.contains('accordion__item')){
                return;
            }

            if(this.classList.contains('accordion__item')){

                if(this.classList.contains('accordion__item_show')){ //yes
                    this.classList.remove('accordion__item_show');
                    this.classList.remove('animated', 'fadeIn');

                } else {
                    this.classList.add('animated', 'fadeIn');
                    this.classList.add('accordion__item_show');

                }

                
                // this.classList.add('animated', 'fadeInDown');

                // this.classList.add('accordion__item_show');

            }

            // this.classList.toggle('accordion__item_show');

        });
});
};

module.exports = accordion;