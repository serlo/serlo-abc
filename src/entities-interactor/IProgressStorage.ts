import SerializedProgress, { Progress } from './SerializedProgress';

interface IProcessStorage {
  getProgress(id: string): Promise<SerializedProgress>;
  setProgress(
    id: string,
    progress: Progress,
    props: { [propName: string]: any }
  ): Promise<void>;
}

export default IProcessStorage;
