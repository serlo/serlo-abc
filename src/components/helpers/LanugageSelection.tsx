import * as R from 'ramda';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import loadImage from '../../assets/images';
// @ts-ignore
import RoundImageWithBorder from '../common/RoundImageWithBorder';

export enum Language {
  english,
  german
}

const getLanguageIcon = (language: Language) => {
  switch (language) {
    case Language.english:
      return loadImage.english();
    case Language.german:
      return loadImage.german();
  }
};

interface LanguageSelectionProps {
  selected: Language;
  onChange: (language: Language) => void;
}

export class LanguageSelection extends React.Component<LanguageSelectionProps> {
  public render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}
      >
        {R.map(
          (language: Language) => (
            <TouchableOpacity onPress={() => this.props.onChange(language)}>
              <RoundImageWithBorder
                image={getLanguageIcon(language)}
                size={40}
                white
                highlighted={this.props.selected === language}
              />
            </TouchableOpacity>
          ),
          [Language.english, Language.german]
        )}
      </View>
    );
  }
}
