import { createPictures } from './create-pictures.js';

const renderPictures = (pictures) => {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const picturesContainerFragment = document.createDocumentFragment();

  pictures = createPictures();

  pictures.forEach(({ url, description, comments, likes }) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    picturesContainerFragment.append(pictureElement);
  });
  picturesContainer.append(picturesContainerFragment);
};

renderPictures();
