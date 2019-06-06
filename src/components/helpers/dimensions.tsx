import * as React from 'react';
import { Dimensions } from 'react-native';

import { ReactRenderReturn } from '../../types';

export interface DimensionsProps {
  render: (dimensions: DimensionsState) => ReactRenderReturn;
}

export interface DimensionsState {
  width: number;
  height: number;
}

export class WithDimensions extends React.Component<
  DimensionsProps,
  DimensionsState
> {
  public state: DimensionsState = Dimensions.get('window');

  public componentWillMount() {
    Dimensions.addEventListener('change', this.handleDimensionsChange);
  }

  public componentWillUnmount() {
    Dimensions.removeEventListener('change', this.handleDimensionsChange);
  }

  public render() {
    return this.props.render(this.state);
  }

  private handleDimensionsChange = ({ window }: { window: DimensionsState }) =>
    this.setState(window);
}
