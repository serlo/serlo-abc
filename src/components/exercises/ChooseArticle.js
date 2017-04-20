import { addIndex, forEach, map, toUpper } from 'ramda';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';
import { BLACK_TRANSPARENT, PRIMARY_STRONG , PRIMARY, ARTICLES } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import { loadSounds } from '../helpers/audio';
import { RoundImageWithButton } from '../Components';

const mapIndexed = addIndex(map);

const styles = {
  letterStyle: {
    backgroundColor: PRIMARY_STRONG,
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
      selectedArticle: ''
    }
  }

  play = () => {
    const playAll = ([sound, ...rest]) => {
      sound.playAsync();
      sound.setPlaybackFinishedCallback(() => {
        sound.setPositionAsync(0);
        if (rest.length > 0) {
          setTimeout(() => playAll(rest), 1000);
        }
      });
    };
    playAll(this.props.sounds);
  };

  selectArticle = key => () => {
    this.setState(({ selectedArticle }) => {
      if (selectedArticle === key) {
        return { selectedArticle: '' };
      }

      return { selectedArticle: key };
    });
  }

  render() {
    const letters = mapIndexed(
      (char, key) => (
        <View
          key={key}
          style={[
            { padding: 5 },
            styles.letterStyle,
            styles.shared
          ]}
        >
          <Text style={DEFAULT}>
            {char}
          </Text>
        </View>
      ),
      this.props.text
    );

    const articles = mapIndexed(
      (article, key) => (
        <TouchableOpacity
          key={key}
          style={[
            styles.shared,
            styles.article,
            {backgroundColor: this.state.selectedArticle === article ? ARTICLES[toUpper(article)].STRONG : ARTICLES[toUpper(article)].WEAK}
          ]}
          onPress={this.selectArticle(article)}
        >
          <Text style={DEFAULT}>{article}</Text>
        </TouchableOpacity>
      ),
      ['der', 'die', 'das']
    )

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
          {articles}
        </View>
      </View>
    );
  }
}

export default loadSounds(ChooseArticle);
