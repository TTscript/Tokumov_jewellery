/* eslint-disable no-inner-declarations */
if (window.location.pathname === '/main.html' || window.location.pathname === '/Tokumov_jewellery/build/main.html' || window.location.pathname === '/Tokumov_jewellery/build/' || window.location.pathname === '/interns/10_tokumov_jewellery/main.html') {
  ///////////////////////////////////////////////////////////////////SLIDER
  const goods = document.querySelector('.goods__inner');
  const goodsCards = document.querySelectorAll('.goods__card');
  const paginationDesktopNumbers = document.querySelectorAll('.pagination__desktop button');
  const paginationTabletNumbers = document.querySelectorAll('.pagination__tablet button');
  const leftArrow = document.querySelector('.new-entries__left-arrow');
  const rightArrow = document.querySelector('.new-entries__right-arrow');
  const goodsWrapper = document.querySelector('.new-entries');

  const images = goods.querySelectorAll('img');
  const mediaQueryOther = window.matchMedia('(min-width: 1201px)');
  const mediaQueryDesktop = window.matchMedia('(min-width: 1024px) and (max-width: 1200px)');
  const mediaQueryTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
  const mediaQueryPreMobile = window.matchMedia('(min-width: 500px) and (max-width: 767px)');
  const mediaQueryMobile = window.matchMedia('(max-width: 499px)');

  //PAGINATION COLORS
  let swiperFiguresStop = false;
  let activeNumber = false;
  const desktopFigures = Array.from(document.querySelector('.pagination__desktop').querySelectorAll('button'));
  const tabletFigures = Array.from(document.querySelector('.pagination__tablet').querySelectorAll('button'));

  function pagination(figures, screen) {
    swiperFiguresStop = true;

    figures.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        figures.forEach((item) => item.classList.add(`pagination__${screen}--passive-number`));
        if (activeNumber) {
          figures.forEach((item) => item.classList.remove(`pagination__${screen}--active-number`));
        }
        elem.classList.add(`pagination__${screen}--active-number`);
        activeNumber = true;
      });
    });
  }

  //ARROWS

  let width;
  let leftArrowNum = 0;
  let rightArrowNum = 0;
  let clickOnFigures = false;
  let clickLeftArrow = false;
  let clickRightArrow = false;
  let clickQuantityRight = 0;

  function changeImagesSize() {
    const sliderWidthResize = document.querySelector('.new-entries__goods-wrapper').offsetWidth;

    if (mediaQueryOther.matches) {
      pagination(desktopFigures, 'desktop');
      swipeFigures(paginationDesktopNumbers, 1200);

      images.forEach((item) => {
        item.style.width = '270px';
        item.style.height = 'auto';
      });

    } else if (mediaQueryDesktop.matches) {
      pagination(desktopFigures, 'desktop');
      swipeFigures(paginationDesktopNumbers, sliderWidthResize + 20);

      width = goodsWrapper.offsetWidth;
      goods.style.width = `${width * images.length}px`;

      goodsCards.forEach((item) => {
        item.style.maxWidth = `${width / 4.5}px`;
      });

      images.forEach((item) => {
        item.style.width = `${width / 4.5}px`;
        item.style.height = 'auto';
      });
    } else if (mediaQueryTablet.matches) {
      pagination(tabletFigures, 'tablet');
      swipeFigures(paginationTabletNumbers, 707);

      goodsCards.forEach((item) => {
        item.style.maxWidth = '324px';
      });

      images.forEach((item) => {
        item.style.width = '324px';
        item.style.height = 'auto';
      });
    } else if (mediaQueryPreMobile.matches) {
      pagination(tabletFigures, 'tablet');
      swipeFigures(paginationTabletNumbers, 707);

      width = goodsWrapper.offsetWidth;
      goods.style.width = `${width * images.length}px`;

      goodsCards.forEach((item) => {
        item.style.maxWidth = `${width / 2.3}px`;
      });

      images.forEach((item) => {
        item.style.width = `${width / 2.3}px`;
        item.style.height = 'auto';
      });
    } else if (mediaQueryMobile.matches) {
      width = goodsWrapper.offsetWidth;
      goods.style.width = `${width * images.length}px`;

      goodsCards.forEach((item) => {
        item.style.maxWidth = `${width / 2.5}px`;
      });

      images.forEach((item) => {
        item.style.width = `${width / 2.5}px`;
        item.style.height = 'auto';
      });
    }
  }

  changeImagesSize();

  window.addEventListener('resize', () => {
    setTimeout(() => {
      goods.style.transform = 'translate(0)';
    }, 300);

    changeImagesSize();
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const sliderWidth = document.querySelector('.new-entries__goods-wrapper').offsetWidth;

  let sizes = 1200;
  let screenArrows = paginationDesktopNumbers;

  if (mediaQueryOther.matches) {
    sizes = 1200;
    screenArrows = paginationDesktopNumbers;
  } else if (mediaQueryDesktop.matches) {
    sizes = sliderWidth + 20;
    screenArrows = paginationDesktopNumbers;
  } else if (mediaQueryTablet.matches) {
    sizes = 707;
    screenArrows = paginationTabletNumbers;
  } else if (mediaQueryPreMobile.matches) {
    sizes = 707;
    screenArrows = paginationTabletNumbers;
  }

  window.addEventListener('resize', () => {
    const sliderWidthResize = document.querySelector('.new-entries__goods-wrapper').offsetWidth;

    if (mediaQueryOther.matches) {
      sizes = 1200;
      screenArrows = paginationDesktopNumbers;
    } else if (mediaQueryDesktop.matches) {
      sizes = sliderWidthResize + 20;
      screenArrows = paginationDesktopNumbers;
    } else if (mediaQueryTablet.matches) {
      sizes = 707;
      screenArrows = paginationTabletNumbers;
    } else if (mediaQueryPreMobile.matches) {
      sizes = 707;
      screenArrows = paginationTabletNumbers;
    }
  });

  rightArrowNum = 0;
  leftArrowNum = 0;


  leftArrow.addEventListener('click', () => {
    clickLeftArrow = true;
    rightArrowNum = 0;
    clickQuantityRight = 0;

    setTimeout(() => {
      clickOnFigures = false;
      clickRightArrow = false;
    }, 50);

    leftArrowNum = leftArrowNum - sizes;


    function getGoodsStyles() {
      return getComputedStyle(goods).transform;
    }

    if (getGoodsStyles() !== 'matrix(1, 0, 0, 1, 0, 0)' && clickOnFigures === true) {
      leftArrowNum = 0;
    } else if (getGoodsStyles() !== 'matrix(1, 0, 0, 1, 0, 0)' && clickRightArrow === true) {
      leftArrowNum = 0;
    } else if (leftArrowNum < 0) {
      leftArrowNum = (screenArrows.length - 1) * sizes;
    }

    goods.style.transform = `translateX(${-(leftArrowNum)}px)`;

    if (window.matchMedia('(min-width: 1024px)').matches) {
      desktopFigures.forEach((item) => {
        item.classList.remove('pagination__desktop--active-number');
        item.classList.add('pagination__desktop--passive-number');
        setTimeout(() => {
          if (leftArrowNum === 0 && item.textContent === '1') {
            item.classList.add('pagination__desktop--active-number');
          } else if (leftArrowNum > 0 && leftArrowNum < 2000 && item.textContent === '2') {
            item.classList.add('pagination__desktop--active-number');
          } else if (leftArrowNum > 2000 && item.textContent === '3') {
            item.classList.add('pagination__desktop--active-number');
          }
        }, 200);
      });
    } else if (mediaQueryTablet.matches) {
      swiperFiguresStop = true;

      tabletFigures.forEach((item) => {
        item.classList.remove('pagination__tablet--active-number');
        item.classList.add('pagination__tablet--passive-number');

        setTimeout(() => {
          if (leftArrowNum === 0 && item.textContent === '1') {
            item.classList.add('pagination__tablet--active-number');
          } else if (leftArrowNum > 0 && leftArrowNum < 800 && item.textContent === '2') {
            item.classList.add('pagination__tablet--active-number');
          } else if (leftArrowNum > 800 && leftArrowNum < 1500 && item.textContent === '3') {
            item.classList.add('pagination__tablet--active-number');
          } else if (leftArrowNum > 1500 && leftArrowNum < 2200 && item.textContent === '4') {
            item.classList.add('pagination__tablet--active-number');
          } else if (leftArrowNum > 2200 && leftArrowNum < 2900 && item.textContent === '5') {
            item.classList.add('pagination__tablet--active-number');
          } else if (leftArrowNum > 3000 && item.textContent === '6') {
            item.classList.add('pagination__tablet--active-number');
          }
        }, 300);
      });
    }
  });

  rightArrow.addEventListener('click', () => {
    clickRightArrow = true;
    leftArrowNum = 0;
    clickQuantityRight++;

    if (clickQuantityRight === 1) {
      rightArrowNum = 0;
    }


    function getGoodsStyles() {
      return getComputedStyle(goods).transform;
    }

    setTimeout(() => {
      clickOnFigures = false;
      clickLeftArrow = false;
    }, 50);

    rightArrowNum = rightArrowNum + sizes;

    if (getGoodsStyles() !== 'matrix(1, 0, 0, 1, 0, 0)' && clickOnFigures === true) {
      rightArrowNum = 0;
    } else if (getGoodsStyles() !== 'matrix(1, 0, 0, 1, 0, 0)' && clickLeftArrow === true) {
      rightArrowNum = 0;
    } else if (rightArrowNum > (screenArrows.length - 1) * sizes) {
      rightArrowNum = 0;
    }

    goods.style.transform = `translateX(${-rightArrowNum}px)`;


    if (window.matchMedia('(min-width: 1024px)').matches) {

      desktopFigures.forEach((item) => {
        item.classList.remove('pagination__desktop--active-number');
        item.classList.add('pagination__desktop--passive-number');

        setTimeout(() => {
          if (rightArrowNum === 0 && item.textContent === '1') {
            item.classList.add('pagination__desktop--active-number');
          } else if (rightArrowNum > 0 && rightArrowNum < 2000 && item.textContent === '2') {
            item.classList.add('pagination__desktop--active-number');
          } else if (rightArrowNum > 2000 && item.textContent === '3') {
            item.classList.add('pagination__desktop--active-number');
          }
        }, 200);
      });
    } else if (mediaQueryTablet.matches) {
      tabletFigures.forEach((item) => {
        swiperFiguresStop = true;

        item.classList.remove('pagination__tablet--active-number');
        item.classList.add('pagination__tablet--passive-number');

        setTimeout(() => {
          if (rightArrowNum === 0 && item.textContent === '1') {
            item.classList.add('pagination__tablet--active-number');
          } else if (rightArrowNum > 0 && rightArrowNum < 800 && item.textContent === '2') {
            item.classList.add('pagination__tablet--active-number');
          } else if (rightArrowNum > 800 && rightArrowNum < 1500 && item.textContent === '3') {
            item.classList.add('pagination__tablet--active-number');
          } else if (rightArrowNum > 1500 && rightArrowNum < 2200 && item.textContent === '4') {
            item.classList.add('pagination__tablet--active-number');
          } else if (rightArrowNum > 2200 && rightArrowNum < 2900 && item.textContent === '5') {
            item.classList.add('pagination__tablet--active-number');
          } else if (rightArrowNum > 3000 && item.textContent === '6') {
            item.classList.add('pagination__tablet--active-number');
          }
        }, 300);
      });
    }
  });
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //FIGURES

  function swipeFigures(screenNums, windowSize) {
    screenNums.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        clickOnFigures = true;
        if (e.target.textContent === '1') {
          goods.style.transform = 'translate(0)';
        } else if (e.target.textContent === '2') {
          goods.style.transform = `translate(${-windowSize * 1}px)`;
        } else if (e.target.textContent === '3') {
          goods.style.transform = `translate(${-windowSize * 2}px)`;
        } else if (e.target.textContent === '4') {
          goods.style.transform = `translate(${-windowSize * 3}px)`;
        } else if (e.target.textContent === '5') {
          goods.style.transform = `translate(${-windowSize * 4}px)`;
        } else if (e.target.textContent === '6') {
          goods.style.transform = `translate(${-windowSize * 5}px)`;
        }
      });
    });
  }
  //////////////////////////////////////////////////////////SLIDER

  ///////////////////////////////////////////////////////////////SWIPER

  const gallery = document.querySelector('.goods');
  const galleryLine = gallery.querySelector('.goods__inner');
  const figuresMobile = document.querySelector('.pagination__mobile span');
  const swiperTabletFigures = Array.from(document.querySelector('.pagination__tablet').querySelectorAll('button'));

  let startX = 0;
  const swiperWidth = gallery.getBoundingClientRect().width;
  const currentSlide = 0;
  let clickX = 0;
  let dragX = 0;
  let x = currentSlide * swiperWidth;

  if (window.matchMedia('(max-width: 1023px)').matches) {

    galleryLine.addEventListener('pointerdown', startDrag);
    window.addEventListener('pointerup', stopDrag);

    function startDrag(evt) {
      clickX = evt.pageX;
      startX = x;
      window.addEventListener('pointermove', dragging);
    }

    function stopDrag() {
      const galleryLineStyle = getComputedStyle(galleryLine);
      const matrix = new DOMMatrixReadOnly(galleryLineStyle.transform);

      window.removeEventListener('pointermove', dragging);

      if (matrix.m41 > 20) {
        galleryLine.style.transform = 'translate(0)';
        figuresMobile.textContent = '1';
      } else if (matrix.m41 > -20) {
        galleryLine.style.transform = 'translate(0)';
        figuresMobile.textContent = '1';
      } else if (matrix.m41 < -50 && matrix.m41 > -707) {
        galleryLine.style.transform = 'translate(-707px)';
        figuresMobile.textContent = '2';
      } else if (matrix.m41 < -727 && matrix.m41 > -1414) {
        galleryLine.style.transform = 'translate(-1414px)';
        figuresMobile.textContent = '3';
      } else if (matrix.m41 < -1434 && matrix.m41 > -2121) {
        galleryLine.style.transform = 'translate(-2121px)';
        figuresMobile.textContent = '4';
      } else if (matrix.m41 < -2141 && matrix.m41 > -2828) {
        galleryLine.style.transform = 'translate(-2828px)';
        figuresMobile.textContent = '5';
      } else if (matrix.m41 < -2848 && matrix.m41 > -3533) {
        galleryLine.style.transform = 'translate(-3533px)';
        figuresMobile.textContent = '6';
      } else if (matrix.m41 < -3553) {
        galleryLine.style.transform = 'translate(-3533px)';
        figuresMobile.textContent = '6';
      }

      swiperTabletFigures.forEach((item) => {
        if (swiperFiguresStop) {
          return;
        }
        item.classList.remove('pagination__tablet--active-number');
        item.classList.add('pagination__tablet--passive-number');

        setTimeout(() => {
          if (matrix.m41 > 0 && item.textContent === '1') {
            item.classList.add('pagination__tablet--active-number');
          } else if (matrix.m41 < 0 && matrix.m41 > -800 && item.textContent === '2') {
            item.classList.add('pagination__tablet--active-number');
          } else if (matrix.m41 < -800 && matrix.m41 > -1500 && item.textContent === '3') {
            item.classList.add('pagination__tablet--active-number');
          } else if (matrix.m41 < -1500 && matrix.m41 > -2200 && item.textContent === '4') {
            item.classList.add('pagination__tablet--active-number');
          } else if (matrix.m41 < -2200 && matrix.m41 > -2900 && item.textContent === '5') {
            item.classList.add('pagination__tablet--active-number');
          } else if (matrix.m41 < -2900 && item.textContent === '6') {
            item.classList.add('pagination__tablet--active-number');
          }
        }, 300);

      });

      if (mediaQueryMobile.matches) {
        if (matrix.m41 > 10) {
          galleryLine.style.transform = 'translate(0)';
          figuresMobile.textContent = '1';
        } else if (matrix.m41 > -20) {
          galleryLine.style.transform = 'translate(0)';
          figuresMobile.textContent = '1';
        } else if (matrix.m41 < -20 && matrix.m41 > -305) {
          galleryLine.style.transform = 'translate(-305px)';
          figuresMobile.textContent = '2';
        } else if (matrix.m41 < -325 && matrix.m41 > -610) {
          galleryLine.style.transform = 'translate(-610px)';
          figuresMobile.textContent = '3';
        } else if (matrix.m41 < -630 && matrix.m41 > -905) {
          galleryLine.style.transform = 'translate(-915px)';
          figuresMobile.textContent = '4';
        } else if (matrix.m41 < -935 && matrix.m41 > -1210) {
          galleryLine.style.transform = 'translate(-1210px)';
          figuresMobile.textContent = '5';
        } else if (matrix.m41 < -1230 && matrix.m41 > -1515) {
          galleryLine.style.transform = 'translate(-1515px)';
          figuresMobile.textContent = '6';
        } else if (matrix.m41 < -1535) {
          galleryLine.style.transform = 'translate(-1515px)';
          figuresMobile.textContent = '6';
        }
      }
    }

    function dragging(evt) {
      dragX = evt.pageX;
      const dragShift = dragX - clickX;
      x = startX + dragShift;

      setStylePosition(dragShift);
    }

    function setStylePosition() {
      galleryLine.style.transform = `translate3d(${x}px, 0, 0)`;
    }
  }

  window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 1023px)').matches) {

      galleryLine.addEventListener('pointerdown', startDrag);
      window.addEventListener('pointerup', stopDrag);

      function startDrag(evt) {
        clickX = evt.pageX;
        startX = x;
        window.addEventListener('pointermove', dragging);
      }

      function stopDrag() {
        const galleryLineStyle = getComputedStyle(galleryLine);
        const matrix = new DOMMatrixReadOnly(galleryLineStyle.transform);

        window.removeEventListener('pointermove', dragging);

        if (matrix.m41 > 20) {
          galleryLine.style.transform = 'translate(0)';
          figuresMobile.textContent = '1';
        } else if (matrix.m41 > -20) {
          galleryLine.style.transform = 'translate(0)';
          figuresMobile.textContent = '1';
        } else if (matrix.m41 < -50 && matrix.m41 > -707) {
          galleryLine.style.transform = 'translate(-707px)';
          figuresMobile.textContent = '2';
        } else if (matrix.m41 < -727 && matrix.m41 > -1414) {
          galleryLine.style.transform = 'translate(-1414px)';
          figuresMobile.textContent = '3';
        } else if (matrix.m41 < -1434 && matrix.m41 > -2121) {
          galleryLine.style.transform = 'translate(-2121px)';
          figuresMobile.textContent = '4';
        } else if (matrix.m41 < -2141 && matrix.m41 > -2828) {
          galleryLine.style.transform = 'translate(-2828px)';
          figuresMobile.textContent = '5';
        } else if (matrix.m41 < -2848 && matrix.m41 > -3533) {
          galleryLine.style.transform = 'translate(-3533px)';
          figuresMobile.textContent = '6';
        } else if (matrix.m41 < -3553) {
          galleryLine.style.transform = 'translate(-3533px)';
          figuresMobile.textContent = '6';
        }

        swiperTabletFigures.forEach((item) => {
          if (swiperFiguresStop) {
            return;
          }
          item.classList.remove('pagination__tablet--active-number');
          item.classList.add('pagination__tablet--passive-number');

          setTimeout(() => {
            if (matrix.m41 > 0 && item.textContent === '1') {
              item.classList.add('pagination__tablet--active-number');
            } else if (matrix.m41 < 0 && matrix.m41 > -800 && item.textContent === '2') {
              item.classList.add('pagination__tablet--active-number');
            } else if (matrix.m41 < -800 && matrix.m41 > -1500 && item.textContent === '3') {
              item.classList.add('pagination__tablet--active-number');
            } else if (matrix.m41 < -1500 && matrix.m41 > -2200 && item.textContent === '4') {
              item.classList.add('pagination__tablet--active-number');
            } else if (matrix.m41 < -2200 && matrix.m41 > -2900 && item.textContent === '5') {
              item.classList.add('pagination__tablet--active-number');
            } else if (matrix.m41 < -2900 && item.textContent === '6') {
              item.classList.add('pagination__tablet--active-number');
            }
          }, 300);

        });

        if (mediaQueryMobile.matches) {
          if (matrix.m41 > 10) {
            galleryLine.style.transform = 'translate(0)';
            figuresMobile.textContent = '1';
          } else if (matrix.m41 > -20) {
            galleryLine.style.transform = 'translate(0)';
            figuresMobile.textContent = '1';
          } else if (matrix.m41 < -20 && matrix.m41 > -535) {
            galleryLine.style.transform = 'translate(-535px)';
            figuresMobile.textContent = '2';
          } else if (matrix.m41 < -555 && matrix.m41 > -1070) {
            galleryLine.style.transform = 'translate(-1070px)';
            figuresMobile.textContent = '3';
          } else if (matrix.m41 < -1090 && matrix.m41 > -1600) {
            galleryLine.style.transform = 'translate(-1600px)';
            figuresMobile.textContent = '4';
          } else if (matrix.m41 < -1600 && matrix.m41 > -2135) {
            galleryLine.style.transform = 'translate(-2135px)';
            figuresMobile.textContent = '5';
          } else if (matrix.m41 < -2135 && matrix.m41 > -2690) {
            galleryLine.style.transform = 'translate(-2690px)';
            figuresMobile.textContent = '6';
          } else if (matrix.m41 < -2710) {
            galleryLine.style.transform = 'translate(-2690px)';
            figuresMobile.textContent = '6';
          }
        }
      }

      function dragging(evt) {
        dragX = evt.pageX;
        const dragShift = dragX - clickX;
        x = startX + dragShift;

        setStylePosition(dragShift);
      }

      function setStylePosition() {
        galleryLine.style.transform = `translate3d(${x}px, 0, 0)`;
      }
    }
  });

  // if (mediaQueryPreMobile.matches) {
  //   width = goodsWrapper.offsetWidth;
  //   goods.style.width = `${width * images.length}px`;

  //   goodsCards.forEach((item) => {
  //     item.style.maxWidth = `${width / 2.3}px`;
  //   });

  //   images.forEach((item) => {
  //     item.style.width = `${width / 2.3}px`;
  //     item.style.height = 'auto';
  //   });
  // } else if (mediaQueryMobile.matches) {
  //   width = goodsWrapper.offsetWidth;
  //   goods.style.width = `${width * images.length}px`;

  //   goodsCards.forEach((item) => {
  //     item.style.maxWidth = `${width / 2.5}px`;
  //   });

  //   images.forEach((item) => {
  //     item.style.width = `${width / 2.5}px`;
  //     item.style.height = 'auto';
  //   });
  // }

  ///////////////////////////////////////////////////////////////SWIPER

  ///////////////////////////////////////////////////ACORDION

  const askedQuestion = Array.from(document.querySelectorAll('.asked-questions__block'));

  askedQuestion.forEach((item) => item.querySelector('p').classList.add('asked-questions__block--disappear'));

  askedQuestion.forEach((item) => item.addEventListener('click', () => {
    item.querySelector('p').classList.toggle('asked-questions__block--appear');
    item.classList.toggle('asked-questions__block--rotate-arrow');
  }));

  askedQuestion.forEach((item) => item.addEventListener('keydown', (e) => {
    if(e.key === ' ') {
      e.preventDefault();
    }
    if (e.key === ' ' || e.key === 'Enter') {
      item.querySelector('p').classList.toggle('asked-questions__block--appear');
      item.classList.toggle('asked-questions__block--rotate-arrow');
    }
  }));

  ///////////////////////////////////////////////////ACORDION

} else if (window.location.pathname === '/catalog.html' || window.location.pathname === '/Tokumov_jewellery/build/catalog.html' || window.location.pathname === '/interns/10_tokumov_jewellery/catalog.html') {

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

  const filterButton = document.querySelector('#filter-button');
  const catalogWrapper = document.querySelector('.catalog__filter-wrapper');
  const filterBlock = document.querySelector('.filter');
  const filterResetButton = document.querySelector('#filter-reset');
  const checkboxes = Array.from(filterBlock.querySelectorAll('input'));
  const isEscFilterEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

  function installFilter() {
    createFilterPopup();
    setTimeout(() => {
      closeFilterPopup();
    }, 50);
  }

  function createFilterPopup() {
    filterBlock.classList.add('filter--appear');
    catalogWrapper.classList.add('catalog__filter-wrapper-add');
  }

  function closeFilterPopup() {
    popupCloseButton.addEventListener('click', closeFilterButton);
    catalogWrapper.addEventListener('click', closeFilterOverlay);
    window.addEventListener('keydown', closeFilterKeydown);
  }

  function closeFilterButton() {
    filterBlock.classList.remove('filter--appear');
    catalogWrapper.classList.remove('catalog__filter-wrapper-add');
    popupCloseButton.removeEventListener('click', closeFilterButton);
  }

  function closeFilterOverlay(e) {
    if (e.target === catalogWrapper) {
      filterBlock.classList.remove('filter--appear');
      catalogWrapper.classList.remove('catalog__filter-wrapper-add');
      catalogWrapper.removeEventListener('click', closeFilterOverlay);
    }
  }

  function closeFilterKeydown(evt) {
    if (isEscFilterEvent(evt)) {
      filterBlock.classList.remove('filter--appear');
      catalogWrapper.classList.remove('catalog__filter-wrapper-add');
      window.removeEventListener('keydown', closeFilterKeydown);
    }
  }

  filterButton.addEventListener('click', installFilter);
  filterResetButton.addEventListener('click', () => {
    checkboxes.forEach((item) => {
      item.checked = false;
      filterBlock.querySelector('#necklaces').checked = true;
      filterBlock.querySelector('#rings').checked = true;
      filterBlock.querySelector('#earrings').checked = true;
    });
  });

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
const inputMailLogin = loginPopup.querySelector('#input-popup-mail');
const cart = document.querySelector('#cart a');
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const createLoginPopup = () => {
  const popup = loginPopup.cloneNode(true);
  bodyTag.appendChild(loginPopup);
  return popup;
};

const closePopupClick = () => {
  loginPopup.remove();
  loginCloseButton.removeEventListener('click', closePopupClick);
  window.removeEventListener('scroll', noScroll);
};

const closePopupEsc = (evt) => {
  if (isEscEvent(evt)) {
    loginPopup.remove();
  }
  window.removeEventListener('keydown', closePopupEsc);
  window.removeEventListener('scroll', noScroll);
};

const closePopupOverlay = (evt) => {
  if (evt.target === loginPopup) {
    loginPopup.remove();
    window.removeEventListener('click', closePopupOverlay);
    window.removeEventListener('scroll', noScroll);
  }
};

const closePopup = () => {
  loginCloseButton.addEventListener('click', closePopupClick);
  window.addEventListener('keydown', closePopupEsc);
  window.addEventListener('click', closePopupOverlay);
};

const popupLoginInner = loginPopup.querySelector('.popup-login__inner');

function install(e) {
  e.preventDefault();
  popupLoginInner.addEventListener('keydown', loginBlockTab);
  window.addEventListener('scroll', noScroll);
  createLoginPopup();
  inputMailLogin.focus();
  setTimeout(() => {
    closePopup();
  }, 250);
}

const popupLoginSignUp = loginPopup.querySelector('.popup-login__sign-up a');

function loginBlockTab(e) {
  if (document.activeElement === loginCloseButton && e.shiftKey && e.code === 'Tab') {
    e.preventDefault();
    popupLoginSignUp.focus();
  } else if (document.activeElement === popupLoginSignUp && e.code === 'Tab' && !e.shiftKey) {
    e.preventDefault();
    loginCloseButton.focus();
  }
}

login.addEventListener('click', install);
cart.addEventListener('click', install);

/////////////////////////////////////////////////LOGIN


////////////////////////////////////////////////VALIDATION
const mailShape = document.querySelector('.mail-shape');
const mailWrapper = document.querySelector('.mail-shape__input-wrapper');
const loginTemplate = document.querySelector('#popup-login')
  .content.querySelector('.popup-login');
const loginShape = loginTemplate.querySelector('#popup-login-shape');
const loginWrapper = document.querySelector('#popup-login')
  .content.querySelector('.popup-login__enter-mail');
const passwordWrapper = loginTemplate.querySelector('.popup-login__enter-password');

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
  const popupPassword = document.querySelector('#popup-login-password').value;

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

  if (popupPassword === '' || popupPassword.length <= 4) {
    passwordWrapper.classList.add('popup-login__error');
    return false;
  } else {
    passwordWrapper.classList.remove('popup-login__error');
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
const navigationItem = document.querySelectorAll('.page-header__navigation-item');
const navItemArray = Array.from(navigationItem);
const burgerOpenList = document.querySelector('.burger-open__list');
const burgerMenuItems = Array.from(document.querySelectorAll('.burger-open__list-item-wrapper'));
const logoTablet = document.querySelector('.page-header__tablet');
const centerContainer = document.querySelector('.center-container');
const logo = document.querySelector('.page-header__logo');
const loginBlock = document.querySelector('.page-header__login-block');
const burgerButton = document.querySelector('.burger-closed').querySelector('button');
const burgerOpenPanel = document.querySelector('.burger-open__panel');
const burgerList = document.querySelector('.burger-open__list');

function noScroll() {
  window.scrollTo(0, 0);
}

function scrollBurger() {
  if (window.innerHeight < 820) {
    burgerList.style.maxHeight = `${window.innerHeight - 240}px`;
    burgerList.style.overflow = 'scroll';
  }
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
  openBurger();
  setTimeout(() => {
  }, 400);

  setTimeout(() => {
    scrollBurger();
  }, 200);

  window.addEventListener('resize', scrollBurger);

  setTimeout(() => {
    if (burgerList.offsetHeight >= 600) {
      burgerList.style.overflow = 'scroll';
    } else {
      burgerList.style.overflow = 'unset';
    }
  }, 50);

  burgerList.addEventListener('DOMNodeInserted', () => {
    if (burgerList.offsetHeight >= 600) {
      burgerList.style.overflow = 'scroll';
    }
  });

  burgerList.addEventListener('DOMNodeRemoved', () => {
    if (burgerList.offsetHeight < 600) {
      burgerList.style.overflow = 'unset';
    }
  });

  window.addEventListener('scroll', noScroll);
  burgerOpenList.addEventListener('change', checkHeight);

  loginBlock.classList.add('page-header__login-block--change-bag');
  logo.classList.add('page-header__logo--change-color');
  burgerOpen.classList.remove('burger-open__action');

  burgerMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
      centerContainer.classList.remove('center-container--fixed');
      burgerClosed.classList.remove('burger-closed--background-color');
    });
  });
});

burgerOpenPanel.addEventListener('click', () => {
  window.removeEventListener('scroll', noScroll);
  window.removeEventListener('resize', scrollBurger);
  burgerOpenList.removeEventListener('change', checkHeight);
  burgerOpen.classList.add('burger-open__action');
  loginBlock.classList.remove('page-header__login-block--change-bag');
  logo.classList.remove('page-header__logo--change-color');
  burgerButton.focus();
});

const burgerLogin = burgerOpen.querySelector('#burger-login');

burgerLogin.addEventListener('click', install);

//////////////////////////////////////// BURGER MENU

const burgerOpenButton = document.querySelector('#burger-open');

function openBurger() {
  burgerOpen.addEventListener('keydown', trapTabKey);
  setTimeout(() => {
    burgerOpenButton.focus();
  }, 5);

  function trapTabKey(e) {
    if (document.activeElement === burgerOpenButton && e.shiftKey && e.code === 'Tab') {
      e.preventDefault();
      burgerLogin.focus();
    } else if (document.activeElement === burgerLogin && e.code === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      burgerOpenButton.focus();
    }
  }
}


