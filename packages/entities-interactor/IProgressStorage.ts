import { ISerializedProgress } from './ISerializedProgress';

export interface IProgressStorage {
  getProgress(id: string): Promise<ISerializedProgress>;
  setProgress(id: string, progress: ISerializedProgress): Promise<void>;
  resetProgress(id: string): Promise<void>;
}
