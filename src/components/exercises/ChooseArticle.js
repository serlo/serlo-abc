import { addIndex, map } from 'ramda';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';
import {
  BLACK_TRANSPARENT,
  PRIMARY_STRONG,
  PRIMARY,
  MASCULINE_STRONG,
  MASCULINE_WEAK,
  FEMININE_STRONG,
  FEMININE_WEAK,
  NEUTER_STRONG,
  NEUTER_WEAK
} from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import { loadSounds, playAll } from '../helpers/audio';
import { RoundImageWithButton } from '../Components';

const mapIndexed = addIndex(map);

const articles = ['der', 'die', 'das'];

const a = {
  [articles[0]]: {
    weak: MASCULINE_WEAK,
    strong: MASCULINE_STRONG
  },
  [articles[1]]: {
    weak: FEMININE_WEAK,
    strong: FEMININE_STRONG
  },
  [articles[2]]: {
    weak: NEUTER_WEAK,
    strong: NEUTER_STRONG
  }
};

const styles = {
  letterStyle: {
    backgroundColor: PRIMARY_STRONG
  },
  article: {
    marginHorizontal: 10,
    padding: 10
  },
  shared: {
    padding: 5,
    margin: 2,
    borderRadius: 20,
    elevation: 10,
    shadowColor: BLACK_TRANSPARENT,
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 4,
      width: 4
    }
  }
};

class ChooseArticle extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedArticle: null
    };
  }

  play = () => playAll(this.props.sounds);

  selectArticle = article => () => {
    this.setState(({ selectedArticle }) => ({
      selectedArticle: selectedArticle === article ? null : article
    }));
  };

  render() {
    const letters = mapIndexed(
      (char, key) =>
        <View
          key={key}
          style={[{ padding: 5 }, styles.letterStyle, styles.shared]}
        >
          <Text style={DEFAULT}>
            {char}
          </Text>
        </View>,
      this.props.text
    );

    const articleButtons = mapIndexed(
      (article, key) =>
        <TouchableOpacity
          key={key}
          style={[
            styles.shared,
            styles.article,
            {
              backgroundColor:
                this.state.selectedArticle === article
                  ? a[article].strong
                  : a[article].weak
            }
          ]}
          onPress={this.selectArticle(article)}
        >
          <Text style={DEFAULT}>
            {article}
          </Text>
        </TouchableOpacity>,
      articles
    );

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: PRIMARY,
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <RoundImageWithButton
          image={this.props.image}
          imageSize={200}
          icon={speakerImage}
          buttonSize={40}
          onPress={this.play}
        />
        <View style={{ flexDirection: 'row' }}>
          {letters}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {articleButtons}
        </View>
      </View>
    );
  }
}

export default loadSounds(ChooseArticle);
