import {
  ICourseStorage,
  ISerializedCourse
} from '../../packages/entities-interactor';

class CourseStorage implements ICourseStorage {
  private courses: { [propName: string]: ISerializedCourse };

  constructor(courses: { [propName: string]: ISerializedCourse }) {
    this.courses = courses;
  }

  public getCourse(id: string) {
    return new Promise<ISerializedCourse>((resolve, reject) => {
      if (this.courses[id]) {
        resolve(this.courses[id]);
      }

      reject(new Error(`There exists no course with id ${id}`));
    });
  }
}

export default CourseStorage;
