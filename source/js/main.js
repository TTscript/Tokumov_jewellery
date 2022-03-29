/* eslint-disable no-inner-declarations */

// import './slider.js';

//////////////////////////////////////////////////LOGIN

const loginPopup = document.querySelector('#popup-login').content.querySelector('.popup-login');
const login = document.querySelector('#login a');
const bodyTag = document.querySelector('.page-body');
const loginCloseButton = loginPopup.querySelector('.popup-login__background button');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const createLoginPopup = () => {
  const popup = loginPopup.cloneNode(true);
  bodyTag.appendChild(loginPopup);
  return popup;
};

const closePopupClick = () => {
  loginPopup.remove();
  loginCloseButton.removeEventListener('click', closePopupClick);
};

const closePopupEsc = (evt) => {
  if (isEscEvent(evt)) {
    loginPopup.remove();
  }
  window.removeEventListener('keydown', closePopupEsc);
};

const closePopupOverlay = (evt) => {
  if (evt.target === loginPopup) {
    loginPopup.remove();
    window.removeEventListener('click', closePopupOverlay);
  }
};

const closePopup = () => {
  loginCloseButton.addEventListener('click', closePopupClick);
  window.addEventListener('keydown', closePopupEsc);
  window.addEventListener('click', closePopupOverlay);
};

function install() {
  createLoginPopup();
  setTimeout(() => {
    closePopup();
  }, 250);
}

login.addEventListener('click', install);

/////////////////////////////////////////////////LOGIN


////////////////////////////////////////////////VALIDATION
const mailShape = document.querySelector('.mail-shape');
const mailWrapper = document.querySelector('.mail-shape__input-wrapper');
const loginTemplate = document.querySelector('#popup-login')
  .content.querySelector('.popup-login');
const loginShape = loginTemplate.querySelector('#popup-login-shape');
const loginWrapper = document.querySelector('#popup-login')
  .content.querySelector('.popup-login__enter-mail');

function validateName(mail) {
  const re =/\S+@\S+\.\S+/;
  return re.test(String(mail));
}

mailShape.onsubmit = function() {
  const inputMail = document.querySelector('#input-mail').value;

  if (inputMail === '') {
    mailWrapper.classList.add('mail-shape__error');
    return false;
  } else {
    mailWrapper.classList.remove('mail-shape__error');
  }

  if (!validateName(inputMail)) {
    mailWrapper.classList.add('mail-shape__error');
    return false;
  } else {
    mailWrapper.classList.remove('mail-shape__error');
  }
};

loginShape.onsubmit = function() {
  const popupMail = document.querySelector('#input-popup-mail').value;

  if (popupMail === '') {
    loginWrapper.classList.add('popup-login__error');
    return false;
  } else {
    loginWrapper.classList.remove('popup-login__error');
  }

  if (!validateName(popupMail)) {
    loginWrapper.classList.add('popup-login__error');
    return false;
  } else {
    loginWrapper.classList.remove('popup-login__error');
  }
};

////////////////////////////////////////////////  VALIDATION

///////////////////////////////////////////////   LOCAL STORAGE
mailShape.addEventListener('submit', () => {
  localStorage.setItem('mail', `${document.querySelector('.mail-shape__input-wrapper').querySelector('#input-mail').value}`);
});

loginShape.addEventListener('submit', () => {
  localStorage.setItem('mail', `${loginWrapper.querySelector('#input-popup-mail').value}`);
});

///////////////////////////////////////////////   LOCAL STORAGE

//////////////////////////////////////////////    BURGER MENU

const burgerClosed = document.querySelector('.burger-closed');
const burgerOpen = document.querySelector('.burger-open');
const burgerTop = document.querySelector('.burger-closed__top-line');
const burgerBottom = document.querySelector('.burger-closed__bottom-line');
const burgerMiddle = document.querySelector('.burger-closed__middle-line');
const navigationItem = document.querySelectorAll('.page-header__navigation-item');
const navItemArray = Array.from(navigationItem);
const burgerOpenList = document.querySelector('.burger-open__list');
const burgerMenuItems = Array.from(document.querySelectorAll('.burger-open__list-item-wrapper'));
const logoTablet = document.querySelector('.page-header__tablet');
const centerContainer = document.querySelector('.center-container');
const logo = document.querySelector('.page-header__logo');
const loginBlock = document.querySelector('.page-header__login-block');
const burgerButton = document.querySelector('.burger-closed').querySelector('button');

