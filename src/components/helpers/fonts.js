import { Font } from 'expo';
import { forEach, map } from 'ramda';
import React, { Component } from 'react';

export const createLoadFonts = Font => fonts => C => {
  class LoadFontsComponent extends Component {
    constructor(props) {
      super(props);

      this.state = { fontsLoaded: false };
    }

    async componentDidMount() {
      await Font.loadAsync(fonts);

      this.setState({ fontsLoaded: true });
    }

    render() {
      return <C {...this.props} fontsLoaded={this.state.fontsLoaded} />;
    }
  }

  return LoadFontsComponent;
};

export default createLoadFonts(Font);
