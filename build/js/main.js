/* eslint-disable no-inner-declarations */

// if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
if (window.location.pathname === '/Tokumov_jewellery/build/index.html' || window.location.pathname === '/Tokumov_jewellery/build/') {
  ///////////////////////////////////////////////////////////////////SLIDER
  const goods = document.querySelector('.goods__inner');
  const paginationDesktopNumbers = document.querySelectorAll('.pagination__desktop button');
  const paginationTabletNumbers = document.querySelectorAll('.pagination__tablet button');
  const leftArrow = document.querySelector('.new-entries__left-arrow');
  const rightArrow = document.querySelector('.new-entries__right-arrow');
  const goodsWrapper = document.querySelector('.new-entries');

  const images = goods.querySelectorAll('img');
  const mediaQueryDesktop = window.matchMedia('(min-width: 1024px)');
  const mediaQueryTablet = window.matchMedia('(max-width: 1023px)');

  //PAGINATION COLORS

  let activeNumber = false;
  const desktopFigures = Array.from(document.querySelector('.pagination__desktop').querySelectorAll('button'));
  const tabletFigures = Array.from(document.querySelector('.pagination__tablet').querySelectorAll('button'));
  let numberTwo = false;
  let numberThree = false;

  function pagination(figures, screen) {
    figures.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        figures.forEach((item) => item.classList.add(`pagination__${screen}--passive-number`));
        if (activeNumber) {
          figures.forEach((item) => item.classList.remove(`pagination__${screen}--active-number`));
        }
        elem.classList.add(`pagination__${screen}--active-number`);
        activeNumber = true;
        if (elem.textContent === '1') {
          numberTwo = false;
          numberThree = false;
        } else if (elem.textContent === '2') {
          numberTwo = true;
          numberThree = false;
        } else if (elem.textContent === '3') {
          numberTwo = false;
          numberThree = true;
        } else if (elem.textContent === '4') {
          numberTwo = false;
          numberThree = false;
        } else if (elem.textContent === '5') {
          numberTwo = false;
          numberThree = false;
        } else if (elem.textContent === '6') {
          numberTwo = false;
          numberThree = false;
        }
      });
    });
  }

  //ARROWS

  let leftArrowNum = 0;
  let rightArrowNum = 0;
  let width;

  window.addEventListener('resize', () => {
    if (mediaQueryDesktop.matches) {
      moveArrowsDesktopSlider(paginationDesktopNumbers, 1200);
      pagination(desktopFigures, 'desktop');
      swipeFigures(paginationDesktopNumbers);

      width = goodsWrapper.offsetWidth;
      goods.style.width = `${width * images.length}px`;
      images.forEach((item) => {
        item.style.width = `${width / 4.8}px`;
        item.style.height = 'auto';
      });
    } else if (mediaQueryTablet.matches) {
      pagination(tabletFigures, 'tablet');

      width = goodsWrapper.offsetWidth;
      goods.style.width = `${width * images.length}px`;
      images.forEach((item) => {
        item.style.width = `${width / 2.19}px`;
        item.style.height = 'auto';
      });
    }
  });


  function moveArrowsDesktopSlider(screen, sizes) {
    leftArrow.addEventListener('click', () => {
      leftArrowNum = leftArrowNum - sizes;

      function getGoodsStyles() {
        return getComputedStyle(goods).transform;
      }

      if (leftArrowNum < 0 && !numberTwo) {
        leftArrowNum = (screen.length - 1) * sizes;
      } else if (numberTwo && leftArrowNum < 0 && getGoodsStyles() === 'matrix(1, 0, 0, 1, -1200, 0)') {
        leftArrowNum = 0;
      } else if (numberTwo && leftArrowNum < 0 && getGoodsStyles() === 'matrix(1, 0, 0, 1, 0, 0)') {
        leftArrowNum = (screen.length - 1) * sizes;
      } else if (numberThree && leftArrow < 0 && getGoodsStyles() === 'matrix(1, 0, 0, 1, -2400, 0)') {
        leftArrowNum = -1200;
      }

      goods.style.transform = `translateX(-${(leftArrowNum)}px)`;
    });

    rightArrow.addEventListener('click', () => {
      rightArrowNum = rightArrowNum + sizes;
      const goodsStyles = getComputedStyle(goods).transform;


      if (rightArrowNum > (screen.length - 1) * sizes) {
        rightArrowNum = 0;
      } else if (numberTwo && goodsStyles === 'matrix(1, 0, 0, 1, -1200, 0)') {
        rightArrowNum = 2400;
      } else if (numberTwo && goodsStyles === 'matrix(1, 0, 0, 1, 0, 0)') {
        rightArrowNum = 1200;
      }

      goods.style.transform = `translateX(${-rightArrowNum}px)`;
    });
  }


  function moveArrowsTabletSlider(screen, sizes) {
    leftArrow.addEventListener('click', () => {
      leftArrowNum = leftArrowNum - sizes;

      function getGoodsStyles() {
        return getComputedStyle(goods).transform;
      }

      if (leftArrowNum < 0 && !numberTwo) {
        leftArrowNum = (screen.length - 1) * sizes;
      } else if (numberTwo && leftArrowNum < 0 && getGoodsStyles() === 'matrix(1, 0, 0, 1, -1200, 0)') {
        leftArrowNum = 0;
      } else if (numberTwo && leftArrowNum < 0 && getGoodsStyles() === 'matrix(1, 0, 0, 1, 0, 0)') {
        leftArrowNum = (screen.length - 1) * sizes;
      } else if (numberThree && leftArrow < 0 && getGoodsStyles() === 'matrix(1, 0, 0, 1, -2400, 0)') {
        leftArrowNum = -1200;
      }

      goods.style.transform = `translateX(-${(leftArrowNum)}px)`;
    });

    rightArrow.addEventListener('click', () => {
      rightArrowNum = rightArrowNum + sizes;
      const goodsStyles = getComputedStyle(goods).transform;


      if (rightArrowNum > (screen.length - 1) * sizes) {
        rightArrowNum = 0;
      } else if (numberTwo && goodsStyles === 'matrix(1, 0, 0, 1, -1200, 0)') {
        rightArrowNum = 2400;
      } else if (numberTwo && goodsStyles === 'matrix(1, 0, 0, 1, 0, 0)') {
        rightArrowNum = 1200;
      }

      goods.style.transform = `translateX(${-rightArrowNum}px)`;
    });
  }

  //FIGURES

  function swipeFigures(screenNums, sizes) {
    screenNums.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.textContent === '1') {
          goods.style.transform = 'translate(0)';
        } else if (e.target.textContent === '2') {
          goods.style.transform = `translate(${-sizes * 1}px)`;
        } else if (e.target.textContent === '3') {
          goods.style.transform = `translate(${-sizes * 2}px)`;
        } else if (e.target.textContent === '4') {
          goods.style.transform = `translate(${-sizes * 3}px)`;
        } else if (e.target.textContent === '5') {
          goods.style.transform = `translate(${-sizes * 4}px)`;
        } else if (e.target.textContent === '6') {
          goods.style.transform = `translate(${-sizes * 5}px)`;
        }
      });
    });
  }

  swipeFigures(paginationTabletNumbers);

  if (mediaQueryDesktop.matches) {
    moveArrowsDesktopSlider(paginationDesktopNumbers, 1200);
    pagination(desktopFigures, 'desktop');
    swipeFigures(paginationDesktopNumbers, 1200);
  } else if (mediaQueryTablet.matches) {
    moveArrowsTabletSlider(paginationTabletNumbers, 707);
    pagination(tabletFigures, 'tablet');
    swipeFigures(paginationTabletNumbers, 707);
  }


  //////////////////////////////////////////////////////////SLIDER

  ///////////////////////////////////////////////////////////////SWIPER

  const gallery = document.querySelector('.goods');
  const galleryLine = gallery.querySelector('.goods__inner');

  const size = gallery.childElementCount;
  let currentSlideWasChanged = false;
  let startX = 0;
  // const galleryWidth = gallery.getBoundingClientRect().width;
  let currentSlide = 0;
  let clickX = 0;
  let dragX = 0;
  let x = currentSlide * width;

  galleryLine.addEventListener('pointerdown', startDrag);
  window.addEventListener('pointerup', stopDrag);

  function startDrag(evt) {
    clickX = evt.pageX;
    startX = x;
    window.addEventListener('pointermove', dragging);
  }

  function stopDrag() {
    window.removeEventListener('pointermove', dragging);
  }

  function dragging(evt) {
    dragX = evt.pageX;
    const dragShift = dragX - clickX;
    x = startX + dragShift;

    setStylePosition(dragShift);
    //Change active slide

    if (
      dragShift > 20 &&
      dragShift > 0 &&
      !currentSlideWasChanged &&
      currentSlide > 0
    ) {
      currentSlideWasChanged = true;
      currentSlide = currentSlide - 1;
    }

    if (
      dragShift < -20 &&
      dragShift < 0 &&
      !currentSlideWasChanged &&
      currentSlide < size - 1
    ) {
      currentSlideWasChanged = true;
      currentSlide = currentSlide + 1;
    }

  }

  function setStylePosition() {
    galleryLine.style.transform = `translate3d(${x}px, 0, 0)`;
  }

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

// } else if (window.location.pathname === '/catalog.html') {
} else if (window.location.pathname === '/Tokumov_jewellery/build/catalog.html') {

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


  ////////////////////////////////////////FILTER

  function hideFilterItems(items) {
    items.forEach((item) => {
      item.classList.add('filter--display-none');
    });
  }
  ////////////////////////////////////////FILTER
}

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
