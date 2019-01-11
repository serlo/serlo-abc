import AbstractCourseInteractor from './AbstractCourseInteractor';
import { ICourseStorage } from './ICourseStorage';
import { IProgressStorage } from './IProgressStorage';

abstract class AbstractCourseInteractorLoader {
  constructor(
    protected storage: ICourseStorage,
    protected progressStorage: IProgressStorage
  ) {}

  /* tslint:disable-next-line:no-any */
  public abstract loadCourse(id: string): Promise<AbstractCourseInteractor>;
}

export default AbstractCourseInteractorLoader;
