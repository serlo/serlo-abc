import { addIndex, map } from 'ramda';
import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { BLACK_TRANSPARENT, PRIMARY_WEAK } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';

const mapIndexed = addIndex(map);

class TextPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsVisible: false,
      selectedValue: this.initSelectedValue(props.selectedKey)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedKey !== nextProps.selectedKey) {
      this.setState({
        optionsVisible: false,
        selectedValue: this.initSelectedValue(nextProps.selectedKey)
      });
    }
  }

  initSelectedValue = key => {
    const { options } = this.props;
    return key !== null && options ? options[key] : null;
  };

  selectOption = key => () => {
    this.setState({
      optionsVisible: false,
      selectedValue: this.props.options[key]
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
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        {this.state.optionsVisible
          ? mapIndexed(
              (option, key) => (
                <TouchableOpacity onPress={this.selectOption(key)} key={key}>
                  <View style={this.styles.button}>
                    <Text style={this.styles.text}>{option}</Text>
                  </View>
                </TouchableOpacity>
              ),
              this.props.options
            )
          : null}

        <TouchableOpacity onPress={this.togglePickerOptions}>
          <View style={this.styles.button}>
            <Text style={this.styles.text}>
              {this.state.selectedValue || ' '}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TextPicker;
