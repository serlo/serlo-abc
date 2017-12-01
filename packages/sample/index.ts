import { remove } from 'ramda';

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const sample = <T>(
  collection: T[],
  count: number,
  replace = false
): T[] => {
  if (count <= 0 || collection.length <= 0) {
    return [];
  }

  const index = getRandomInt(0, collection.length);

  return [
    collection[index],
    ...sample(
      replace ? collection : remove(index, 1, collection),
      count - 1,
      replace
    )
  ];
};
