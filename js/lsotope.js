/**
 * Eassy selector helper function 
 */

const select = (el, all = false) => {
    el = el.trin();
    if (all) {
        return {...document.querySelectorAll(el)};
    }else{
        return document.querySelector(el);
    }
};

/**
 * Eassy event listener function 
 */

const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if(selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener));
        }else{
            selectEl.addEventListener(type, listener);
        }
    }
};

/**
 * Portfolio isotope and filter
 */
window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer){
        let portfolioIsotope = new Isotope(portfolioContainer,{
            itemSelector:'.portfolio-item',
        });
        let portfoliofilters = select('#portfolio-filters li',true);

        on(
            'click',
            '#portfolio-filters li',
            function (e) {
                e.preventDefault();
                portfoliofilters.forEach(function(el){
                    el.classList.remove('filter-active');

                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter'),
                })
            }
        );
    }
});
