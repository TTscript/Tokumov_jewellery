const gallery = document.querySelector('.goods');
const galleryLine = gallery.querySelector('.goods__inner');
const galleryItems = Array.from(galleryLine.querySelectorAll('.goods__inner div'));

let width = gallery.getBoundingClientRect().width;
let currentSlide = 0;
let clickX = 0;
let dragX = 0;
let x = currentSlide * width;

galleryLine.addEventListener('pointerdown', startDrag);
window.addEventListener('click', stopDrag);

function startDrag(evt) {
  console.log(evt.pageX);
  clickX = evt.pageX;
  window.addEventListener('pointermove', dragging);
}

function stopDrag() {
  window.removeEventListener('pointermove', dragging);
}

function dragging(evt) {
  dragX = evt.pageX;
  const dragShift = dragX - clickX;
  x = dragShift;

  setStylePosition(dragShift);
}

function setStylePosition(shift) {
  galleryLine.style.transform = `translate3d(${x}px, 0, 0)`;
}
