import { AbstractNode } from '../entities';
import AbstractCourseInteractor from './AbstractCourseInteractor';
import createCourse from './CourseFactory';
import { ICourseStructure } from './ICourseStructure';

class CourseInteractor extends AbstractCourseInteractor {
  private course: AbstractNode;

  public loadCourse(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.storage
        .getCourse(id)
        .then(course => {
          this.course = createCourse(course);
          resolve();
        })
        .catch(reject);
    });
  }

  public getStructure(level = Infinity) {
    return this.course.getTree(level) as ICourseStructure;
  }
}

export default CourseInteractor;
