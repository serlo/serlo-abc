import { AppLoading } from 'expo';
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

import {
  DataPolicyManager,
  IDataPolicyManager
} from '../../helpers/DataPolicyManager';
import { PRIMARY } from '../../styles/colors';
import { SMALL } from '../../styles/text';
// @ts-ignore
import RoundTextButton from '../common/RoundTextButton';

import {
  ConsentStatus,
  IDataPolicyConsent
} from '../../storage/DataPolicyConsentStorage';
import { ReactRenderReturn } from '../../types';
import { Language, LanguageSelection } from '../helpers/LanugageSelection';

export class DataPolicy extends React.Component<
  {
    render: (policyAccepted: boolean) => ReactRenderReturn;
  },
  DataPolicyState
> {
  public state: DataPolicyState = {
    manager: new DataPolicyManager(),
    language: Language.german
  };

  public styles: {
    textContainer: ViewStyle;
    policyText: TextStyle;
    button: ViewStyle;
  } = {
    textContainer: {
      height: '70%',
      top: Constants.statusBarHeight,
      margin: 15,
      flex: 1
    },
    policyText: {
      ...SMALL,
      marginTop: 10,
      flexWrap: 'wrap'
    },
    button: {
      margin: 5,
      padding: 5
    }
  };

  public componentDidMount(): void {
    this.state.manager.getCurrentPolicy().then(policy => {
      this.setState({ policy });
    });
    this.state.manager.getPreviousConsent().then(previous => {
      this.setState({ previous });
    });
  }

  public handleClick(consentStatus: ConsentStatus) {
    return () => {
      const { policy } = this.state;
      if (policy) {
        const consent = {
          version: policy.version,
          consent: consentStatus
        };
        this.state.manager.setPolicyConsent(consent).then(() =>
          this.setState({
            policy: consent
          })
        );
      }
    };
  }

  public render() {
    const { policy, previous, language } = this.state;
    const texts =
      language === Language.german
        ? {
            updated: 'Wir haben die Datenschutzerklärung aktualisiert.',
            notification:
              'Wir erheben Nutzungs- und Fehlerdaten um die App zu verbessern. Durch Tippen auf OK erklärst du dich mit unserer Datenschutzerklärung einverstanden.',
            link: 'Datenschutzerklärung anzeigen'
          }
        : {
            updated: "We've updated our privacy policy.",
            notification:
              'In order to improve the app we collect usage data and crash reports. Click OK to accept our privacy policy and proceed to app.',
            link: 'Show privacy policy'
          };

    if (!policy) {
      return <AppLoading />;
    }
    if (policy && policy.consent === ConsentStatus.Unknown) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: PRIMARY
          }}
        >
          <View style={this.styles.textContainer}>
            {previous && previous.version !== policy.version && (
              <Text style={this.styles.policyText}>{texts.updated}</Text>
            )}
            <Text style={this.styles.policyText}>{texts.notification}</Text>
            <TouchableOpacity
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  language === Language.german
                    ? 'https://abc-app.serlo.org/privacy-de.html'
                    : 'https://abc-app.serlo.org/privacy-en.html'
                )
              }
            >
              <Text style={this.styles.policyText}>{' > ' + texts.link}</Text>
            </TouchableOpacity>
          </View>
          <LanguageSelection
            selected={language}
            onChange={(newLanguage: Language) =>
              this.setState({
                language: newLanguage
              })
            }
          />
          <RoundTextButton
            onPress={this.handleClick(ConsentStatus.Accepted)}
            correct={true}
            highlighted={true}
            text={'OK'}
            size={50}
            style={this.styles.button}
          />
        </View>
      );
    }
    return this.props.render(policy.consent === ConsentStatus.Accepted);
  }
}

interface DataPolicyState {
  manager: IDataPolicyManager;
  language: Language;
  policy?: IDataPolicyConsent;
  previous?: IDataPolicyConsent;
}
