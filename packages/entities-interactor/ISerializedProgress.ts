export enum Progress {
  Unseen,
  Incorrect,
  Correct
}

interface ISerializedProgress {
  id: string;
  progress: Progress;
  [propName: string]: any;
}

export default ISerializedProgress;
