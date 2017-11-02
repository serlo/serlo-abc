import { dropWhile, filter } from 'ramda';

import { Optional } from '../../src/types';
import { AbstractNode, InternalNode } from '../entities/course';
import AbstractCourseInteractor from './AbstractCourseInteractor';
import createCourse from './CourseFactory';
import { ICourseStructure } from './ICourseStructure';
import ISerializedProgress, { Progress } from './ISerializedProgress';

class CourseInteractor extends AbstractCourseInteractor {
  private courseId: string;
  private course: AbstractNode;
  private progress: ISerializedProgress;

  public loadCourse(id: string) {
    this.courseId = id;
    return Promise.all([
      this.storage.getCourse(id).then(course => {
        this.course = createCourse(course);
      }),
      this.progressStorage.getProgress(id).then(progress => {
        this.progress = progress;
      })
    ]);
  }

  public getStructure(level = Infinity) {
    return this.course.getTree(level) as ICourseStructure;
  }

  public getNextChild(id: string): Optional<ICourseStructure> {
    const entity = this.course.findEntity(id);

    if (!entity) {
      return undefined;
    }

    if ((entity as InternalNode).getChildren()) {
      const children = (entity as InternalNode).getChildren();
      const unseenChildren = filter(
        child => this.getProgress(child.getId()).progress === Progress.Unseen,
        children
      );

      if (unseenChildren.length !== 0) {
        return unseenChildren[0].getInfo() as ICourseStructure;
      }
    }

    return undefined;
  }

  public getNextSibling(id: string): Optional<ICourseStructure> {
    const entity = this.course.findEntity(id);

    if (!entity) {
      return undefined;
    }

    const parent = entity.getParent();

    if (!parent) {
      return undefined;
    }

    if ((parent as InternalNode).getChildren()) {
      const children = (parent as InternalNode).getChildren();
      const siblings = dropWhile(child => child.getId() !== id, children);

      if (siblings.length > 1) {
        return siblings[1].getInfo() as ICourseStructure;
      }
    }

    return undefined;
  }

  public findEntity(id: string) {
    const entity = this.course.findEntity(id);

    return entity && (entity.getInfo() as Optional<ICourseStructure>);
  }

  public getProgress(id: string) {
    return this.progress[id] || { progress: Progress.Unseen };
  }

  public setProgress(id: string, progress: Progress) {
    this.progress[id] = { progress };
    return this.progressStorage.setProgress(this.courseId, this.progress);
  }

  public resetProgress() {
    return this.progressStorage.resetProgress(this.courseId);
  }

  public markAsCorrect(id: string) {
    this.setProgress(id, Progress.Correct);
  }

  public markAsIncorrect(id: string) {
    this.setProgress(id, Progress.Incorrect);
  }
}

export default CourseInteractor;
