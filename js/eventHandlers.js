/* open modal window */
export const modalOpen = (elem) => {
    modalCloseAll();
    const modalElem = elem.closest('.modal-parent').querySelector('.modal');    
    modalElem.classList.add('modal--active');}

/* close modal window */
export const modalClose = (elem) => {
    elem.classList.remove('modal--active');
}

/* close opened modal window */
/* now only one modal window can be opened at a time */
/* if there would be more, can change querySelector to querySelectorAll and close every window from collection */
const modalCloseAll = () => {
    const modalElem = document.querySelector('.modal--active');
    if (modalElem) {
        modalClose(modalElem);
    }
}

export const documentClickHandler = (event) => {
    const elem = event.target;
    if (!elem.classList.contains('modal')) {
        modalCloseAll();
    }
}

/* add some life to stars ;D */
export const starSecretAnimation = (obj) => {
    if (!obj.classList.contains('marker-star--active')) {
        obj.classList.add('marker-star--active');
        setTimeout(() => {
            obj.classList.remove('marker-star--active');
        }, 1500);
    }
} 

/*  */
export const citiesContainerClickHandler = (event) => {
    if (!event.target.classList.contains('_interactive')) return false;
    const parent = event.target.parentNode;

    if (parent.classList.contains('marker-star')) {
        starSecretAnimation(parent);
    } else if (parent.classList.contains('city__location-marker')) {
        event.preventDefault();
        modalOpen(parent);
        event.stopPropagation();
    } else if (parent.classList.contains('modal__close-button')) {
        const modal = event.target.closest('.modal');
        modalClose(modal);
    }
}
