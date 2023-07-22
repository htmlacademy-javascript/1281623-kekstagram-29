import { isEscapeKey } from './util.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const hashtagsInput = imgUploadForm.querySelector('.text__hashtags');
const descriptionTextarea = imgUploadForm.querySelector('.text__description');

const openForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeForm = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUploadForm.reset();
};

imgUploadInput.addEventListener('change', () => {
  openForm();
});

imgUploadCancel.addEventListener('click', () => {
  closeForm();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt) && descriptionTextarea !== document.activeElement && hashtagsInput !== document.activeElement) {
    evt.preventDefault();
    closeForm();
    return;
  }

  evt.stopPropagation();
});


