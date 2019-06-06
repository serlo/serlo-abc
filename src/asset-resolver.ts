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

  public getImage(rawId: string) {
    const id = this.cleanId(rawId);
    const load = loadImage[id] || loadWordImage[id];

    return load && load();
  }

  public getSound(rawId: string) {
    const id = this.cleanId(rawId);
    const load = loadSound[id] || loadWordSound[id];

    return load && load();
  }

  public getVideo(id: string) {
    const load = loadVideo[this.cleanId(id)];

    return load && (this.wifi ? load.hd : load.sd);
  }

  private cleanId(id: string): string {
    // Don't ask. Somehow, "d" and "r" can't be used as keys in production mode
    if (id === 'd') {
      return 'd_letter';
    }
    if (id === 'r') {
      return 'r_letter';
    }

    return id
      .replace(/\s/g, '_')
      .replace(/ß/g, 'sz')
      .replace(/ä/g, 'ae')
      .replace(/ü/g, 'ue')
      .replace(/ö/g, 'oe')
      .replace(/é/g, 'e');
  }
}
