import {
  ConsentStatus,
  default as DataPolicyConsentStorage,
  IDataPolicyConsent,
  IDataPolicyConsentStorage
} from '../../storage/DataPolicyConsentStorage';

export interface IDataPolicyManager {
  state: IDataPolicyManagerState;
  getCurrentPolicy: () => Promise<IDataPolicyConsent>;
}

interface IDataPolicyManagerState {
  consentStorage: IDataPolicyConsentStorage;
  currentPolicy?: IDataPolicyConsent;
}

export class DataPolicyManager implements IDataPolicyManager {
  public state: IDataPolicyManagerState = {
    consentStorage: new DataPolicyConsentStorage()
  };

  public async getCurrentPolicy(): Promise<IDataPolicyConsent> {
    if (this.state.currentPolicy) {
      return this.state.currentPolicy;
    }
    const currentVersion = await this.fetchCurrentVersion();
    const consent = await this.state.consentStorage.getConsent();
    return {
      version: currentVersion,
      consent:
        currentVersion === consent.version
          ? consent.consent
          : ConsentStatus.Unknown
    };
  }

  private fetchCurrentVersion() {
    return fetch('https://abc-app.serlo.org/privacy.json')
      .then(response => response.json())
      .then(responseJson => responseJson.version);
  }
}
