import { compose, find, map } from 'ramda';

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

  public getChildren(): AbstractNode[] {
    return this.children;
  }

  public getStructure() {
    return {
      ...super.getStructure(),
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

  public findEntity(id: string): AbstractNode | null {
    const entity = super.findEntity(id);

    if (entity) {
      return entity;
    }

    const recursiveFind = map(child => child.findEntity(id), this.children);
    const foundEntity = find(found => !!found, recursiveFind);

    return foundEntity || null;
  }
}

export default InternalNode;
