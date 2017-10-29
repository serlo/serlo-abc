import { addIndex, map } from 'ramda';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { getWord } from '../../../helpers/words';
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
} from '../../../styles/colors';
import { DEFAULT } from '../../../styles/text';
import WordImageWithSounds from '../../common/WordImageWithSounds';

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
      getWord(this.props.word)
    );

    const articleButtons = mapIndexed(
      (article, key) => (
        <TouchableOpacity
          key={key}
          style={[
            styles.shared,
            styles.article,
            {
              backgroundColor:
                this.props.state === article
                  ? a[article].strong
                  : a[article].weak
            }
          ]}
          onPress={this.selectArticle(article)}
        >
          <Text style={DEFAULT}>{article}</Text>
        </TouchableOpacity>
      ),
      articles
    );

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <WordImageWithSounds word={this.props.word} longSound />
        <View style={{ flexDirection: 'row' }}>{letters}</View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {articleButtons}
        </View>
      </View>
    );
  }
}

export default ChooseArticle;
