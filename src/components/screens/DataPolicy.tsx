import * as React from 'react';
import { Text, View } from 'react-native';
// @ts-ignore
import { DEFAULT } from '../../styles/text';
// @ts-ignore
import RoundTextButton from '../common/RoundTextButton';

import {
  ConsentStatus,
  IDataPolicyConsent
} from '../../storage/DataPolicyConsentStorage';
import { ReactRenderReturn } from '../../types';
import { DataPolicyManager, IDataPolicyManager } from './DataPolicyManager';

export class DataPolicyComponent extends React.Component<{
  render: (policyAccepted: boolean) => ReactRenderReturn;
}> {
  public state: {
    manager: IDataPolicyManager;
    policy?: IDataPolicyConsent;
    previous?: IDataPolicyConsent;
  };

  constructor() {
    super();
    this.state = {
      manager: new DataPolicyManager()
    };
    this.state.manager.getCurrentPolicy().then(policy => {
      this.setState({ policy });
    });
  }

  public render() {
    const { policy, previous } = this.state;
    if (policy && policy.consent === ConsentStatus.Unknown) {
      return (
        <View>
          <Text style={DEFAULT}>
            {previous ? 'Wir haben die Datenschutzerklärung aktualisiert.' : ''}
            Wir erheben Nutzungs- und Fehlerdaten um die App zu verbessern.
            Durch Tippen auf OK erklärst du dich mit unserer
            Datenschutzerklärung einverstanden.
          </Text>
          <RoundTextButton
            onPress={() => {
              this.setState({
                policy: {
                  version: policy.version,
                  consent: ConsentStatus.Accepted
                }
              });
            }}
            correct={true}
            highlighted={true}
            text={'Ok'}
            size={60}
          />
        </View>
      );
    }
    return this.props.render(
      policy ? policy.consent === ConsentStatus.Accepted : false
    );
  }
}
