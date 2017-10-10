import ISerializedProgress, { Progress } from './ISerializedProgress';

interface IProcessStorage {
  getProgress(id: string): Promise<ISerializedProgress>;
  setProgress(
    id: string,
    progress: Progress,
    props: { [propName: string]: any }
  ): Promise<void>;
}

export default IProcessStorage;
