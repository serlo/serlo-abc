import AbstractCourseInteractorLoader from './AbstractCourseInteractorLoader';
import createCourse from './CourseFactory';
import CourseInteractor from './CourseInteractor';

class CourseInteractorLoader extends AbstractCourseInteractorLoader {
  public loadCourse(id: string) {
    return Promise.all([
      this.storage.getCourse(id),
      this.progressStorage.getProgress(id)
    ]).then(([course, progress]) => {
      return new CourseInteractor(
        id,
        createCourse(course),
        this.progressStorage,
        progress
      );
    });
  }
}

export default CourseInteractorLoader;
