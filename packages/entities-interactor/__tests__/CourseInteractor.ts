/* tslint:disable:max-classes-per-file */
import Interactor from '../CourseInteractor';
import ICourseStorage from '../ICourseStorage';
import IProgressStorage from '../IProgressStorage';
import { ISerializedCourse } from '../ISerializedCourse';
import ISerializedProgress, { Progress } from '../ISerializedProgress';

const courses: { [propName: string]: ISerializedCourse } = {
  '09438926-b170-4005-a6e8-5dd8fba83cde': {
    id: '09438926-b170-4005-a6e8-5dd8fba83cde',
    title: 'Foo bar',
    children: [
      {
        id: '01f23c2a-b681-43db-9d27-5d8d59f62aed',
        children: [
          {
            id: '23e20d5b-ad8e-41be-9891-5ca7b12675c4',
            type: 'foo'
          }
        ]
      },
      {
        id: 'e194f80b-7312-43a2-995e-060f64631782',
        children: [
          {
            id: '84fdc1a1-e3bf-4a87-8360-0c3b7beec179',
            foo: 'bar',
            type: 'foo'
          }
        ]
      }
    ]
  }
};

const progresses: { [propName: string]: ISerializedProgress } = {};

class MockCourseStorage implements ICourseStorage {
  public getCourse(id: string) {
    return new Promise<ISerializedCourse>((resolve, reject) => {
      if (courses[id]) {
        resolve(courses[id]);
      }

      reject(new Error(`There exists no course with id ${id}`));
    });
  }
}

class MockProgressStorage implements IProgressStorage {
  public getProgress(id: string): Promise<ISerializedProgress> {
    return new Promise((resolve, reject) => {
      if (progresses[id]) {
        resolve(progresses[id]);
      }

      reject(new Error(`There exists no progress with id ${id}`));
    });
  }

  public setProgress(
    id: string,
    progress: Progress,
    /* tslint:disable-next-line: no-any */
    props: { [propName: string]: any }
  ): Promise<void> {
    return new Promise(resolve => resolve());
  }
}

let interactor: Interactor;

beforeEach(() => {
  const storage = new MockCourseStorage();
  const progress = new MockProgressStorage();

  interactor = new Interactor(storage, progress);
});

it('loadCourse loads the course from storage if it exists', done => {
  interactor.loadCourse('09438926-b170-4005-a6e8-5dd8fba83cde').then(done);
});

it('loadCourse fails if the course does not exist', done => {
  interactor.loadCourse('c990eacb-12af-4085-8b50-25d95d114984').catch(err => {
    expect(err).toBeInstanceOf(Error);
    done();
  });
});

describe('getStructure', () => {
  beforeEach(done => {
    interactor.loadCourse('09438926-b170-4005-a6e8-5dd8fba83cde').then(done);
  });

  it('returns the whole tree by default', () => {
    expect(interactor.getStructure()).toMatchSnapshot();
  });

  it('returns only the first levels if a level is passed', () => {
    expect(interactor.getStructure(1)).toMatchSnapshot();
  });
});
