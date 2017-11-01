import { Optional } from '../../src/types';
import ICourseStorage from './ICourseStorage';
import { ICourseStructure } from './ICourseStructure';
import IProgressStorage from './IProgressStorage';

abstract class AbstractCourseInteractor {
  protected storage: ICourseStorage;
  protected progress: IProgressStorage;

  constructor(storage: ICourseStorage, progress: IProgressStorage) {
    this.storage = storage;
    this.progress = progress;
  }

  public abstract loadCourse(id: string): Promise<void>;
  public abstract getStructure(level?: number): ICourseStructure;
  public abstract getNextChild(id: string): Optional<ICourseStructure>;
  public abstract getNextSibling(id: string): Optional<ICourseStructure>;
  public abstract findEntity(id: string): Optional<ICourseStructure>;
}

export default AbstractCourseInteractor;
