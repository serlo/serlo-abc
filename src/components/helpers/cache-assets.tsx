/* tslint:disable:no-any */
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import { map } from 'ramda';
import * as React from 'react';

interface CacheAssetsProps {
  fonts?: any[];
  assets?: any[];
  render: (
    done: boolean
  ) =>
    | JSX.Element
    | JSX.Element[]
    | React.ReactPortal
    | string
    | number
    | null
    | false;
}

interface CacheAssetsState {
  done: boolean;
}

export class CacheAssets extends React.Component<
  CacheAssetsProps,
  CacheAssetsState
> {
  public state = {
    done: false
  };

  public componentDidMount() {
    const fonts = this.cacheFonts(this.props.fonts);
    const assets = this.cacheAssets(this.props.assets);

    Promise.all([fonts, ...assets]).then(() => {
      this.setState({ done: true });
    });
  }

  public render() {
    return this.props.render(this.state.done);
  }

  private cacheFonts(fonts: {} = {}): Promise<void> {
    return Font.loadAsync(fonts);
  }

  private cacheAssets(assets: any[] = []): Array<Promise<void>> {
    return map(asset => Asset.fromModule(asset).downloadAsync(), assets);
  }
}
