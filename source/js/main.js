import './slider.js';
import './accordion.js';
import './burger-menu.js';
import './swiper.js';

// if (window.local.pathname === '/catalog.html') {

// } else if (window.local.pathname === '/main.html') {

// }

// const slider = document.querySelector('.goods'),
//   menuItem = Array.from(document.querySelectorAll('.goods__card'));

// let isDragging = false,
//   startPos = 0,
//   currentTranslate = 0,
//   prevTranslate = 0,
//   animationID = 0,
//   currentIndex = 0;

// function checkSliderStyle() {
//   return slider.style.transform;
// }

// console.log(slider);
// console.log(menuItem);

// menuItem.forEach((slide, index) => {

//   //Touch events
//   slide.addEventListener('touchstart', touchStart(index));
//   slide.addEventListener('touchend', touchEnd);
//   slide.addEventListener('touchmove', touchMove);


//   //Mouse events
//   slide.addEventListener('mousedown', touchStart(index));
//   slide.addEventListener('mouseup', touchEnd);
//   slide.addEventListener('mouseleave', touchEnd);
//   slide.addEventListener('mousemove', touchMove);
// });

// function touchStart(index) {
//   return function(event) {
//     currentIndex = index;
//     startPos = getPositionX(event);
//     isDragging = true;
//     animationID = requestAnimationFrame(animation);
//   };
// }

// function touchEnd() {
//   isDragging = false;
// }

// function touchMove(event) {
//   if (isDragging) {
//     const currentPostiton = getPositionX(event);
//     currentTranslate = prevTranslate + currentPostiton - startPos;
//     console.log(currentTranslate);
//   }
// }

// function getPositionX(event) {
//   return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
// }

// function animation() {
//   setSliderPosition();
//   if (isDragging) {
//     requestAnimationFrame(animation);
//   }
// }

// function setSliderPosition() {
//   if (currentTranslate > 3400) {
//     currentTranslate = 0;
//   }
//   slider.style.transform = `translateX(${currentTranslate * 43}px)`;
// }
