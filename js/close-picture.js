import { onCommentsLoaderClick } from './open-picture.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

const closePicture = () => {
  const bigPicture = document.querySelector('.big-picture');
  const commentsLoader = bigPicture.querySelector('.comments-loader');

  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
};

const onDocumentKeydownEscape = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closePicture();
    }
  });
};

onDocumentKeydownEscape();

const onBigPictureCancelClick = () => {
  const bigPicture = document.querySelector('.big-picture');
  const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

  bigPictureCancel.addEventListener('click', (evt) => {
    evt.preventDefault();
    closePicture();
  });
};

onBigPictureCancelClick();