let menuOpen = false;

function noScroll() {
  window.scrollTo(0, 0);
}

function checkHeight() {
  const listHeight = burgerOpenList.getBoundingClientRect().height;

  if (listHeight > 930) {
    burgerOpenList.classList.add('burger-open__list--add-scroll');
  }
}

logoTablet.classList.add('page-header__tablet-disappear');
burgerClosed.classList.add('burger-closed--change-display');
burgerOpen.classList.add('burger-open--appear');
navItemArray.forEach((item) => {
  item.classList.add('page-header__navigation-item--disappear');
});

burgerOpen.classList.add('burger-open__action');

burgerButton.addEventListener('click', () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    window.addEventListener('scroll', noScroll);
    burgerOpenList.addEventListener('change', checkHeight);
  } else {
    window.removeEventListener('scroll', noScroll);
    burgerOpenList.removeEventListener('change', checkHeight);
  }

  burgerClosed.classList.toggle('burger-closed--change-color');
  loginBlock.classList.toggle('page-header__login-block--change-bag');
  logo.classList.toggle('page-header__logo--change-color');
  burgerOpen.classList.toggle('burger-open__action');
  burgerClosed.classList.toggle('burger-closed--background-color');

  burgerMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
      centerContainer.classList.remove('center-container--fixed');
      burgerOpen.classList.add('burger-open__action');
      burgerTop.classList.remove('burger-closed__top-line--transform');
      burgerBottom.classList.remove('burger-closed__bottom-line--transform');
      burgerMiddle.classList.remove('visually-hidden');
      burgerClosed.classList.remove('burger-closed--background-color');
    });
  });
});

//////////////////////////////////////// BURGER MENU

