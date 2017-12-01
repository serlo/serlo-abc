import { find, filter, flatten, map, takeWhile } from 'ramda';

import { Optional } from '../../../src/types';
import AbstractNode from './AbstractNode';
import { IIdentifiableObject } from './types';
import { Maybe } from '../../maybe/maybe';

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

  public getTitle(): Optional<string> {
    return this.title;
  }

  public getIcon(): Optional<string> {
    return this.icon;
  }

  public getChildren(): AbstractNode[] {
    return this.children;
  }

  public getNewVocabulary() {
    return this.words;
  }

  public getVocabulary() {
    const parent = this.getParent();

    if (!parent) {
      return this.words;
    }

    const siblings: AbstractNode[] = [
      ...takeWhile(node => node.getId() !== this.getId(), parent.getChildren()),
      this as AbstractNode
    ];

    return flatten<string>(map(node => node.getNewVocabulary(), siblings));
  }

  public getNewLetter(): Maybe<string> {
    return this.letter;
  }

  public getLetters(): string[] {
    const parent = this.getParent();

    if (!parent) {
      return this.letter ? [this.letter] : [];
    }

    const siblings: AbstractNode[] = [
      ...takeWhile(node => node.getId() !== this.getId(), parent.getChildren()),
      this as AbstractNode
    ];

    //@ts-ignore TODO:FIXME
    return filter(node => !!node, map(node => node.getNewLetter(), siblings));
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

  public findEntity(id: string): Optional<AbstractNode> {
    const entity = super.findEntity(id);

    if (entity) {
      return entity;
    }

    const recursiveFind = map(child => child.findEntity(id), this.children);
    return find(found => typeof found !== 'undefined', recursiveFind);
  }
}

export default InternalNode;
