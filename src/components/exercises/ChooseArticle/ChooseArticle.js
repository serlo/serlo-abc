import { addIndex, map } from 'ramda';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {
  BLACK_TRANSPARENT,
  PRIMARY_STRONG,
  MASCULINE,
  FEMININE,
  NEUTER,
  GREEN,
  RED
} from '../../../styles/colors';
import { DEFAULT } from '../../../styles/text';
import WordImageWithSounds from '../../common/WordImageWithSounds';
import { PortraitScreenOrientation } from '../../helpers/screen-orientation';

const mapIndexed = addIndex(map);

const a = {
  der: MASCULINE,
  die: FEMININE,
  das: NEUTER
};

const styles = {
  letterStyle: {
    backgroundColor: PRIMARY_STRONG
  },
  article: {
    marginHorizontal: 10,
    padding: 10
  },
  selectedArticle: {
    marginHorizontal: 15,
    padding: 15
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

class ChooseArticle extends Component {
  selectArticle = article => () => {
    this.props.setState(state => (state === article ? '' : article));
  };

  render() {
    const letters = mapIndexed(
      (char, key) => (
        <View
          key={key}
          style={[{ padding: 5 }, styles.letterStyle, styles.shared]}
        >
          <Text style={DEFAULT}>{char}</Text>
        </View>
      ),
      this.props.word.toString()
    );

    const articleButtons = mapIndexed(
      (article, key) => (
        <TouchableOpacity
          key={key}
          style={[
            styles.shared,
            styles.article,
            { backgroundColor: a[article] },
            this.props.state === article && styles.selectedArticle,
            this.props.showFeedback &&
              this.props.feedback.correct === article && {
                borderColor: GREEN,
                borderWidth: 10
              },
            this.props.showFeedback &&
              this.props.feedback.wrong === article && {
                borderColor: RED,
                borderWidth: 10
              }
          ]}
          onPress={this.selectArticle(article)}
        >
          <Text style={DEFAULT}>{article}</Text>
        </TouchableOpacity>
      ),
      ['der', 'die', 'das']
    );

    return (
      <PortraitScreenOrientation>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <WordImageWithSounds word={this.props.word} longSound />
          <View style={{ flexDirection: 'row' }}>{letters}</View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {articleButtons}
          </View>
        </View>
      </PortraitScreenOrientation>
    );
  }
}

export default ChooseArticle;
