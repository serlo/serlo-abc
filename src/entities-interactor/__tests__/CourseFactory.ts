import { InternalNode, Leaf } from '../../entities';
import createCourse from '../CourseFactory';
import { ISerializedCourse } from '../ISerializedCourse';

const serializedCourse: ISerializedCourse = {
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
};

let course: InternalNode;

beforeEach(() => {
  course = createCourse(serializedCourse) as InternalNode;
});

it('`createCourse` creates a course from `CourseInput`', () => {
  expect(course).toMatchSnapshot();
});

it('`getId()` returns the id of the course', () => {
  expect(course.getId()).toEqual('09438926-b170-4005-a6e8-5dd8fba83cde');
});

it('`getTitle()` returns the title of the course', () => {
  expect(course.getTitle()).toEqual('Foo bar');
});

it('`getTree()` returns the whole tree of the course', () => {
  expect(course.getTree()).toEqual({
    id: '09438926-b170-4005-a6e8-5dd8fba83cde',
    title: 'Foo bar',
    icon: undefined,
    children: [
      {
        id: '01f23c2a-b681-43db-9d27-5d8d59f62aed',
        title: undefined,
        icon: undefined,
        children: [
          {
            id: '23e20d5b-ad8e-41be-9891-5ca7b12675c4',
            type: 'foo'
          }
        ]
      },
      {
        id: 'e194f80b-7312-43a2-995e-060f64631782',
        title: undefined,
        icon: undefined,
        children: [
          {
            id: '84fdc1a1-e3bf-4a87-8360-0c3b7beec179',
            type: 'foo'
          }
        ]
      }
    ]
  });
});

it('`getTree(0)` returns the first level of the course tree', () => {
  expect(course.getTree(0)).toEqual({
    id: '09438926-b170-4005-a6e8-5dd8fba83cde',
    title: 'Foo bar',
    icon: undefined
  });
});
