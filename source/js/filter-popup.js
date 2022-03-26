const filterPopup = document.querySelector('#popup-filter').content.querySelector('.popup-filter');
const bodyTag = document.querySelector('.page-body');
const filterProduct = filterPopup.querySelector('.product');
const filterProductItems = filterProduct.querySelectorAll('div');
const filterMaterial = filterPopup.querySelector('.material');
const filterMaterialItems = filterMaterial.querySelectorAll('div');
const filterCollection = filterPopup.querySelector('.collection');
const filterCollectionItems = filterCollection.querySelectorAll('div');
const filterPrice = filterPopup.querySelector('.price');
const filterPriceItem = filterPrice.querySelector('div');
const filterButton = document.querySelector('#filter-button');
const popupCloseButton = filterPopup.querySelector('#filter-close-button');
const popupFilterInputs = filterPopup.querySelectorAll('input');
const popupResetButton = filterPopup.querySelector('#popup-filter-reset');

//POPUP
function hidePopupFilterItems(items) {
  items.forEach((item) => {
    item.classList.add('popup-filter--display-none');
  });
}

hidePopupFilterItems(filterMaterialItems);
hidePopupFilterItems(filterCollectionItems);

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const createPopup = () => {
  const popup = filterPopup.cloneNode(true);
  bodyTag.appendChild(filterPopup);
  filterPopup.classList.add('popup-filter--appear');
  return popup;
};

const closePopupClick = () => {
  filterPopup.remove();
  popupCloseButton.removeEventListener('click', closePopupClick);
};

const closePopupEsc = (evt) => {
  if (isEscEvent(evt)) {
    filterPopup.remove();
  }
  window.removeEventListener('keydown', closePopupEsc);
};

const closePopupOverlay = (evt) => {
  if (evt.target === filterPopup) {
    filterPopup.remove();
    window.removeEventListener('click', closePopupOverlay);
  }
};

const closePopup = () => {
  popupCloseButton.addEventListener('click', closePopupClick);
  window.addEventListener('keydown', closePopupEsc);
  window.addEventListener('click', closePopupOverlay);
};

function install() {
  createPopup();
  setTimeout(() => {
    closePopup();
  }, 250);
}

filterButton.addEventListener('click', install);
popupResetButton.addEventListener('click', () => {
  popupFilterInputs.forEach((item) => {
    item.checked = false;
  });
});

filterProduct.addEventListener('click', () => {
  filterProduct.classList.toggle('product--rotate-arrow');
  filterProductItems.forEach((item) => {
    item.classList.toggle('popup-filter--display-none');
  });
});

filterMaterial.addEventListener('click', () => {
  filterMaterial.classList.toggle('material--rotate-arrow');
  filterMaterialItems.forEach((item) => {
    item.classList.toggle('popup-filter--display-none');
  });
});

filterCollection.addEventListener('click', () => {
  filterCollection.classList.toggle('collection--rotate-arrow');
  filterCollectionItems.forEach((item) => {
    item.classList.toggle('popup-filter--display-none');
  });
});

filterPrice.addEventListener('click', () => {
  filterPrice.classList.toggle('price--rotate-arrow');
  filterPriceItem.classList.toggle('popup-filter--display-none');
});
