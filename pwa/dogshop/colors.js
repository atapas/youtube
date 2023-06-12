import { faker } from '@faker-js/faker';

const THRESHOLD = 100;

export const colors = Array.from(Array(THRESHOLD), () => {
  return {
    data: faker.color.rgb()
  };
});