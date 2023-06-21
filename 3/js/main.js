const DESCRIPTIONS = [
  'Ясный день над океанским побережьем',
  'Дорога к пляжу',
  'Горный хребет в облаках',
  'Детская радость на карусели',
  'Водопад среди зелени',
  'Утренний туман на озере',
  'Песчаные дюны в пустыне',
  'Старинная каменная деревня',
  'Горящий костер под звездами',
  'Дикая природа в лесу',
  'Заброшенная железная дорога',
  'Романтический закат на пляже',
  'Птицы в полете над полями',
  'Игра света в лесу',
  'Луна над городской панорамой',
  'Улочка с фонарями вечером',
  'Планета Земля из космоса',
  'Граффити на городских стенах',
  'Водная лилия на пруду',
  'Ветер в поле подсолнухов',
  'Многоцветные шарики на празднике',
  'Вулкан с дымящимся кратером',
  'Осенний лес в октябре',
  'Велосипедисты на горной тропе',
  'Морская радуга над океаном',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Александр',
  'Екатерина',
  'Михаил',
  'Анна',
  'Дмитрий',
  'Ольга',
  'Иван',
  'Мария',
  'Николай',
  'Алиса',
  'Сергей',
  'Елизавета',
  'Артем',
  'София',
  'Владимир',
  'Анастасия',
  'Андрей',
  'Виктория',
  'Константин',
  'Наталья',
  'Максим',
  'Алёна',
  'Павел',
  'Юлия',
  'Роман',
  'Евгения',
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

const getRandomInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
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
const generatePictureId = createIdGenerator();
const generatePhotoId = createIdGenerator();

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

const createPicture = (_, index) => ({
  id: generatePictureId(),
  url: `photos/${generatePhotoId()}.jpg`,
  description: DESCRIPTIONS[index],
  likes: getRandomInteger(LikesAmount.MIN, LikesAmount.MAX),
  comments: createComments(
    getRandomInteger(CommentsAmount.MIN, CommentsAmount.MAX)
  ),
});

const createPictures = () =>
  Array.from({ length: PICTURES_COUNT }, createPicture);

// eslint-disable-next-line no-console
console.log(createPictures());
