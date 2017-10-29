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
  public abstract getNextChild(id: string): ICourseStructure | null;
  public abstract getNextSibling(id: string): ICourseStructure | null;
  public abstract findEntity(id: string): ICourseStructure | null;
}

export default AbstractCourseInteractor;
