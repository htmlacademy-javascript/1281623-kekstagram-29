const HASTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const HASTAG_MAX_LENGTH = 20;
const HASTAGS_MAX_COUNT = 5;
const COMMENT_MAX_LENGTH = 140;

const imgUploadForm = document.querySelector('.img-upload__form');
const hashtagsInput = imgUploadForm.querySelector('.text__hashtags');
const commentTextarea = imgUploadForm.querySelector('.text__description');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

const validateHashtags = function (value) {
  const hashtags = value.split(' ');

  if (value === '') {
    return true;
  }
  return hashtags.every((hashtag) => HASTAG_REGEX.test(hashtag));
};

pristine.addValidator(hashtagsInput, validateHashtags, 'Hashtags contain invalid characters');


const validateHashtagsLength = function (value) {
  const hashtags = value.split(' ');

  return hashtags.every((hashtag) => hashtag.length <= HASTAG_MAX_LENGTH);
};

pristine.addValidator(hashtagsInput, validateHashtagsLength, 'Hashtag length cannot exceed 20 characters');


const validateHashtagsUnique = function (value) {
  const hashtags = value.toLowerCase().split(' ');
  const uniqueHashtags = new Set(hashtags);

  return uniqueHashtags.size === hashtags.length;
};

pristine.addValidator(hashtagsInput, validateHashtagsUnique, 'Hashtags must be unique');


const validateHashtagsCount = function (value) {
  const hashtags = value.split(' ');

  return hashtags.length <= HASTAGS_MAX_COUNT;
};

pristine.addValidator(hashtagsInput, validateHashtagsCount, 'No more than 5 hashtags');


const validateComment = (value) => value.length < COMMENT_MAX_LENGTH;

pristine.addValidator(commentTextarea, validateComment, 'No more than 140 characters');


imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate(hashtagsInput) && pristine.validate(commentTextarea)) {
    return true;
  }
});
