import { addIndex, ascend, map, prop, sortWith } from 'ramda';

const mapIndexed = addIndex(map);

export interface Indexed<T> {
  index: number;
  value: T;
}

export const stableSortWith = <T>(
  cmps: Array<(a: T, b: T) => number>,
  array: T[]
): T[] => {
  const indexedArray = mapIndexed((value, index) => ({ index, value }), array);
  const indexedCmps = map(
    cmp => (a: Indexed<T>, b: Indexed<T>) =>
      cmp(prop('value', a), prop('value', b)),
    cmps
  );

  const sortedArray = sortWith<Indexed<T>>(
    [...indexedCmps, ascend(prop('index'))],
    indexedArray
  );

  return map(prop('value'), sortedArray);
};
