import AbstractNode from './AbstractNode';

// A Leaf has an (exercise) type
class Leaf extends AbstractNode {
  private type: string;

  constructor({ type, ...props }: { type: string; id: string }) {
    super(props);

    this.type = type;
  }

  public getType(): string {
    return this.type;
  }

  public getStructure() {
    return {
      id: this.getId(),
      type: this.getType()
    };
  }
}

export default Leaf;
