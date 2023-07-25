const imgPreview = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const effects = document.querySelectorAll('.effects__radio');
const slider = document.querySelector('.effect-level__slider');

noUiSlider.create(slider, {
  start: 100,
  step: 1,
  range: {
    min: 0,
    max: 100,
  },
});

slider.style.display = 'none';

const changeEffect = (effect, intensity) => {
  switch (effect) {
    case 'chrome':
      imgPreview.style.filter = `grayscale(${intensity})`;
      break;
    case 'sepia':
      imgPreview.style.filter = `sepia(${intensity})`;
      break;
    case 'marvin':
      imgPreview.style.filter = `invert(${intensity * 100}%)`;
      break;
    case 'phobos':
      imgPreview.style.filter = `blur(${intensity * 3}px)`;
      break;
    case 'heat':
      imgPreview.style.filter = `brightness(${intensity * 2 + 1})`;
      break;
    default:
      imgPreview.style.filter = 'none';
      break;
  }
};

const updateSlider = (value) => {
  const selectedEffect = document.querySelector('.effects__radio:checked').value;

  effectLevelValue.textContent = `${Math.round(value)}%`;
  changeEffect(selectedEffect, value / 100);
};

slider.noUiSlider.on('update', (values) => {
  updateSlider(values[0]);
});

effects.forEach((effect) => {
  effect.addEventListener('change', (evt) => {
    const selectedEffect = evt.target.value;

    if (selectedEffect === 'none') {
      imgPreview.style.filter = 'none';
      slider.style.display = 'none';
      effectLevelValue.textContent = '100%';
      return;
    }

    slider.style.display = 'block';
    slider.noUiSlider.set(100);
    updateSlider(100);
  });
});
