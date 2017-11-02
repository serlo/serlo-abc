export enum Progress {
  Unseen,
  Incorrect,
  Correct
}

export interface IIndividualProgress {
  progress: Progress;
  /* tslint:disable-next-line: no-any */
  [propName: string]: any;
}

interface ISerializedProgress {
  [id: string]: IIndividualProgress;
}

export default ISerializedProgress;
