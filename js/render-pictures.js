import { createPictures } from './create-pictures.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesContainerFragment = document.createDocumentFragment();

const renderPictures = (pictures) => {
  pictures = createPictures();

  pictures.forEach((picture) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__img').alt = picture.description;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;

    picturesContainerFragment.append(pictureElement);
  });
  picturesContainer.append(picturesContainerFragment);
};

renderPictures();
