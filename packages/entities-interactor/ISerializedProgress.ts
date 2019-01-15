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

export interface ISerializedProgress {
  [id: string]: IIndividualProgress;
}
