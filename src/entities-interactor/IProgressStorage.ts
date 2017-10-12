import ISerializedProgress, { Progress } from './ISerializedProgress';

interface IProgressStorage {
  getProgress(id: string): Promise<ISerializedProgress>;
  setProgress(
    id: string,
    progress: Progress,
    props: { [propName: string]: any }
  ): Promise<void>;
}

export default IProgressStorage;
