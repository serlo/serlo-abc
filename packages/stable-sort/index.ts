import * as R from 'ramda';

export interface Indexed<T> {
  index: number;
  value: T;
}

export const stableSortWith = <T>(
  cmps: Array<(a: T, b: T) => number>,
  array: T[]
): T[] => {
  const indexedArray = R.addIndex<T, Indexed<T>>(R.map)(
    (value, index) => ({ index, value }),
    array
  );
  const indexedCmps = R.map(
    cmp => (a: Indexed<T>, b: Indexed<T>) =>
      cmp(
        R.prop<'value', Indexed<T>>('value', a),
        R.prop<'value', Indexed<T>>('value', b)
      ),
    cmps
  );

  const sortedArray = R.sortWith<Indexed<T>>(
    [...indexedCmps, R.ascend(R.prop('index'))],
    indexedArray
  );

  return R.map(R.prop('value'), sortedArray);
};
