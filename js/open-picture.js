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
let commentsTotalCount = commentsCount.textContent;

const onCommentsLoaderClick = (comments) => {
  let counter = 5;

  commentsLoader.addEventListener('click', () => {
    counter += 5;

    if (counter >= commentsTotalCount) {
      counter = commentsTotalCount;
      commentsLoader.classList.add('hidden');
    }
    socialCommentCount.textContent = `${counter} out of ${commentsTotalCount} comments`;
    renderComments(comments.slice(0, counter));
  });
};

const openPicture = (evt) => {
  bigPictureImg.src = evt.target.src.replace(localPath, '');
  socialCaption.textContent = evt.target.alt;
  likesCount.textContent = evt.target.nextElementSibling.querySelector('.picture__likes').textContent;
  commentsTotalCount = evt.target.nextElementSibling.querySelector('.picture__comments').textContent;

  const comments = createComments(commentsTotalCount);
  renderComments(comments.slice(0, 5));

  if (commentsTotalCount === '0') {
    socialCommentCount.textContent = '';
    commentsLoader.classList.add('hidden');
  } else if (commentsTotalCount === '1') {
    socialCommentCount.textContent = `${commentsTotalCount} comment`;
    commentsLoader.classList.add('hidden');
  } else if (commentsTotalCount <= 5) {
    socialCommentCount.textContent = `${commentsTotalCount} comments`;
    commentsLoader.classList.add('hidden');
  } else {
    socialCommentCount.textContent = `5 out of ${commentsTotalCount} comments`;
    commentsLoader.classList.remove('hidden');
  }

  onCommentsLoaderClick(comments);

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

picturesCollection.forEach((picture) => {
  picture.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPicture(evt);
  });
});
