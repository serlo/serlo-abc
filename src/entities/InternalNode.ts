import { map } from 'ramda';

import AbstractNode from './AbstractNode';
import { IIdentifiableObject } from './types';

// An InternalNode has children
class InternalNode extends AbstractNode {
  private children: AbstractNode[];
  private title: string;

  constructor({
    children,
    title,
    ...props
  }: {
    children: AbstractNode[];
    title?: string;
    id: string;
  }) {
    super(props);

    this.children = children;
    this.title = title || '';
  }

  public getTitle(): string {
    return this.title;
  }

  public getStructure() {
    return {
      id: this.getId(),
      title: this.getTitle()
    };
  }

  public getTree(level: number = Infinity): IIdentifiableObject {
    if (level <= 0) {
      return this.getStructure();
    }

    return {
      ...this.getStructure(),
      children: map(child => child.getTree(level - 1), this.children)
    };
  }
}

export default InternalNode;
