import { AssetTypes } from '../../packages/entities';

const videos = {
  anna1: {
    sd: require('./videos/anna1.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna1.hd.mp4' }
  },
  anna10: {
    sd: require('./videos/anna10.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna10.hd.mp4' }
  },
  anna11: {
    sd: require('./videos/anna11.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna11.hd.mp4' }
  },
  anna12: {
    sd: require('./videos/anna12.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna12.hd.mp4' }
  },
  anna13: {
    sd: require('./videos/anna13.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna13.hd.mp4' }
  },
  anna14: {
    sd: require('./videos/anna14.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna14.hd.mp4' }
  },
  anna15: {
    sd: require('./videos/anna15.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna15.hd.mp4' }
  },
  anna16: {
    sd: require('./videos/anna16.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna16.hd.mp4' }
  },
  anna17: {
    sd: require('./videos/anna17.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna17.hd.mp4' }
  },
  anna17a: {
    sd: require('./videos/anna17a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna17a.hd.mp4' }
  },
  anna18: {
    sd: require('./videos/anna18.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna18.hd.mp4' }
  },
  anna18a: {
    sd: require('./videos/anna18a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna18a.hd.mp4' }
  },
  anna19: {
    sd: require('./videos/anna19.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna19.hd.mp4' }
  },
  anna2: {
    sd: require('./videos/anna2.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna2.hd.mp4' }
  },
  anna20: {
    sd: require('./videos/anna20.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna20.hd.mp4' }
  },
  anna20a: {
    sd: require('./videos/anna20a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna20a.hd.mp4' }
  },
  anna22: {
    sd: require('./videos/anna22.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna22.hd.mp4' }
  },
  anna23: {
    sd: require('./videos/anna23.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna23.hd.mp4' }
  },
  anna24: {
    sd: require('./videos/anna24.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna24.hd.mp4' }
  },
  anna25: {
    sd: require('./videos/anna25.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna25.hd.mp4' }
  },
  anna26: {
    sd: require('./videos/anna26.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna26.hd.mp4' }
  },
  anna27: {
    sd: require('./videos/anna27.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna27.hd.mp4' }
  },
  anna28: {
    sd: require('./videos/anna28.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna28.hd.mp4' }
  },
  anna29: {
    sd: require('./videos/anna29.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna29.hd.mp4' }
  },
  anna3: {
    sd: require('./videos/anna3.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna3.hd.mp4' }
  },
  anna30: {
    sd: require('./videos/anna30.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna30.hd.mp4' }
  },
  anna31: {
    sd: require('./videos/anna31.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna31.hd.mp4' }
  },
  anna32: {
    sd: require('./videos/anna32.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna32.hd.mp4' }
  },
  anna33: {
    sd: require('./videos/anna33.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna33.hd.mp4' }
  },
  anna33a: {
    sd: require('./videos/anna33a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna33a.hd.mp4' }
  },
  anna34: {
    sd: require('./videos/anna34.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna34.hd.mp4' }
  },
  anna35: {
    sd: require('./videos/anna35.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna35.hd.mp4' }
  },
  anna36: {
    sd: require('./videos/anna36.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna36.hd.mp4' }
  },
  anna37: {
    sd: require('./videos/anna37.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna37.hd.mp4' }
  },
  anna37a: {
    sd: require('./videos/anna37a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna37a.hd.mp4' }
  },
  anna38: {
    sd: require('./videos/anna38.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna38.hd.mp4' }
  },
  anna38a: {
    sd: require('./videos/anna38a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna38a.hd.mp4' }
  },
  anna39: {
    sd: require('./videos/anna39.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna39.hd.mp4' }
  },
  anna39a: {
    sd: require('./videos/anna39a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna39a.hd.mp4' }
  },
  anna39b: {
    sd: require('./videos/anna39b.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna39b.hd.mp4' }
  },
  anna4: {
    sd: require('./videos/anna4.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna4.hd.mp4' }
  },
  anna40: {
    sd: require('./videos/anna40.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna40.hd.mp4' }
  },
  anna41: {
    sd: require('./videos/anna41.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna41.hd.mp4' }
  },
  anna42: {
    sd: require('./videos/anna42.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna42.hd.mp4' }
  },
  anna42a: {
    sd: require('./videos/anna42a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna42a.hd.mp4' }
  },
  anna42b: {
    sd: require('./videos/anna42b.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna42b.hd.mp4' }
  },
  anna42c: {
    sd: require('./videos/anna42c.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna42c.hd.mp4' }
  },
  anna43: {
    sd: require('./videos/anna43.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna43.hd.mp4' }
  },
  anna44: {
    sd: require('./videos/anna44.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna44.hd.mp4' }
  },
  anna45: {
    sd: require('./videos/anna45.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna45.hd.mp4' }
  },
  anna46: {
    sd: require('./videos/anna46.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna46.hd.mp4' }
  },
  anna47: {
    sd: require('./videos/anna47.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna47.hd.mp4' }
  },
  anna5: {
    sd: require('./videos/anna5.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna5.hd.mp4' }
  },
  anna6: {
    sd: require('./videos/anna6.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna6.hd.mp4' }
  },
  anna7: {
    sd: require('./videos/anna7.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna7.hd.mp4' }
  },
  anna8: {
    sd: require('./videos/anna8.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna8.hd.mp4' }
  },
  anna9: {
    sd: require('./videos/anna9.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna9.hd.mp4' }
  },
  anna9a: {
    sd: require('./videos/anna9a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna9a.hd.mp4' }
  },
  anton1: {
    sd: require('./videos/anton1.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton1.hd.mp4' }
  },
  anton10: {
    sd: require('./videos/anton10.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton10.hd.mp4' }
  },
  anton11: {
    sd: require('./videos/anton11.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton11.hd.mp4' }
  },
  anton11a: {
    sd: require('./videos/anton11a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton11a.hd.mp4' }
  },
  anton12: {
    sd: require('./videos/anton12.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton12.hd.mp4' }
  },
  anton13: {
    sd: require('./videos/anton13.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton13.hd.mp4' }
  },
  anton14: {
    sd: require('./videos/anton14.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton14.hd.mp4' }
  },
  anton15: {
    sd: require('./videos/anton15.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton15.hd.mp4' }
  },
  anton16: {
    sd: require('./videos/anton16.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton16.hd.mp4' }
  },
  anton17: {
    sd: require('./videos/anton17.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton17.hd.mp4' }
  },
  anton18: {
    sd: require('./videos/anton18.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton18.hd.mp4' }
  },
  anton19: {
    sd: require('./videos/anton19.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton19.hd.mp4' }
  },
  anton2: {
    sd: require('./videos/anton2.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton2.hd.mp4' }
  },
  anton20: {
    sd: require('./videos/anton20.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton20.hd.mp4' }
  },
  anton21: {
    sd: require('./videos/anton21.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton21.hd.mp4' }
  },
  anton22: {
    sd: require('./videos/anton22.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton22.hd.mp4' }
  },
  anton23: {
    sd: require('./videos/anton23.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton23.hd.mp4' }
  },
  anton24: {
    sd: require('./videos/anton24.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton24.hd.mp4' }
  },
  anton25: {
    sd: require('./videos/anton25.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton25.hd.mp4' }
  },
  anton26: {
    sd: require('./videos/anton26.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton26.hd.mp4' }
  },
  anton27: {
    sd: require('./videos/anton27.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton27.hd.mp4' }
  },
  anton28: {
    sd: require('./videos/anton28.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton28.hd.mp4' }
  },
  anton29: {
    sd: require('./videos/anton29.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton29.hd.mp4' }
  },
  anton2a: {
    sd: require('./videos/anton2a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton2a.hd.mp4' }
  },
  anton3: {
    sd: require('./videos/anton3.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton3.hd.mp4' }
  },
  anton30: {
    sd: require('./videos/anton30.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton30.hd.mp4' }
  },
  anton31: {
    sd: require('./videos/anton31.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton31.hd.mp4' }
  },
  anton31a: {
    sd: require('./videos/anton31a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton31a.hd.mp4' }
  },
  anton32: {
    sd: require('./videos/anton32.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton32.hd.mp4' }
  },
  anton33: {
    sd: require('./videos/anton33.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton33.hd.mp4' }
  },
  anton34: {
    sd: require('./videos/anton34.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton34.hd.mp4' }
  },
  anton35: {
    sd: require('./videos/anton35.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton35.hd.mp4' }
  },
  anton36: {
    sd: require('./videos/anton36.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton36.hd.mp4' }
  },
  anton36a: {
    sd: require('./videos/anton36a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton36a.hd.mp4' }
  },
  anton37: {
    sd: require('./videos/anton37.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton37.hd.mp4' }
  },
  anton38: {
    sd: require('./videos/anton38.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton38.hd.mp4' }
  },
  anton39: {
    sd: require('./videos/anton39.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton39.hd.mp4' }
  },
  anton4: {
    sd: require('./videos/anton4.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton4.hd.mp4' }
  },
  anton40: {
    sd: require('./videos/anton40.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton40.hd.mp4' }
  },
  anton41: {
    sd: require('./videos/anton41.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton41.hd.mp4' }
  },
  anton42: {
    sd: require('./videos/anton42.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton42.hd.mp4' }
  },
  anton43: {
    sd: require('./videos/anton43.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton43.hd.mp4' }
  },
  anton44: {
    sd: require('./videos/anton44.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton44.hd.mp4' }
  },
  anton45: {
    sd: require('./videos/anton45.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton45.hd.mp4' }
  },
  anton46: {
    sd: require('./videos/anton46.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton46.hd.mp4' }
  },
  anton46a: {
    sd: require('./videos/anton46a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton46a.hd.mp4' }
  },
  anton46b: {
    sd: require('./videos/anton46b.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton46b.hd.mp4' }
  },
  anton46c: {
    sd: require('./videos/anton46c.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton46c.hd.mp4' }
  },
  anton46d: {
    sd: require('./videos/anton46d.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton46d.hd.mp4' }
  },
  anton47: {
    sd: require('./videos/anton47.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton47.hd.mp4' }
  },
  anton48: {
    sd: require('./videos/anton48.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton48.hd.mp4' }
  },
  anton49: {
    sd: require('./videos/anton49.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton49.hd.mp4' }
  },
  anton5: {
    sd: require('./videos/anton5.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton5.hd.mp4' }
  },
  anton50: {
    sd: require('./videos/anton50.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton50.hd.mp4' }
  },
  anton51: {
    sd: require('./videos/anton51.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton51.hd.mp4' }
  },
  anton52: {
    sd: require('./videos/anton52.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton52.hd.mp4' }
  },
  anton53: {
    sd: require('./videos/anton53.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton53.hd.mp4' }
  },
  anton54: {
    sd: require('./videos/anton54.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton54.hd.mp4' }
  },
  anton55: {
    sd: require('./videos/anton55.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton55.hd.mp4' }
  },
  anton56: {
    sd: require('./videos/anton56.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton56.hd.mp4' }
  },
  anton57: {
    sd: require('./videos/anton57.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton57.hd.mp4' }
  },
  anton6: {
    sd: require('./videos/anton6.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton6.hd.mp4' }
  },
  anton7: {
    sd: require('./videos/anton7.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton7.hd.mp4' }
  },
  anton7a: {
    sd: require('./videos/anton7a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton7a.hd.mp4' }
  },
  anton8: {
    sd: require('./videos/anton8.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton8.hd.mp4' }
  },
  anton8a: {
    sd: require('./videos/anton8a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton8a.hd.mp4' }
  },
  anton8b: {
    sd: require('./videos/anton8b.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton8b.hd.mp4' }
  },
  anton9: {
    sd: require('./videos/anton9.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton9.hd.mp4' }
  },
  explanation_show_letter: {
    sd: require('./videos/explanation_show_letter.sd.mp4'),
    hd: {
      uri: 'https://assets.serlo.org/serlo-abc/explanation_show_letter.hd.mp4'
    }
  },
  explanation_show_word: {
    sd: require('./videos/explanation_show_word.sd.mp4'),
    hd: {
      uri: 'https://assets.serlo.org/serlo-abc/explanation_show_word.hd.mp4'
    }
  },
  explanation_write_letter: {
    sd: require('./videos/explanation_write_letter.sd.mp4'),
    hd: {
      uri: 'https://assets.serlo.org/serlo-abc/explanation_write_letter.hd.mp4'
    }
  },
  nena1: {
    sd: require('./videos/nena1.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena1.hd.mp4' }
  },
  nena10: {
    sd: require('./videos/nena10.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena10.hd.mp4' }
  },
  nena11: {
    sd: require('./videos/nena11.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena11.hd.mp4' }
  },
  nena12: {
    sd: require('./videos/nena12.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena12.hd.mp4' }
  },
  nena13: {
    sd: require('./videos/nena13.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena13.hd.mp4' }
  },
  nena14: {
    sd: require('./videos/nena14.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena14.hd.mp4' }
  },
  nena15: {
    sd: require('./videos/nena15.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena15.hd.mp4' }
  },
  nena16: {
    sd: require('./videos/nena16.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena16.hd.mp4' }
  },
  nena17: {
    sd: require('./videos/nena17.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena17.hd.mp4' }
  },
  nena18: {
    sd: require('./videos/nena18.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena18.hd.mp4' }
  },
  nena19: {
    sd: require('./videos/nena19.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena19.hd.mp4' }
  },
  nena2: {
    sd: require('./videos/nena2.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena2.hd.mp4' }
  },
  nena20: {
    sd: require('./videos/nena20.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena20.hd.mp4' }
  },
  nena21: {
    sd: require('./videos/nena21.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena21.hd.mp4' }
  },
  nena22: {
    sd: require('./videos/nena22.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena22.hd.mp4' }
  },
  nena23: {
    sd: require('./videos/nena23.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena23.hd.mp4' }
  },
  nena24: {
    sd: require('./videos/nena24.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena24.hd.mp4' }
  },
  nena25: {
    sd: require('./videos/nena25.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena25.hd.mp4' }
  },
  nena26: {
    sd: require('./videos/nena26.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena26.hd.mp4' }
  },
  nena27: {
    sd: require('./videos/nena27.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena27.hd.mp4' }
  },
  nena28: {
    sd: require('./videos/nena28.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena28.hd.mp4' }
  },
  nena29: {
    sd: require('./videos/nena29.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena29.hd.mp4' }
  },
  nena3: {
    sd: require('./videos/nena3.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena3.hd.mp4' }
  },
  nena30: {
    sd: require('./videos/nena30.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena30.hd.mp4' }
  },
  nena31: {
    sd: require('./videos/nena31.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena31.hd.mp4' }
  },
  nena32: {
    sd: require('./videos/nena32.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena32.hd.mp4' }
  },
  nena33: {
    sd: require('./videos/nena33.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena33.hd.mp4' }
  },
  nena34: {
    sd: require('./videos/nena34.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena34.hd.mp4' }
  },
  nena35: {
    sd: require('./videos/nena35.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena35.hd.mp4' }
  },
  nena35a: {
    sd: require('./videos/nena35a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena35a.hd.mp4' }
  },
  nena36: {
    sd: require('./videos/nena36.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena36.hd.mp4' }
  },
  nena37: {
    sd: require('./videos/nena37.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena37.hd.mp4' }
  },
  nena38: {
    sd: require('./videos/nena38.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena38.hd.mp4' }
  },
  nena39: {
    sd: require('./videos/nena39.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena39.hd.mp4' }
  },
  nena39a: {
    sd: require('./videos/nena39a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena39a.hd.mp4' }
  },
  nena39b: {
    sd: require('./videos/nena39b.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena39b.hd.mp4' }
  },
  nena4: {
    sd: require('./videos/nena4.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena4.hd.mp4' }
  },
  nena40: {
    sd: require('./videos/nena40.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena40.hd.mp4' }
  },
  nena41: {
    sd: require('./videos/nena41.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena41.hd.mp4' }
  },
  nena42: {
    sd: require('./videos/nena42.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena42.hd.mp4' }
  },
  nena43: {
    sd: require('./videos/nena43.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena43.hd.mp4' }
  },
  nena44: {
    sd: require('./videos/nena44.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena44.hd.mp4' }
  },
  nena45: {
    sd: require('./videos/nena45.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena45.hd.mp4' }
  },
  nena46: {
    sd: require('./videos/nena46.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena46.hd.mp4' }
  },
  nena47: {
    sd: require('./videos/nena47.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena47.hd.mp4' }
  },
  nena47a: {
    sd: require('./videos/nena47a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena47a.hd.mp4' }
  },
  nena47b: {
    sd: require('./videos/nena47b.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena47b.hd.mp4' }
  },
  nena47c: {
    sd: require('./videos/nena47c.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena47c.hd.mp4' }
  },
  nena48: {
    sd: require('./videos/nena48.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena48.hd.mp4' }
  },
  nena49: {
    sd: require('./videos/nena49.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena49.hd.mp4' }
  },
  nena5: {
    sd: require('./videos/nena5.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena5.hd.mp4' }
  },
  nena50: {
    sd: require('./videos/nena50.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena50.hd.mp4' }
  },
  nena51: {
    sd: require('./videos/nena51.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena51.hd.mp4' }
  },
  nena52: {
    sd: require('./videos/nena52.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena52.hd.mp4' }
  },
  nena52a: {
    sd: require('./videos/nena52a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena52a.hd.mp4' }
  },
  nena53: {
    sd: require('./videos/nena53.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena53.hd.mp4' }
  },
  nena54: {
    sd: require('./videos/nena54.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena54.hd.mp4' }
  },
  nena55: {
    sd: require('./videos/nena55.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena55.hd.mp4' }
  },
  nena56: {
    sd: require('./videos/nena56.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena56.hd.mp4' }
  },
  nena56a: {
    sd: require('./videos/nena56a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena56a.hd.mp4' }
  },
  nena57: {
    sd: require('./videos/nena57.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena57.hd.mp4' }
  },
  nena58: {
    sd: require('./videos/nena58.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena58.hd.mp4' }
  },
  nena59: {
    sd: require('./videos/nena59.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena59.hd.mp4' }
  },
  nena6: {
    sd: require('./videos/nena6.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena6.hd.mp4' }
  },
  nena60: {
    sd: require('./videos/nena60.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena60.hd.mp4' }
  },
  nena61: {
    sd: require('./videos/nena61.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena61.hd.mp4' }
  },
  nena62: {
    sd: require('./videos/nena62.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena62.hd.mp4' }
  },
  nena63: {
    sd: require('./videos/nena63.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena63.hd.mp4' }
  },
  nena64: {
    sd: require('./videos/nena64.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena64.hd.mp4' }
  },
  nena65: {
    sd: require('./videos/nena65.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena65.hd.mp4' }
  },
  nena66: {
    sd: require('./videos/nena66.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena66.hd.mp4' }
  },
  nena6a: {
    sd: require('./videos/nena6a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena6a.hd.mp4' }
  },
  nena7: {
    sd: require('./videos/nena7.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena7.hd.mp4' }
  },
  nena7a: {
    sd: require('./videos/nena7a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena7a.hd.mp4' }
  },
  nena8: {
    sd: require('./videos/nena8.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena8.hd.mp4' }
  },
  nena9: {
    sd: require('./videos/nena9.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena9.hd.mp4' }
  },
  praise1: {
    sd: require('./videos/praise1.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise1.hd.mp4' }
  },
  praise10: {
    sd: require('./videos/praise10.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise10.hd.mp4' }
  },
  praise11: {
    sd: require('./videos/praise11.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise11.hd.mp4' }
  },
  praise12: {
    sd: require('./videos/praise12.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise12.hd.mp4' }
  },
  praise2: {
    sd: require('./videos/praise2.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise2.hd.mp4' }
  },
  praise3: {
    sd: require('./videos/praise3.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise3.hd.mp4' }
  },
  praise4: {
    sd: require('./videos/praise4.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise4.hd.mp4' }
  },
  praise5: {
    sd: require('./videos/praise5.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise5.hd.mp4' }
  },
  praise6: {
    sd: require('./videos/praise6.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise6.hd.mp4' }
  },
  praise7: {
    sd: require('./videos/praise7.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise7.hd.mp4' }
  },
  praise8: {
    sd: require('./videos/praise8.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise8.hd.mp4' }
  },
  praise9: {
    sd: require('./videos/praise9.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise9.hd.mp4' }
  },
  serlo1: {
    sd: require('./videos/serlo1.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo1.hd.mp4' }
  },
  serlo10: {
    sd: require('./videos/serlo10.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo10.hd.mp4' }
  },
  serlo11: {
    sd: require('./videos/serlo11.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo11.hd.mp4' }
  },
  serlo12: {
    sd: require('./videos/serlo12.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo12.hd.mp4' }
  },
  serlo13: {
    sd: require('./videos/serlo13.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo13.hd.mp4' }
  },
  serlo14: {
    sd: require('./videos/serlo14.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo14.hd.mp4' }
  },
  serlo15: {
    sd: require('./videos/serlo15.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo15.hd.mp4' }
  },
  serlo16: {
    sd: require('./videos/serlo16.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo16.hd.mp4' }
  },
  serlo17: {
    sd: require('./videos/serlo17.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo17.hd.mp4' }
  },
  serlo18: {
    sd: require('./videos/serlo18.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo18.hd.mp4' }
  },
  serlo19: {
    sd: require('./videos/serlo19.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo19.hd.mp4' }
  },
  serlo2: {
    sd: require('./videos/serlo2.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo2.hd.mp4' }
  },
  serlo20: {
    sd: require('./videos/serlo20.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo20.hd.mp4' }
  },
  serlo3: {
    sd: require('./videos/serlo3.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo3.hd.mp4' }
  },
  serlo4: {
    sd: require('./videos/serlo4.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo4.hd.mp4' }
  },
  serlo5: {
    sd: require('./videos/serlo5.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo5.hd.mp4' }
  },
  serlo6: {
    sd: require('./videos/serlo6.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo6.hd.mp4' }
  },
  serlo7: {
    sd: require('./videos/serlo7.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo7.hd.mp4' }
  },
  serlo8: {
    sd: require('./videos/serlo8.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo8.hd.mp4' }
  },
  serlo9: {
    sd: require('./videos/serlo9.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo9.hd.mp4' }
  },
  soto1: {
    sd: require('./videos/soto1.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto1.hd.mp4' }
  },
  soto10: {
    sd: require('./videos/soto10.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto10.hd.mp4' }
  },
  soto11: {
    sd: require('./videos/soto11.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto11.hd.mp4' }
  },
  soto12: {
    sd: require('./videos/soto12.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto12.hd.mp4' }
  },
  soto13: {
    sd: require('./videos/soto13.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto13.hd.mp4' }
  },
  soto14: {
    sd: require('./videos/soto14.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto14.hd.mp4' }
  },
  soto14a: {
    sd: require('./videos/soto14a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto14a.hd.mp4' }
  },
  soto2: {
    sd: require('./videos/soto2.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto2.hd.mp4' }
  },
  soto3: {
    sd: require('./videos/soto3.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto3.hd.mp4' }
  },
  soto4: {
    sd: require('./videos/soto4.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto4.hd.mp4' }
  },
  soto5: {
    sd: require('./videos/soto5.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto5.hd.mp4' }
  },
  soto5a: {
    sd: require('./videos/soto5a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto5a.hd.mp4' }
  },
  soto6: {
    sd: require('./videos/soto6.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto6.hd.mp4' }
  },
  soto7: {
    sd: require('./videos/soto7.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto7.hd.mp4' }
  },
  soto8: {
    sd: require('./videos/soto8.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto8.hd.mp4' }
  },
  soto9: {
    sd: require('./videos/soto9.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto9.hd.mp4' }
  },
  soto9a: {
    sd: require('./videos/soto9a.sd.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto9a.hd.mp4' }
  }
};

// @ts-ignore
export default videos as {
  [id: string]: { sd: AssetTypes.VideoAsset; hd: AssetTypes.VideoAsset };
};
