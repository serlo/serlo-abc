import AbstractNode from './AbstractNode';
import InternalNode from './InternalNode';
import Leaf from './Leaf';

const isInternalNode = (node: AbstractNode): node is InternalNode => {
  return (node as InternalNode).getChildren !== undefined;
};

export { AbstractNode, InternalNode, Leaf, isInternalNode };
