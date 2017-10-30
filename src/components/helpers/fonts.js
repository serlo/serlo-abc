import { AppLoading, Font } from 'expo';
import React, { Component } from 'react';

export const createLoadFonts = Font => fonts => C => {
  class LoadFontsComponent extends Component {
    state = { fontsLoaded: false };

    render() {
      if (!this.state.fontsLoaded) {
        return (
          <AppLoading
            startAsync={() => Font.loadAsync(fonts)}
            onFinish={() => this.setState({ fontsLoaded: true })}
            onError={console.warn}
          />
        );
      }

      return <C {...this.props} fontsLoaded={this.state.fontsLoaded} />;
    }
  }

  return LoadFontsComponent;
};

export default createLoadFonts(Font);
