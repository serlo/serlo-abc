import { Maybe } from '../../maybe';
import AbstractNode from './AbstractNode';

// A Leaf has an (exercise) type
class Leaf extends AbstractNode {
  private type: string;

  constructor({ type, ...props }: { type: string; id: string }) {
    super(props);

    this.type = type;
  }

  public getNewVocabulary(): Maybe<string[]> {
    const parent = this.getParent();

    if (!parent) {
      return [];
    }

    return parent.getNewVocabulary();
  }

  public getVocabulary(id: string): string[] {
    return [];
  }

  public getNewLetter(): Maybe<string> {
    const parent = this.getParent();
    if (!parent) {
      return undefined;
    }

    return parent.getNewLetter();
  }

  public getLetters(): string[] {
    return [];
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
