export enum Progress {
  Unseen,
  Incorrect,
  Correct
}

interface ISerializedProgress {
  id: string;
  progress: Progress;
  /* tslint:disable-next-line: no-any */
  [propName: string]: any;
}

export default ISerializedProgress;
