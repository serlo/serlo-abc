import { Maybe } from '../../maybe';
import InternalNode from './InternalNode';
import { IIdentifiableObject } from './types';

// An AbstractNode has a required id and optional additional props
abstract class AbstractNode {
  protected words: string[] = [];
  protected letter: Maybe<string>;
  private id: string;
  private props: {};
  private parent?: InternalNode;

  constructor({ id, words, letter, ...props }: IIdentifiableObject) {
    this.id = id;
    this.words = words || [];
    this.letter = letter;
    this.props = props;
  }

  public setParent(parent: InternalNode) {
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

  /**
   * @returns New vocabulary
   */
  public abstract getNewVocabulary(): string[];

  /**
   * @returns New and old vocabulary
   */
  public abstract getVocabulary(id: string): string[];

  /**
   * @returns New letter
   */
  public abstract getNewLetter(): Maybe<string>;

  /**
   * @returns New and old letters
   */
  public abstract getLetters(id: string): string[];

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

  public findEntity(id: string): Maybe<AbstractNode> {
    if (id === this.getId()) {
      return this;
    }

    return undefined;
  }
}

export default AbstractNode;
