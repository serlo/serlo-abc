import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import DragAndDropExample from './DragAndDropExample';
import SvgExample from './SvgExample';

storiesOf('DnD & Sketch', module).add('DnD', () => <DragAndDropExample />);
storiesOf('DnD & Sketch', module).add('Sketch', () => <SvgExample />);
