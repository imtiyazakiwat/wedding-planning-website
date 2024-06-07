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

