import { getRandomInteger } from './util.js';

const DESCRIPTIONS = [
  'Sunset over the ocean.',
  'Blooming spring garden.',
  'Mountain range in the clouds.',
  'Childhood joy on a carousel.',
  'Waterfall amidst greenery.',
  'Morning mist on the lake.',
  'Sand dunes in the desert.',
  'Ancient stone village.',
  'Bonfire under the stars.',
  'Wild nature in the forest.',
  'Abandoned railway tracks.',
  'Romantic sunset on the beach.',
  'Birds in flight over fields.',
  'Play of light in the woods.',
  'Moon over city skyline.',
  'Street with lanterns at night.',
  'Planet Earth from space.',
  'Graffiti on urban walls.',
  'Water lily on a pond.',
  'Wind in a sunflower field.',
  'Colorful balloons at a celebration.',
  'Volcano with a smoking crater.',
  'Autumn forest in October.',
  'Cyclists on a mountain trail.',
  'Ocean rainbow.',
];

const PICTURES_COUNT = 25;

const CommentsAmount = {
  MIN: 0,
  MAX: 30,
};

const LikesAmount = {
  MIN: 15,
  MAX: 200,
};

const createPicture = (_, index) => {
  const idNumber = index + 1;

  return {
    id: idNumber,
    url: `photos/${idNumber}.jpg`,
    description: DESCRIPTIONS[index],
    comments: getRandomInteger(CommentsAmount.MIN, CommentsAmount.MAX),
    likes: getRandomInteger(LikesAmount.MIN, LikesAmount.MAX),
  };
};

const createPictures = () => Array.from({ length: PICTURES_COUNT }, createPicture);

export { createPictures };
