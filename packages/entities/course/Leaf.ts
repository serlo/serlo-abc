import AbstractNode from './AbstractNode';

// A Leaf has an (exercise) type
class Leaf extends AbstractNode {
  private type: string;

  constructor({ type, ...props }: { type: string; id: string }) {
    super(props);

    this.type = type;
  }

  public getNewVocabulary() {
    const parent = this.getParent();

    if (!parent) {
      return [];
    }

    return parent.getNewVocabulary();
  }

  public getVocabulary() {
    const parent = this.getParent();

    if (!parent) {
      return [];
    }

    return parent.getVocabulary();
  }

  public getType(): string {
    return this.type;
  }

  public getStructure() {
    return {
      ...super.getStructure(),
      type: this.getType()
    };
  }
}

export default Leaf;
