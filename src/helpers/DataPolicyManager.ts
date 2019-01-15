import {
  ConsentStatus,
  default as DataPolicyConsentStorage,
  IDataPolicyConsent,
  IDataPolicyConsentStorage
} from '../storage/DataPolicyConsentStorage';

export interface IDataPolicyManager {
  state: IDataPolicyManagerState;
  getCurrentPolicy: () => Promise<IDataPolicyConsent>;
  getPreviousConsent: () => Promise<IDataPolicyConsent | undefined>;
  setPolicyConsent: (consent: IDataPolicyConsent) => Promise<void>;
}

interface IDataPolicyManagerState {
  consentStorage: IDataPolicyConsentStorage;
  currentPolicy?: IDataPolicyConsent;
}

export class DataPolicyManager implements IDataPolicyManager {
  public state: IDataPolicyManagerState = {
    consentStorage: new DataPolicyConsentStorage()
  };

  public async getCurrentPolicy() {
    if (this.state.currentPolicy) {
      return this.state.currentPolicy;
    }
    const currentVersion = await this.fetchCurrentVersion();
    const previousConsent = await this.getPreviousConsent();
    const currentConsent = {
      version: currentVersion,
      consent:
        previousConsent && previousConsent.version === currentVersion
          ? previousConsent.consent
          : ConsentStatus.Unknown
    };
    this.state.currentPolicy = currentConsent;
    return currentConsent;
  }

  public getPreviousConsent() {
    return this.state.consentStorage.getConsent();
  }

  public async setPolicyConsent(consent: IDataPolicyConsent) {
    return this.state.consentStorage.setConsent(consent);
  }

  private fetchCurrentVersion() {
    return fetch('https://abc-app.serlo.org/privacy.json')
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.version;
      });
  }
}
