import { createComments } from './create-comments.js';
import { renderComments } from './render-comments.js';

const commentsCount = document.querySelector('.comments-count');
let onCommentsLoaderClick;
let commentsTotalCount = commentsCount.textContent;

const loadMoreComments = (comments) => {
  const bigPicture = document.querySelector('.big-picture');
  const socialCommentCount = bigPicture.querySelector('.social__comment-count');
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  let counter = 5;

  onCommentsLoaderClick = () => {
    counter += 5;

    if (counter >= commentsTotalCount) {
      counter = commentsTotalCount;
      commentsLoader.classList.add('hidden');
    }
    socialCommentCount.textContent = `${counter} out of ${commentsTotalCount} comments`;
    renderComments(comments.slice(0, counter));
  };

  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

const openPicture = (evt) => {
  const LOCAL_PATH = 'http://localhost:3000';
  const bigPicture = document.querySelector('.big-picture');
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  const socialCaption = bigPicture.querySelector('.social__caption');
  const likesCount = bigPicture.querySelector('.likes-count');
  const socialCommentCount = bigPicture.querySelector('.social__comment-count');
  const commentsLoader = bigPicture.querySelector('.comments-loader');

  bigPictureImg.src = evt.target.src.replace(LOCAL_PATH, '');
  socialCaption.textContent = evt.target.alt;
  likesCount.textContent = evt.target.nextElementSibling.querySelector('.picture__likes').textContent;
  commentsTotalCount = evt.target.nextElementSibling.querySelector('.picture__comments').textContent;

  const comments = createComments(commentsTotalCount);
  renderComments(comments.slice(0, 5));
  loadMoreComments(comments);

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

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const onPicturesCollectionClick = () => {
  const picturesCollection = document.querySelectorAll('.picture');

  picturesCollection.forEach((picture) => {
    picture.addEventListener('click', (evt) => {
      evt.preventDefault();
      openPicture(evt);
    });
  });
};

onPicturesCollectionClick();

export { onCommentsLoaderClick };
