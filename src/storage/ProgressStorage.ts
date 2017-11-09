import { AsyncStorage } from 'react-native';

import {
  IProgressStorage,
  ISerializedProgress
} from '../../packages/entities-interactor';

class ProgressStorage implements IProgressStorage {
  public getProgress(id: string) {
    return AsyncStorage.getItem(this.getKey(id)).then(data => {
      if (!data) {
        return {};
      }

      return JSON.parse(data) as ISerializedProgress;
    });
  }

  public setProgress(id: string, progress: ISerializedProgress) {
    const serializedProgress = JSON.stringify(progress);

    return AsyncStorage.setItem(this.getKey(id), serializedProgress);
  }

  public resetProgress(id: string) {
    return this.setProgress(id, {});
  }

  private getKey(id: string) {
    return `@@progress:${id}`;
  }
}

export default ProgressStorage;
