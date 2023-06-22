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

const MESSAGES = [
  'Everything is great!',
  'Overall, not bad. But not everything.',
  "When taking a photo, it would be good to remove your finger from the frame. After all, it's just unprofessional.",
  'My grandmother accidentally sneezed while holding the camera, and she took a better photo than this.',
  'I slipped on a banana peel and dropped the camera on a cat, and I took a better photo than this.',
  "People's faces in the picture are distorted as if they are being beaten. How could you capture such an unfortunate moment?!",
];

const NAMES = [
  'Emma',
  'Liam',
  'Olivia',
  'Noah',
  'Ava',
  'Sophia',
  'Isabella',
  'Mia',
  'Charlotte',
  'Amelia',
  'Harper',
  'Evelyn',
  'Abigail',
  'Emily',
  'Elizabeth',
  'Mila',
  'Ella',
  'Avery',
  'Sofia',
  'Camila',
  'Luna',
  'Aria',
  'Scarlett',
  'Penelope',
  'Layla',
];

const PICTURES_COUNT = 25;

const AvatarAmount = {
  MIN: 1,
  MAX: 6,
};

const CommentsAmount = {
  MIN: 0,
  MAX: 30,
};

const LikesAmount = {
  MIN: 15,
  MAX: 200,
};

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || min > max) {
    return NaN;
  }

  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(
    AvatarAmount.MIN,
    AvatarAmount.MAX
  )}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createComments = (length) => Array.from({ length }, createComment);

const createPicture = (_, index) => {
  const idNumber = index + 1;

  return {
    id: idNumber,
    url: `photos/${idNumber}.jpg`,
    description: DESCRIPTIONS[index],
    likes: getRandomInteger(LikesAmount.MIN, LikesAmount.MAX),
    comments: createComments(
      getRandomInteger(CommentsAmount.MIN, CommentsAmount.MAX)
    ),
  };
};

const createPictures = () =>
  Array.from({ length: PICTURES_COUNT }, createPicture);

// eslint-disable-next-line no-console
console.log(createPictures());
