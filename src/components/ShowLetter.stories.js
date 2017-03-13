import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import ShowLetter from './ShowLetter';

storiesOf('components/ShowLetter', module).add('default', () => (
  <ShowLetter
    letter="A"
    sound={require('../assets/sounds/a.mp3')}
    isRepeat={true}
  />
));
