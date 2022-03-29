const gallery = document.querySelector('.goods');
const galleryLine = gallery.querySelector('.goods__inner');
const galleryItems = Array.from(galleryLine.querySelectorAll('.goods__inner div'));

let size = gallery.childElementCount;
let currentSlideWasChanged = false;
let startX = 0;
let width = gallery.getBoundingClientRect().width;
let currentSlide = 0;
let clickX = 0;
let dragX = 0;
let x = currentSlide * width;

galleryLine.addEventListener('pointerdown', startDrag);
window.addEventListener('pointerup', stopDrag);

function startDrag(evt) {
  console.log(evt.pageX);
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


