import ICourseStorage from './ICourseStorage';
import IProgressStorage from './IProgressStorage';

abstract class AbstractCourseInteractor {
  private storage: ICourseStorage;
  private progress: IProgressStorage;

  constructor(
    storage: ICourseStorage,
    progress: IProgressStorage
  ) {
    this.storage = storage;
    this.progress = progress;
  }

  public abstract loadCourse(id: string): Promise<void>;
}

export default AbstractCourseInteractor;
