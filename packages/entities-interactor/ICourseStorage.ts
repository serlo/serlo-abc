import { ISerializedCourse } from './ISerializedCourse';

export interface ICourseStorage {
  getCourse(id: string): Promise<ISerializedCourse>;
}
