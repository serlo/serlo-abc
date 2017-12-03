import { ConnectionInfo, NetInfo } from 'react-native';

import { AbstractAssetResolver } from '../packages/entities';
import loadImage from './assets/images';
import loadSound from './assets/sounds';
import loadVideo from './assets/videos';
import loadWordImage from './assets/words/images';
import loadWordSound from './assets/words/sounds';

export class AssetResolver extends AbstractAssetResolver {
  private wifi: boolean = false;

  constructor() {
    super();

    NetInfo.getConnectionInfo().then(connectionInfo => {
      this.wifi = connectionInfo.type === 'wifi';
    });

    NetInfo.addEventListener('connectionChange', connectionInfo => {
      this.wifi = (connectionInfo as ConnectionInfo).type === 'wifi';
    });
  }

  public getImage(id: string) {
    const load = loadImage[id] || loadWordImage[id];

    return load && load();
  }

  public getSound(id: string) {
    const load = loadSound[id] || loadWordSound[id];

    return load && load();
  }

  public getVideo(id: string) {
    const load = loadVideo[id];

    return load && (this.wifi ? load.hd : load.sd);
  }
}
