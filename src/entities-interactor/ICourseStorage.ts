import { ISerializedCourse } from './ISerializedCourse';

interface ICourseStorage {
  getCourse(id: string): Promise<ISerializedCourse>;
}

export default ICourseStorage;
