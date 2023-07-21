const renderComments = (comments) => {
  const commentsContainer = document.querySelector('.social__comments');
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  const commentsContainerFragment = document.createDocumentFragment();

  comments.forEach(({ avatar, name, message }) => {
    const commentElement = commentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;

    commentsContainerFragment.append(commentElement);
  });
  commentsContainer.innerHTML = '';
  commentsContainer.append(commentsContainerFragment);
};

export { renderComments };
