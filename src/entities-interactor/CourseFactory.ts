import { map } from 'ramda';

import { AbstractNode, InternalNode, Leaf } from '../entities';

import {
  ISerializedCourse,
  ISerializedInternalNode,
  ISerializedLeaf
} from './ISerializedCourse';

const createCourse = (course: ISerializedCourse): AbstractNode => {
  if ((course as ISerializedInternalNode).children) {
    const { children, ...props } = course as ISerializedInternalNode;

    return new InternalNode({
      ...props,
      children: map(createCourse, children)
    });
  }

  const leaf = course as ISerializedLeaf;

  return new Leaf(leaf);
};

export default createCourse;
