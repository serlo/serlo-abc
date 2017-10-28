import { IIdentifiableObject } from './types';

// An AbstractNode has a required id and optional additional props
abstract class AbstractNode {
  private id: string;
  private props: {};

  constructor({ id, ...props }: IIdentifiableObject) {
    this.id = id;
    this.props = props;
  }

  public getId() {
    return this.id;
  }

  public getProps() {
    return this.props;
  }

  public getStructure(): IIdentifiableObject {
    return {
      id: this.getId()
    };
  }

  public getInfo(): IIdentifiableObject {
    return {
      ...this.getStructure(),
      ...this.props
    };
  }

  public getTree(level: number = Infinity): IIdentifiableObject {
    return this.getStructure();
  }
}

export default AbstractNode;
