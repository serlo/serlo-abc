import { Optional } from '../../src/types';
import ICourseStorage from './ICourseStorage';
import { ICourseStructure } from './ICourseStructure';
import IProgressStorage from './IProgressStorage';

abstract class AbstractCourseInteractor {
  constructor(
    protected storage: ICourseStorage,
    protected progressStorage: IProgressStorage
  ) {}

  /* tslint:disable-next-line:no-any */
  public abstract loadCourse(id: string): Promise<any>;
  public abstract getStructure(level?: number): ICourseStructure;
  public abstract getNextChild(id: string): Optional<ICourseStructure>;
  public abstract getNextSibling(id: string): Optional<ICourseStructure>;
  public abstract findEntity(id: string): Optional<ICourseStructure>;
}

export default AbstractCourseInteractor;
