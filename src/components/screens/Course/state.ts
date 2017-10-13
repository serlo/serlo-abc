import { ISerializedCourse } from '../../../entities-interactor';

interface IState {
  course?: ISerializedCourse;
}

enum ActionTypes {
  LOAD_COURSE = 'LOAD_COURSE'
}

interface IAction {
  type: ActionTypes;
  props?: any;
}

export const init = (): IState => ({});

export const update = (action: IAction, state: IState): IState => {
  switch (action.type) {
    case ActionTypes.LOAD_COURSE:
    default:
      return state;
  }
};
