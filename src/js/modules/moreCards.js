



const moreCards = (select, wrap) => {

    
    const getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };



    

    const btn = document.querySelector(select);

    btn.addEventListener('click', function() {
        getResource('http://localhost:3000/card')
            .then(res => createCard(res.card))
            .catch(error =>console.log(error));

        this.remove();  
    });



    function createCard(response) {
        response.forEach(({src, prise, text, title})  => {
            let card = document.createElement('div');


            card.classList.add('animated', 'fadeInUp','product__row__item');

            card.innerHTML = `
                <img src=${src} alt="product">
                <div class="product__item__title">
                    <h3${title}</h3>
                </div>
                <div class="product__item__text">
                    ${text}
                </div>
                <div class="new__item__prise">
                    ${prise}
                </div>
            


            
            `;

            document.querySelector(wrap).apeendChild(card);
        });


    }

};


module.exports = moreCards;