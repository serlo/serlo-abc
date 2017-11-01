import { map } from 'ramda';

import { AbstractNode, InternalNode, Leaf } from '../entities/course';

import {
  ISerializedCourse,
  ISerializedInternalNode,
  ISerializedLeaf
} from './ISerializedCourse';

const createCourse = (course: ISerializedCourse): AbstractNode => {
  if ((course as ISerializedInternalNode).children) {
    const { children, ...props } = course as ISerializedInternalNode;

    const entity = new InternalNode({
      ...props,
      children: map(createCourse, children)
    });

    map(child => child.setParent(entity), entity.getChildren());

    return entity;
  }

  const leaf = course as ISerializedLeaf;

  return new Leaf(leaf);
};

export default createCourse;
