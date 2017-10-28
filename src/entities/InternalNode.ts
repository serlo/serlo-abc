import { map } from 'ramda';

import AbstractNode from './AbstractNode';
import { IIdentifiableObject } from './types';

// An InternalNode has children
class InternalNode extends AbstractNode {
  private children: AbstractNode[];
  private title?: string;
  private icon?: string;

  constructor({
    children,
    title,
    icon,
    ...props
  }: {
    children: AbstractNode[];
    title?: string;
    icon?: string;
    id: string;
  }) {
    super(props);

    this.children = children;
    this.title = title;
    this.icon = icon;
  }

  public getTitle(): string | undefined {
    return this.title;
  }

  public getIcon(): string | undefined {
    return this.icon;
  }

  public getStructure() {
    return {
      id: this.getId(),
      title: this.getTitle(),
      icon: this.getIcon()
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
