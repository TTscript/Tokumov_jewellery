
const filter = document.querySelector('.filter');
const filterFieldsets = Array.from(filter.querySelectorAll('fieldset'));
const filterProduct = filter.querySelector('.product');
const filterProductItems = filterProduct.querySelectorAll('div');
const filterMaterial = filter.querySelector('.material');
const filterMaterialItems = filterMaterial.querySelectorAll('div');
const filterCollection = filter.querySelector('.collection');
const filterCollectionItems = filterCollection.querySelectorAll('div');
const filterPrice = filter.querySelector('.price');
const filterPriceItem = filterPrice.querySelector('div');

function hideFilterItems(items) {
  items.forEach((item) => {
    item.classList.add('filter--display-none');
  });
}

hideFilterItems(filterMaterialItems);
hideFilterItems(filterCollectionItems);

filterProduct.addEventListener('click', () => {
  filterProductItems.forEach((item) => {
    item.classList.toggle('filter--display-none');
  });
});

filterMaterial.addEventListener('click', () => {
  filterMaterial.classList.toggle('material--rotate-arrow');
  filterMaterialItems.forEach((item) => {
    item.classList.toggle('filter--display-none');
  });
});

filterCollection.addEventListener('click', () => {
  filterCollection.classList.toggle('collection--rotate-arrow');
  filterCollectionItems.forEach((item) => {
    item.classList.toggle('filter--display-none');
  });
});

filterPrice.addEventListener('click', () => {
  filterPriceItem.classList.toggle('filter--display-none');
});
