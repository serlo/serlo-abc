import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
import ExplanationText from './ExplanationText';

storiesOf('components/ExplanationText', module).add('default', () => (
    <ExplanationText
        text="Wiederholen Sie den Buchstaben."
        sound={require('../../assets/sounds/exercises/wiederholen_sie_den_buchstaben_a.mp3')}
    />
));
