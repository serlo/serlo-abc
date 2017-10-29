import { dropWhile, filter } from 'ramda';

import { AbstractNode, InternalNode, Leaf } from '../entities';
import AbstractCourseInteractor from './AbstractCourseInteractor';
import createCourse from './CourseFactory';
import { ICourseStructure } from './ICourseStructure';
import { Progress } from './ISerializedProgress';

class CourseInteractor extends AbstractCourseInteractor {
  private course: AbstractNode;
  private mockedProgress: any;

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

  public getNextChild(id: string) {
    const entity = this.course.findEntity(id);

    if ((entity as InternalNode).getChildren()) {
      const children = (entity as InternalNode).getChildren();
      const unseenChildren = filter(
        child => this.getProgress(child.getId()).progress === Progress.Unseen,
        children
      );

      if (unseenChildren.length === 0) {
        return null;
      }

      return unseenChildren[0].getInfo() as ICourseStructure;
    }

    return null;
  }

  public getNextSibling(id: string) {
    const entity = this.course.findEntity(id);

    if (!entity) {
      return null;
    }

    const parent = entity.getParent();

    if (!parent) {
      return null;
    }

    if ((parent as InternalNode).getChildren()) {
      const children = (parent as InternalNode).getChildren();
      const siblings = dropWhile(child => child.getId() !== id, children);

      if (siblings.length <= 1) {
        return null;
      }

      return siblings[1].getInfo() as ICourseStructure;
    }

    return null;
  }

  public findEntity(id: string) {
    const entity = this.course.findEntity(id);
    return entity && (entity.getInfo() as ICourseStructure | null);
  }

  public getProgress(id: string) {
    return (this.mockedProgress || {})[id] || { progress: Progress.Unseen };
  }

  public setProgress(id: string, progress: Progress) {
    this.mockedProgress = this.mockedProgress || {};
    this.mockedProgress[id] = { progress };
  }

  public markAsCorrect(id: string) {
    // return this.progress.setProgress(id, Progress.Correct, {})
    this.setProgress(id, Progress.Correct);
  }

  public markAsIncorrect(id: string) {
    // return this.progress.setProgress(id, Progress.Incorrect, {})
    this.setProgress(id, Progress.Incorrect);
  }
}

export default CourseInteractor;
