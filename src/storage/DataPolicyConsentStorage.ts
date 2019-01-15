import { AsyncStorage } from 'react-native';

export enum ConsentStatus {
  Accepted,
  Declined,
  Unknown
}

export interface IDataPolicyConsent {
  version: string;
  consent: ConsentStatus;
}

export interface IDataPolicyConsentStorage {
  getConsent(): Promise<IDataPolicyConsent | undefined>;
  setConsent(consent: IDataPolicyConsent): Promise<void>;
}

class DataPolicyConsentStorage implements IDataPolicyConsentStorage {
  private static getKey() {
    return `@@dpconsent`;
  }

  public getConsent() {
    return AsyncStorage.getItem(DataPolicyConsentStorage.getKey()).then(
      data => {
        if (!data) {
          return undefined;
        }

        return JSON.parse(data) as IDataPolicyConsent;
      }
    );
  }

  public setConsent(consent: IDataPolicyConsent) {
    const serializedProgress = JSON.stringify(consent);

    return AsyncStorage.setItem(
      DataPolicyConsentStorage.getKey(),
      serializedProgress
    );
  }
}

export default DataPolicyConsentStorage;
