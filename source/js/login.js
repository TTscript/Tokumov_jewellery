const loginPopup = document.querySelector('#popup-login').content.querySelector('.popup-login');
const login = document.querySelector('#login a');
const bodyTag = document.querySelector('.page-body');
const loginCloseButton = loginPopup.querySelector('.popup-login__close-button');


const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const createPopup = () => {
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
  createPopup();
  setTimeout(() => {
    closePopup();
  }, 250);
}

login.addEventListener('click', install);
