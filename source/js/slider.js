
//SLIDER
const goods = document.querySelector('.goods__inner');
const paginationBlock = document.querySelector('.pagination__desktop');
const paginationDesktopNumbers = document.querySelectorAll('.pagination__desktop button');
const paginationTabletNumbers = document.querySelectorAll('.pagination__tablet button');
const leftArrow = document.querySelector('.new-entries__left-arrow');
const rightArrow = document.querySelector('.new-entries__right-arrow');
const goodsWrapper = document.querySelector('.new-entries__inner');
const images = goods.querySelectorAll('img');
const mediaQueryDesktop = window.matchMedia('(min-width: 1024px)');
const mediaQueryTablet = window.matchMedia('(max-width: 1023px)');

//PAGINATION COLORS

let activeNumber = false;
const desktopFigures = Array.from(document.querySelector('.pagination__desktop').querySelectorAll('button'));
const tabletFigures = Array.from(document.querySelector('.pagination__tablet').querySelectorAll('button'));
let numberOne = true;
let numberTwo = false;
let numberThree = false;
let numberFour = false;
let numberFive = false;
let numberSix = false;

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
        numberOne = true;
        numberTwo = false;
        numberThree = false;
        numberFour = false;
        numberFive = false;
        numberSix = false;
      } else if (elem.textContent === '2') {
        numberOne = false;
        numberTwo = true;
        numberThree = false;
        numberFour = false;
        numberFive = false;
        numberSix = false;
      } else if (elem.textContent === '3') {
        numberOne = false;
        numberTwo = false;
        numberThree = true;
        numberFour = false;
        numberFive = false;
        numberSix = false;
      } else if (elem.textContent === '4') {
        numberOne = false;
        numberTwo = false;
        numberThree = false;
        numberFour = true;
        numberFive = false;
        numberSix = false;
      } else if (elem.textContent === '5') {
        numberOne = false;
        numberTwo = false;
        numberThree = false;
        numberFour = false;
        numberFive = true;
        numberSix = false;
      } else if (elem.textContent === '6') {
        numberOne = false;
        numberTwo = false;
        numberThree = false;
        numberFour = false;
        numberFive = false;
        numberSix = true;
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
      item.style.width = `${width / 4.34}px`;
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


function moveArrowsDesktopSlider(screen, size) {
  leftArrow.addEventListener('click', () => {
    leftArrowNum = leftArrowNum - size;

    function getGoodsStyles() {
      return getComputedStyle(goods).transform;
    }

    if (leftArrowNum < 0 && !numberTwo) {
      leftArrowNum = (screen.length - 1) * size;
    } else if (numberTwo && leftArrowNum < 0 && getGoodsStyles() === 'matrix(1, 0, 0, 1, -1200, 0)') {
      leftArrowNum = 0;
    } else if (numberTwo && leftArrowNum < 0 && getGoodsStyles() === 'matrix(1, 0, 0, 1, 0, 0)') {
      leftArrowNum = (screen.length - 1) * size;
    } else if (numberThree && leftArrow < 0 && getGoodsStyles() === 'matrix(1, 0, 0, 1, -2400, 0)') {
      leftArrowNum = -1200;
    }

    goods.style.transform = `translateX(-${(leftArrowNum)}px)`;
  });

  rightArrow.addEventListener('click', () => {
    rightArrowNum = rightArrowNum + size;
    const goodsStyles = getComputedStyle(goods).transform;


    if (rightArrowNum > (screen.length - 1) * size) {
      rightArrowNum = 0;
    } else if (numberTwo && goodsStyles === 'matrix(1, 0, 0, 1, -1200, 0)') {
      rightArrowNum = 2400;
    } else if (numberTwo && goodsStyles === 'matrix(1, 0, 0, 1, 0, 0)') {
      rightArrowNum = 1200;
    }

    goods.style.transform = `translateX(${-rightArrowNum}px)`;
  });
}


function moveArrowsTabletSlider(screen, size) {
  leftArrow.addEventListener('click', () => {
    leftArrowNum = leftArrowNum - size;

    function getGoodsStyles() {
      return getComputedStyle(goods).transform;
    }

    if (leftArrowNum < 0 && !numberTwo) {
      leftArrowNum = (screen.length - 1) * size;
    } else if (numberTwo && leftArrowNum < 0 && getGoodsStyles() === 'matrix(1, 0, 0, 1, -1200, 0)') {
      leftArrowNum = 0;
    } else if (numberTwo && leftArrowNum < 0 && getGoodsStyles() === 'matrix(1, 0, 0, 1, 0, 0)') {
      leftArrowNum = (screen.length - 1) * size;
    } else if (numberThree && leftArrow < 0 && getGoodsStyles() === 'matrix(1, 0, 0, 1, -2400, 0)') {
      leftArrowNum = -1200;
    }

    goods.style.transform = `translateX(-${(leftArrowNum)}px)`;
  });

  rightArrow.addEventListener('click', () => {
    rightArrowNum = rightArrowNum + size;
    const goodsStyles = getComputedStyle(goods).transform;


    if (rightArrowNum > (screen.length - 1) * size) {
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

function swipeFigures(screenNums, size) {
  screenNums.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.textContent === '1') {
        goods.style.transform = 'translate(0)';
      } else if (e.target.textContent === '2') {
        goods.style.transform = `translate(${-size * 1}px)`;
      } else if (e.target.textContent === '3') {
        goods.style.transform = `translate(${-size * 2}px)`;
      } else if (e.target.textContent === '4') {
        goods.style.transform = `translate(${-size * 3}px)`;
      } else if (e.target.textContent === '5') {
        goods.style.transform = `translate(${-size * 4}px)`;
      } else if (e.target.textContent === '6') {
        goods.style.transform = `translate(${-size * 5}px)`;
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
