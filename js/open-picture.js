import { createComments } from './create-comments.js';
import { renderComments } from './render-comments.js';

const picturesCollection = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const socialCaption = document.querySelector('.social__caption');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const localPath = 'http://localhost:3000';

const openPicture = (evt) => {
  bigPictureImg.src = evt.target.src.replace(localPath, '');
  socialCaption.textContent = evt.target.alt;
  likesCount.textContent = evt.target.nextElementSibling.querySelector('.picture__likes').textContent;
  commentsCount.textContent = evt.target.nextElementSibling.querySelector('.picture__comments').textContent;

  renderComments(createComments(commentsCount.textContent));

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

picturesCollection.forEach((picture) => {
  picture.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPicture(evt);
  });
});
