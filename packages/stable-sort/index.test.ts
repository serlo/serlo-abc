import * as R from 'ramda';

import { stableSortWith } from '.';

interface Person {
  name: string;
  age: number;
}

const clara: Person = {
  name: 'clara',
  age: 40
};
const bob: Person = {
  name: 'bob',
  age: 30
};
const alice: Person = {
  name: 'alice',
  age: 40
};

const people = [clara, bob, alice];

it('returns the array if no comparator is given', () => {
  expect(stableSortWith([], people)).toEqual(people);
});

it('stable sorts the array if one comparator is given', () => {
  const cmp = R.ascend<Person>(R.prop('age'));

  expect(stableSortWith([cmp], people)).toEqual([bob, clara, alice]);
});