window.addEventListener('DOMContentLoaded', (event) => {
  if (window.location.pathname === '/index.html') {
    console.log(window.location.pathname);

    ///////////////////////////////////////////////////ACORDION

    const askedQuestion = Array.from(document.querySelectorAll('.asked-questions__block'));

    askedQuestion.forEach((item) => item.querySelector('p').classList.add('asked-questions__block--disappear'));

    askedQuestion.forEach((item) => item.addEventListener('click', () => {
      item.querySelector('p').classList.toggle('asked-questions__block--appear');
      item.classList.toggle('asked-questions__block--rotate-arrow');
    }));

    askedQuestion.forEach((item) => item.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        item.querySelector('p').classList.toggle('asked-questions__block--appear');
        item.classList.toggle('asked-questions__block--rotate-arrow');
      }
    }));

    ///////////////////////////////////////////////////ACORDION


  } else if (window.location.pathname === '/catalog.html') {
    console.log(window.location.pathname);

    ////////////////////////////////////////FILTER
    const filter = document.querySelector('.filter__inner');
    const popupCloseButton = document.querySelector('#filter-close-button');
    const filterProduct = filter.querySelector('.product');
    const productButton = filterProduct.querySelector('#product-button');
    const filterProductItems = filterProduct.querySelectorAll('div');
    const filterMaterial = filter.querySelector('.material');
    const materialButton = filterMaterial.querySelector('#material-button');
    const filterMaterialItems = filterMaterial.querySelectorAll('div');
    const filterCollection = filter.querySelector('.collection');
    const collectionButton = filterCollection.querySelector('#collection-button');
    const filterCollectionItems = filterCollection.querySelectorAll('div');
    const filterPrice = filter.querySelector('.price');
    const priceButton = filterPrice.querySelector('#price-button');
    const filterPriceItem = filterPrice.querySelector('div');

    hideFilterItems(filterMaterialItems);
    hideFilterItems(filterCollectionItems);

    productButton.addEventListener('click', () => {
      filterProduct.classList.toggle('product--rotate-arrow');
      filterProductItems.forEach((item) => {
        item.classList.toggle('filter__inner--display-none');
      });
    });

    materialButton.addEventListener('click', () => {
      filterMaterial.classList.toggle('material--rotate-arrow');
      filterMaterialItems.forEach((item) => {
        item.classList.toggle('filter--display-none');
      });
    });

    collectionButton.addEventListener('click', () => {
      filterCollection.classList.toggle('collection--rotate-arrow');
      filterCollectionItems.forEach((item) => {
        item.classList.toggle('filter--display-none');
      });
    });

    priceButton.addEventListener('click', () => {
      filterPrice.classList.toggle('price--rotate-arrow');
      filterPriceItem.classList.toggle('filter--display-none');
    });

    popupCloseButton.addEventListener('click', closeFilter);

    function closeFilter() {
      document.querySelector('.catalog__filter-wrapper').classList.add('catalog__filter-wrapper-remove');
    }
    ////////////////////////////////////////FILTER


    ////////////////////////////////////////////FILTER-POPUP

    // const filterPopup = document.querySelector('#popup-filter').content.querySelector('.popup-filter');

    // const filterButton = document.querySelector('#filter-button');
    // // const popupCloseButton = filterPopup.querySelector('#filter-close-button');
    // const popupFilterInputs = filterPopup.querySelectorAll('input');
    // const popupResetButton = filterPopup.querySelector('#popup-filter-reset');

    // const createFilterPopup = () => {
    //   const popup = filterPopup.cloneNode(true);
    //   bodyTag.appendChild(filterPopup);
    //   filterPopup.classList.add('popup-filter--appear');
    //   return popup;
    // };

    // createFilterPopup();

    // const closeFilterPopupClick = () => {
    //   filterPopup.remove();
    //   popupCloseButton.removeEventListener('click', closePopupClick);
    // };

    // const closeFilterPopupEsc = (evt) => {
    //   if (isEscEvent(evt)) {
    //     filterPopup.remove();
    //   }
    //   window.removeEventListener('keydown', closePopupEsc);
    // };

    // const closeFilterPopupOverlay = (evt) => {
    //   if (evt.target === filterPopup) {
    //     filterPopup.remove();
    //     window.removeEventListener('click', closePopupOverlay);
    //   }
    // };

    // const closeFilterPopup = () => {
    //   popupCloseButton.addEventListener('click', closeFilterPopupClick);
    //   window.addEventListener('keydown', closeFilterPopupEsc);
    //   window.addEventListener('click', closeFilterPopupOverlay);
    // };

    // filterButton.addEventListener('click', installFilterPopup);
    // popupResetButton.addEventListener('click', () => {
    //   popupFilterInputs.forEach((item) => {
    //     item.checked = false;
    //   });
    // });

    // function installFilterPopup() {
    //   createFilterPopup();
    //   setTimeout(() => {
    //     closeFilterPopup();
    //   }, 250);
    // }

    // filterProduct.addEventListener('click', () => {
    //   filterProduct.classList.toggle('product--rotate-arrow');
    //   filterProductItems.forEach((item) => {
    //     item.classList.toggle('popup-filter--display-none');
    //   });
    // });

    // filterMaterial.addEventListener('click', () => {
    //   filterMaterial.classList.toggle('material--rotate-arrow');
    //   filterMaterialItems.forEach((item) => {
    //     item.classList.toggle('popup-filter--display-none');
    //   });
    // });

    // filterCollection.addEventListener('click', () => {
    //   filterCollection.classList.toggle('collection--rotate-arrow');
    //   filterCollectionItems.forEach((item) => {
    //     item.classList.toggle('popup-filter--display-none');
    //   });
    // });

    // filterPrice.addEventListener('click', () => {
    //   filterPrice.classList.toggle('price--rotate-arrow');
    //   filterPriceItem.classList.toggle('popup-filter--display-none');
    // });

    //////////////////////////////////////////FILTER-POPUP

  }

  //////////////////////////////////////////FILTER-POPUP

  // function hidePopupFilterItems(items) {
  //   items.forEach((item) => {
  //     item.classList.add('popup-filter--display-none');
  //   });
  // }

  //////////////////////////////////////////FILTER-POPUP


  ////////////////////////////////////////FILTER

  function hideFilterItems(items) {
    items.forEach((item) => {
      item.classList.add('filter--display-none');
    });
  }
  ////////////////////////////////////////FILTER
});


