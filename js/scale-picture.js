const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');

let currentValue = 1.0;

const setScale = (scaleValue) => {
  const imagePreview = document.querySelector('.img-upload__preview img');

  imagePreview.style.transform = `scale(${scaleValue})`;
};

const updateValueAndScale = (step) => {
  const scaleValueInput = document.querySelector('.scale__control--value');

  currentValue += step;
  currentValue = Math.max(0.25, Math.min(1.0, currentValue));
  scaleValueInput.value = `${Math.round(currentValue * 100)}%`;
  setScale(currentValue);
};

smallerButton.addEventListener('click', () => {
  updateValueAndScale(-0.25);
});

biggerButton.addEventListener('click', () => {
  updateValueAndScale(0.25);
});
