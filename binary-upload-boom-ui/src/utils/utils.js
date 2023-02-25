import {faker} from '@faker-js/faker';

export const buildDogFeedPost = (imageUrl, i) => {
  const dogName = faker.name.fullName();

  return {
    id: i,
    dogName,
    imageUrl,
  };
};
