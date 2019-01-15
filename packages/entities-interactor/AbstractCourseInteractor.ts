import { Optional } from '../../src/types';
import { AbstractNode } from '../entities/course';
import { ICourseStructure } from './ICourseStructure';
import { IProgressStorage } from './IProgressStorage';
import { ISerializedProgress } from './ISerializedProgress';

abstract class AbstractCourseInteractor {
  constructor(
    protected course: AbstractNode,
    protected progressStorage: IProgressStorage,
    protected initialProgress: ISerializedProgress
  ) {}

  /* tslint:disable-next-line:no-any */
  public abstract getStructure(level?: number): ICourseStructure;
  public abstract getNextChild(id: string): Optional<ICourseStructure>;
  public abstract getNextSibling(id: string): Optional<ICourseStructure>;
  public abstract findEntity(id: string): Optional<ICourseStructure>;
}

export default AbstractCourseInteractor;
