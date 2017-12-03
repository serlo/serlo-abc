import { addIndex, map, max, reduce, repeat } from 'ramda';
import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import {
  BLACK_TRANSPARENT,
  PRIMARY_WEAK,
  GREEN,
  RED
} from '../../styles/colors';
import { DEFAULT } from '../../styles/text';

const mapIndexed = addIndex(map);

class TextPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsVisible: false
    };
  }

  selectOption = key => () => {
    this.setState({
      optionsVisible: false
    });
    if (this.props.onChange) {
      this.props.onChange(key);
    }
  };

  togglePickerOptions = () => {
    this.setState({
      optionsVisible: !this.state.optionsVisible
    });
  };

  styles = {
    button: {
      backgroundColor: PRIMARY_WEAK,
      padding: 5,
      borderRadius: 20,
      elevation: 10,
      shadowColor: BLACK_TRANSPARENT,
      shadowOpacity: 1,
      shadowRadius: 0,
      shadowOffset: {
        height: 4,
        width: 4
      },
      minWidth: this.props.size || 25
    },
    text: DEFAULT
  };

  render() {
    const optionLengths = map(option => option.length, this.props.options);
    const maxLength = reduce(max, 1, optionLengths);
    const defaultText = repeat('  ', maxLength).join('');

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        {this.state.optionsVisible || this.props.showFeedback
          ? mapIndexed((option, key) => {
              if (this.props.selectedValue === option) {
                return null;
              }

              return (
                <TouchableOpacity onPress={this.selectOption(key)} key={key}>
                  <View
                    style={[
                      this.styles.button,
                      this.props.showFeedback &&
                        this.props.feedback &&
                        this.props.feedback.correct === key && {
                          backgroundColor: GREEN
                        }
                    ]}
                  >
                    <Text style={this.styles.text}>{option}</Text>
                  </View>
                </TouchableOpacity>
              );
            }, this.props.options)
          : null}

        <TouchableOpacity onPress={this.togglePickerOptions}>
          <View
            style={[
              this.styles.button,
              this.props.showFeedback &&
                this.props.feedback &&
                typeof this.props.feedback.wrong !== 'undefined' && {
                  backgroundColor: RED
                }
            ]}
          >
            <Text style={this.styles.text}>
              {this.props.selectedValue || defaultText}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TextPicker;
