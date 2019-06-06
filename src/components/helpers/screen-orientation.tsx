/* tslint:disable:max-classes-per-file */
import { ScreenOrientation } from 'expo';
import * as React from 'react';
import { ReactRenderReturn } from '../../types';

export interface ScreenOrientationProps {
  children: ReactRenderReturn;
}

export class PortraitScreenOrientation extends React.Component<
  ScreenOrientationProps
> {
  constructor(props: ScreenOrientationProps) {
    super(props);
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }

  public render() {
    return this.props.children;
  }
}

export class LandscapeScreenOrientation extends React.Component<
  ScreenOrientationProps
> {
  constructor(props: ScreenOrientationProps) {
    super(props);
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  public render() {
    return this.props.children;
  }
}
