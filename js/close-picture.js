const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const isEscapeKey = (evt) => evt.key === 'Escape';

const closePicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePicture();
  }
});

bigPictureCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePicture();
});
