import * as R from 'ramda';

import { stableSortWith } from '.';

const clara = {
  name: 'clara',
  age: 40
};
const bob = {
  name: 'bob',
  age: 30
};
const alice = {
  name: 'alice',
  age: 40
};

const people = [clara, bob, alice];

it('returns the array if no comparator is given', () => {
  expect(stableSortWith([], people)).toEqual(people);
});

it('stable sorts the array if one comparator is given', () => {
  const cmp = R.ascend(R.prop('age'));

  expect(stableSortWith([cmp], people)).toEqual([bob, clara, alice]);
});
