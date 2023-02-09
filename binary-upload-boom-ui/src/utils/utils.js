import { faker } from '@faker-js/faker';

export const buildDogFeedPost = (imageUrl) => {
    const dogName = faker.name.fullName()

    return {
        dogName,
        imageUrl
    }
}