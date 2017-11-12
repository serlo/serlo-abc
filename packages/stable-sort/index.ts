import * as R from 'ramda';

const mapIndexed = R.addIndex(R.map);

export interface Indexed<T> {
  index: number;
  value: T;
}

export const stableSortWith = <T>(
  cmps: Array<(a: T, b: T) => number>,
  array: T[]
): T[] => {
  const indexedArray = mapIndexed((value, index) => ({ index, value }), array);
  const indexedCmps = R.map(
    cmp => (a: Indexed<T>, b: Indexed<T>) =>
      cmp(R.prop<'value', T>('value', a), R.prop<'value', T>('value', b)),
    cmps
  );

  const sortedArray = R.sortWith<Indexed<T>>(
    [...indexedCmps, R.ascend(R.prop('index'))],
    indexedArray
  );

  return R.map(R.prop('value'), sortedArray);
};
