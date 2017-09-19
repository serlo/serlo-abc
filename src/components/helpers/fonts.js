import { Font } from 'expo';
import React, { Component } from 'react';

export const createLoadFonts = Font => fonts => C => {
  class LoadFontsComponent extends Component {
    constructor(props) {
      super(props);

      this.state = { fontsLoaded: false };
    }

    componentDidMount() {
      Font.loadAsync(fonts).then(() => this.setState({ fontsLoaded: true }));
    }

    render() {
      return <C {...this.props} fontsLoaded={this.state.fontsLoaded} />;
    }
  }

  return LoadFontsComponent;
};

export default createLoadFonts(Font);
