import { ascend, dropWhile, filter, forEach } from 'ramda';
import { Optional } from '../../src/types';
import { AbstractNode, InternalNode, isInternalNode } from '../entities/course';
import { Maybe } from '../maybe';
import { stableSortWith } from '../stable-sort';
import AbstractCourseInteractor from './AbstractCourseInteractor';
import { ICourseStructure } from './ICourseStructure';
import { IProgressStorage } from './IProgressStorage';
import {
  IIndividualProgress,
  ISerializedProgress,
  Progress
} from './ISerializedProgress';

class CourseInteractor extends AbstractCourseInteractor {
  private progress: ISerializedProgress;

  constructor(
    private courseId: string,
    course: AbstractNode,
    progressStorage: IProgressStorage,
    initialProgress: ISerializedProgress
  ) {
    super(course, progressStorage, initialProgress);
    this.progress = initialProgress;
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

      const cmps = [
        ascend(
          (child: AbstractNode) => this.getProgress(child.getId()).progress
        ),
        ascend(
          (child: AbstractNode) => this.getProgress(child.getId()).counter || 0
        )
      ];

      const sortedChildren = stableSortWith(cmps, children);

      const relevantChildren = filter(
        (child: AbstractNode) =>
          this.getProgress(child.getId()).progress < Progress.Correct,
        sortedChildren
      );

      if (relevantChildren.length !== 0) {
        return relevantChildren[0].getInfo() as ICourseStructure;
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

  public getNewVocabulary(id: string): Maybe<string[]> {
    const entity = this.course.findEntity(id);

    return entity && entity.getNewVocabulary();
  }

  public getVocabulary(id: string): string[] {
    return this.course.getVocabulary(id);
  }
  public getNewLetter(id: string): Maybe<string> {
    const entity = this.course.findEntity(id);

    return entity && entity.getNewLetter();
  }

  public getLetters(id: string): string[] {
    return this.course.getLetters(id);
  }

  public getProgress(id: string) {
    return this.progress[id] || { progress: Progress.Unseen };
  }

  public setProgress(id: string, progress: IIndividualProgress) {
    this.progress[id] = progress;
    return this.progressStorage.setProgress(this.courseId, this.progress);
  }

  public resetProgress() {
    return this.progressStorage.resetProgress(this.courseId);
  }

  public resetChildrenProgress(id: string) {
    const entity = this.course.findEntity(id);

    if (entity && isInternalNode(entity) && entity.getChildren()) {
      forEach(child => {
        this.progress[child.getId()] = { progress: Progress.Unseen };
        this.resetChildrenProgress(child.getId());
      }, (entity as InternalNode).getChildren());
    }
    this.progress[id] = { progress: Progress.Unseen };
  }

  public markAsCorrect(id: string) {
    this.setProgress(id, { progress: Progress.Correct });
  }

  public markAsIncorrect(id: string) {
    const counter = this.getProgress(id).counter || 0;
    this.setProgress(id, {
      progress: Progress.Incorrect,
      counter: counter + 1
    });
  }
}

export default CourseInteractor;
