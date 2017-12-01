import AbstractNode from './AbstractNode';
import { Maybe } from '../../maybe';

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

  public getNewLetter(): Maybe<string> {
    const parent = this.getParent();
    if (!parent) {
      return undefined;
    }

    return parent.getNewLetter();
  }

  public getLetters(): string[] {
    const parent = this.getParent();
    if (!parent) {
      return [];
    }

    return parent.getLetters();
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
