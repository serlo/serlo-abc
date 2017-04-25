import React from 'react';
import { Button, View } from 'react-native';
import { storiesOf } from '@kadira/react-native-storybook';

import NavigationMenu from './NavigationMenu';

class NavigationMenuStory extends React.Component {
  constructor() {
    super();
    this.state = { visible: false };
  }

  toggleVisible = () => {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'pink' }}>
        <Button
          title="Press Me"
          onPress={this.toggleVisible}
        />
        <NavigationMenu
          visible={this.state.visible}
          style={{ backgroundColor: 'lightgreen' }}
        >
          <Button
            title="Press Me"
            onPress={this.toggleVisible}
          />
        </NavigationMenu>
      </View>
    );
  }
}

storiesOf('Navigation', module).add('Navigation Menu', () => (
  <NavigationMenuStory />
));
