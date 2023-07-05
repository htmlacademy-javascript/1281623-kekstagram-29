import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const MESSAGES = [
  'Everything is great!',
  'Overall, not bad. But not everything.',
  // prettier-ignore
  'When taking a photo, it would be good to remove your finger from the frame. After all, it\'s just unprofessional.',
  'My grandmother accidentally sneezed while holding the camera, and she took a better photo than this.',
  'I slipped on a banana peel and dropped the camera on a cat, and I took a better photo than this.',
  // prettier-ignore
  'People\'s faces in the picture are distorted as if they are being beaten. How could you capture such an unfortunate moment?!',
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

const AvatarAmount = {
  MIN: 1,
  MAX: 6,
};

const generateCommentId = createIdGenerator();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AvatarAmount.MIN, AvatarAmount.MAX)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createComments = (length) => Array.from({ length }, createComment);

export { createComments };
