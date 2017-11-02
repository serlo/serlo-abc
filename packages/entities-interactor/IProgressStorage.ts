import ISerializedProgress from './ISerializedProgress';

interface IProgressStorage {
  getProgress(id: string): Promise<ISerializedProgress>;
  setProgress(id: string, progress: ISerializedProgress): Promise<void>;
  resetProgress(id: string): Promise<void>;
}

export default IProgressStorage;
