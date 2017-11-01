import ISerializedProgress, { Progress } from './ISerializedProgress';

interface IProgressStorage {
  getProgress(id: string): Promise<ISerializedProgress>;
  setProgress(
    id: string,
    progress: Progress,
    /* tslint:disable-next-line: no-any */
    props: { [propName: string]: any }
  ): Promise<void>;
}

export default IProgressStorage;
