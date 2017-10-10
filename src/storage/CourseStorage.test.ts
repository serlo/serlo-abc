import { ISerializedCourse } from '../entities-interactor';
import CourseStorage from './CourseStorage';

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

let storage: CourseStorage;

beforeEach(() => {
  storage = new CourseStorage(courses);
})

it('reolves with the course with the given id', (done) => {
  storage.getCourse('09438926-b170-4005-a6e8-5dd8fba83cde').then((course) => {
    expect(course).toEqual({
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
    })
    done()
  });
});

it('rejects with an error if no course with the given id exists', (done) => {
  storage.getCourse('a2002037-52a1-4c2a-917d-1ccd64ea9b15').catch((err) => {
    expect(err).toBeInstanceOf(Error);
    done();
  });
});
