import { IIdentifiableObject } from './types';

// An AbstractNode has a required id and optional additional props
abstract class AbstractNode {
  private id: string;
  private props: {};
  private parent?: AbstractNode;

  constructor({ id, ...props }: IIdentifiableObject) {
    this.id = id;
    this.props = props;
  }

  public setParent(parent: AbstractNode) {
    this.parent = parent;
  }

  public getId() {
    return this.id;
  }

  public getProps() {
    return this.props;
  }

  public getParent() {
    return this.parent;
  }

  public getStructure(): IIdentifiableObject {
    const parent = this.getParent();

    return {
      id: this.getId(),
      parent: parent && parent.getId()
    };
  }

  public getInfo(): IIdentifiableObject {
    return {
      ...this.getStructure(),
      props: this.props
    };
  }

  public getTree(level: number = Infinity): IIdentifiableObject {
    return this.getStructure();
  }

  public findEntity(id: string): AbstractNode | null {
    if (id === this.getId()) {
      return this;
    }

    return null;
  }
}

export default AbstractNode;
