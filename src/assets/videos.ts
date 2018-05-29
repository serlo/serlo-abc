import { AssetTypes } from '../../packages/entities';

const videos = {
  a1: {
    sd: require('./videos/a1.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/a1.hd.mp4' }
  },
  a2: {
    sd: require('./videos/a2.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/a2.hd.mp4' }
  },
  a3: {
    sd: require('./videos/a3.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/a3.hd.mp4' }
  },
  a4: {
    sd: require('./videos/a4.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/a4.hd.mp4' }
  },
  anna1: {
    sd: require('./videos/anna1.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna1.hd.mp4' }
  },
  anna10: {
    sd: require('./videos/anna10.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna10.hd.mp4' }
  },
  anna11: {
    sd: require('./videos/anna11.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna11.hd.mp4' }
  },
  anna12: {
    sd: require('./videos/anna12.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna12.hd.mp4' }
  },
  anna13: {
    sd: require('./videos/anna13.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna13.hd.mp4' }
  },
  anna14: {
    sd: require('./videos/anna14.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna14.hd.mp4' }
  },
  anna15: {
    sd: require('./videos/anna15.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna15.hd.mp4' }
  },
  anna16: {
    sd: require('./videos/anna16.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna16.hd.mp4' }
  },
  anna17: {
    sd: require('./videos/anna17.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna17.hd.mp4' }
  },
  anna17a: {
    sd: require('./videos/anna17a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna17a.hd.mp4' }
  },
  anna18: {
    sd: require('./videos/anna18.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna18.hd.mp4' }
  },
  anna18a: {
    sd: require('./videos/anna18a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna18a.hd.mp4' }
  },
  anna19: {
    sd: require('./videos/anna19.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna19.hd.mp4' }
  },
  anna2: {
    sd: require('./videos/anna2.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna2.hd.mp4' }
  },
  anna20: {
    sd: require('./videos/anna20.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna20.hd.mp4' }
  },
  anna20a: {
    sd: require('./videos/anna20a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna20a.hd.mp4' }
  },
  anna22: {
    sd: require('./videos/anna22.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna22.hd.mp4' }
  },
  anna23: {
    sd: require('./videos/anna23.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna23.hd.mp4' }
  },
  anna24: {
    sd: require('./videos/anna24.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna24.hd.mp4' }
  },
  anna25: {
    sd: require('./videos/anna25.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna25.hd.mp4' }
  },
  anna26: {
    sd: require('./videos/anna26.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna26.hd.mp4' }
  },
  anna27: {
    sd: require('./videos/anna27.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna27.hd.mp4' }
  },
  anna28: {
    sd: require('./videos/anna28.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna28.hd.mp4' }
  },
  anna29: {
    sd: require('./videos/anna29.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna29.hd.mp4' }
  },
  anna3: {
    sd: require('./videos/anna3.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna3.hd.mp4' }
  },
  anna30: {
    sd: require('./videos/anna30.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna30.hd.mp4' }
  },
  anna31: {
    sd: require('./videos/anna31.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna31.hd.mp4' }
  },
  anna32: {
    sd: require('./videos/anna32.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna32.hd.mp4' }
  },
  anna33: {
    sd: require('./videos/anna33.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna33.hd.mp4' }
  },
  anna33a: {
    sd: require('./videos/anna33a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna33a.hd.mp4' }
  },
  anna34: {
    sd: require('./videos/anna34.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna34.hd.mp4' }
  },
  anna35: {
    sd: require('./videos/anna35.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna35.hd.mp4' }
  },
  anna36: {
    sd: require('./videos/anna36.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna36.hd.mp4' }
  },
  anna37: {
    sd: require('./videos/anna37.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna37.hd.mp4' }
  },
  anna37a: {
    sd: require('./videos/anna37a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna37a.hd.mp4' }
  },
  anna38: {
    sd: require('./videos/anna38.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna38.hd.mp4' }
  },
  anna38a: {
    sd: require('./videos/anna38a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna38a.hd.mp4' }
  },
  anna39: {
    sd: require('./videos/anna39.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna39.hd.mp4' }
  },
  anna39a: {
    sd: require('./videos/anna39a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna39a.hd.mp4' }
  },
  anna39b: {
    sd: require('./videos/anna39b.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna39b.hd.mp4' }
  },
  anna4: {
    sd: require('./videos/anna4.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna4.hd.mp4' }
  },
  anna40: {
    sd: require('./videos/anna40.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna40.hd.mp4' }
  },
  anna41: {
    sd: require('./videos/anna41.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna41.hd.mp4' }
  },
  anna42: {
    sd: require('./videos/anna42.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna42.hd.mp4' }
  },
  anna42a: {
    sd: require('./videos/anna42a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna42a.hd.mp4' }
  },
  anna42b: {
    sd: require('./videos/anna42b.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna42b.hd.mp4' }
  },
  anna42c: {
    sd: require('./videos/anna42c.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna42c.hd.mp4' }
  },
  anna43: {
    sd: require('./videos/anna43.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna43.hd.mp4' }
  },
  anna44: {
    sd: require('./videos/anna44.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna44.hd.mp4' }
  },
  anna45: {
    sd: require('./videos/anna45.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna45.hd.mp4' }
  },
  anna46: {
    sd: require('./videos/anna46.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna46.hd.mp4' }
  },
  anna47: {
    sd: require('./videos/anna47.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna47.hd.mp4' }
  },
  anna5: {
    sd: require('./videos/anna5.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna5.hd.mp4' }
  },
  anna6: {
    sd: require('./videos/anna6.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna6.hd.mp4' }
  },
  anna7: {
    sd: require('./videos/anna7.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna7.hd.mp4' }
  },
  anna8: {
    sd: require('./videos/anna8.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna8.hd.mp4' }
  },
  anna9: {
    sd: require('./videos/anna9.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna9.hd.mp4' }
  },
  anna9a: {
    sd: require('./videos/anna9a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anna9a.hd.mp4' }
  },
  anton1: {
    sd: require('./videos/anton1.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton1.hd.mp4' }
  },
  anton10: {
    sd: require('./videos/anton10.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton10.hd.mp4' }
  },
  anton11: {
    sd: require('./videos/anton11.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton11.hd.mp4' }
  },
  anton11a: {
    sd: require('./videos/anton11a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton11a.hd.mp4' }
  },
  anton12: {
    sd: require('./videos/anton12.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton12.hd.mp4' }
  },
  anton13: {
    sd: require('./videos/anton13.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton13.hd.mp4' }
  },
  anton14: {
    sd: require('./videos/anton14.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton14.hd.mp4' }
  },
  anton15: {
    sd: require('./videos/anton15.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton15.hd.mp4' }
  },
  anton16: {
    sd: require('./videos/anton16.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton16.hd.mp4' }
  },
  anton17: {
    sd: require('./videos/anton17.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton17.hd.mp4' }
  },
  anton18: {
    sd: require('./videos/anton18.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton18.hd.mp4' }
  },
  anton19: {
    sd: require('./videos/anton19.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton19.hd.mp4' }
  },
  anton2: {
    sd: require('./videos/anton2.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton2.hd.mp4' }
  },
  anton20: {
    sd: require('./videos/anton20.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton20.hd.mp4' }
  },
  anton21: {
    sd: require('./videos/anton21.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton21.hd.mp4' }
  },
  anton22: {
    sd: require('./videos/anton22.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton22.hd.mp4' }
  },
  anton23: {
    sd: require('./videos/anton23.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton23.hd.mp4' }
  },
  anton24: {
    sd: require('./videos/anton24.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton24.hd.mp4' }
  },
  anton25: {
    sd: require('./videos/anton25.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton25.hd.mp4' }
  },
  anton26: {
    sd: require('./videos/anton26.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton26.hd.mp4' }
  },
  anton27: {
    sd: require('./videos/anton27.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton27.hd.mp4' }
  },
  anton28: {
    sd: require('./videos/anton28.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton28.hd.mp4' }
  },
  anton29: {
    sd: require('./videos/anton29.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton29.hd.mp4' }
  },
  anton2a: {
    sd: require('./videos/anton2a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton2a.hd.mp4' }
  },
  anton3: {
    sd: require('./videos/anton3.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton3.hd.mp4' }
  },
  anton30: {
    sd: require('./videos/anton30.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton30.hd.mp4' }
  },
  anton31: {
    sd: require('./videos/anton31.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton31.hd.mp4' }
  },
  anton31a: {
    sd: require('./videos/anton31a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton31a.hd.mp4' }
  },
  anton32: {
    sd: require('./videos/anton32.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton32.hd.mp4' }
  },
  anton33: {
    sd: require('./videos/anton33.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton33.hd.mp4' }
  },
  anton34: {
    sd: require('./videos/anton34.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton34.hd.mp4' }
  },
  anton35: {
    sd: require('./videos/anton35.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton35.hd.mp4' }
  },
  anton36: {
    sd: require('./videos/anton36.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton36.hd.mp4' }
  },
  anton36a: {
    sd: require('./videos/anton36a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton36a.hd.mp4' }
  },
  anton37: {
    sd: require('./videos/anton37.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton37.hd.mp4' }
  },
  anton38: {
    sd: require('./videos/anton38.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton38.hd.mp4' }
  },
  anton39: {
    sd: require('./videos/anton39.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton39.hd.mp4' }
  },
  anton4: {
    sd: require('./videos/anton4.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton4.hd.mp4' }
  },
  anton40: {
    sd: require('./videos/anton40.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton40.hd.mp4' }
  },
  anton41: {
    sd: require('./videos/anton41.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton41.hd.mp4' }
  },
  anton42: {
    sd: require('./videos/anton42.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton42.hd.mp4' }
  },
  anton43: {
    sd: require('./videos/anton43.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton43.hd.mp4' }
  },
  anton44: {
    sd: require('./videos/anton44.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton44.hd.mp4' }
  },
  anton45: {
    sd: require('./videos/anton45.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton45.hd.mp4' }
  },
  anton46: {
    sd: require('./videos/anton46.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton46.hd.mp4' }
  },
  anton46a: {
    sd: require('./videos/anton46a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton46a.hd.mp4' }
  },
  anton46b: {
    sd: require('./videos/anton46b.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton46b.hd.mp4' }
  },
  anton46c: {
    sd: require('./videos/anton46c.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton46c.hd.mp4' }
  },
  anton46d: {
    sd: require('./videos/anton46d.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton46d.hd.mp4' }
  },
  anton47: {
    sd: require('./videos/anton47.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton47.hd.mp4' }
  },
  anton48: {
    sd: require('./videos/anton48.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton48.hd.mp4' }
  },
  anton49: {
    sd: require('./videos/anton49.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton49.hd.mp4' }
  },
  anton5: {
    sd: require('./videos/anton5.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton5.hd.mp4' }
  },
  anton50: {
    sd: require('./videos/anton50.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton50.hd.mp4' }
  },
  anton51: {
    sd: require('./videos/anton51.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton51.hd.mp4' }
  },
  anton52: {
    sd: require('./videos/anton52.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton52.hd.mp4' }
  },
  anton53: {
    sd: require('./videos/anton53.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton53.hd.mp4' }
  },
  anton54: {
    sd: require('./videos/anton54.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton54.hd.mp4' }
  },
  anton55: {
    sd: require('./videos/anton55.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton55.hd.mp4' }
  },
  anton56: {
    sd: require('./videos/anton56.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton56.hd.mp4' }
  },
  anton57: {
    sd: require('./videos/anton57.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton57.hd.mp4' }
  },
  anton6: {
    sd: require('./videos/anton6.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton6.hd.mp4' }
  },
  anton7: {
    sd: require('./videos/anton7.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton7.hd.mp4' }
  },
  anton7a: {
    sd: require('./videos/anton7a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton7a.hd.mp4' }
  },
  anton8: {
    sd: require('./videos/anton8.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton8.hd.mp4' }
  },
  anton8a: {
    sd: require('./videos/anton8a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton8a.hd.mp4' }
  },
  anton8b: {
    sd: require('./videos/anton8b.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton8b.hd.mp4' }
  },
  anton9: {
    sd: require('./videos/anton9.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/anton9.hd.mp4' }
  },
  au: {
    sd: require('./videos/au.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/au.hd.mp4' }
  },
  b: {
    sd: require('./videos/b.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/b.hd.mp4' }
  },
  ch1: {
    sd: require('./videos/ch1.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/ch1.hd.mp4' }
  },
  ch2: {
    sd: require('./videos/ch2.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/ch2.hd.mp4' }
  },
  d: {
    sd: require('./videos/d.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/d.hd.mp4' }
  },
  e1: {
    sd: require('./videos/e1.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/e1.hd.mp4' }
  },
  e2: {
    sd: require('./videos/e2.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/e2.hd.mp4' }
  },
  e3: {
    sd: require('./videos/e3.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/e3.hd.mp4' }
  },
  e4: {
    sd: require('./videos/e4.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/e4.hd.mp4' }
  },
  ei: {
    sd: require('./videos/ei.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/ei.hd.mp4' }
  },
  eu: {
    sd: require('./videos/eu.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/eu.hd.mp4' }
  },
  explanation_show_letter: {
    sd: require('./videos/explanation_show_letter.mp4'),
    hd: {
      uri: 'https://assets.serlo.org/serlo-abc/explanation_show_letter.hd.mp4'
    }
  },
  explanation_show_word: {
    sd: require('./videos/explanation_show_word.mp4'),
    hd: {
      uri: 'https://assets.serlo.org/serlo-abc/explanation_show_word.hd.mp4'
    }
  },
  explanation_write_letter: {
    sd: require('./videos/explanation_write_letter.mp4'),
    hd: {
      uri: 'https://assets.serlo.org/serlo-abc/explanation_write_letter.hd.mp4'
    }
  },
  f: {
    sd: require('./videos/f.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/f.hd.mp4' }
  },
  g: {
    sd: require('./videos/g.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/g.hd.mp4' }
  },
  h: {
    sd: require('./videos/h.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/h.hd.mp4' }
  },
  i1: {
    sd: require('./videos/i1.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/i1.hd.mp4' }
  },
  i2: {
    sd: require('./videos/i2.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/i2.hd.mp4' }
  },
  j: {
    sd: require('./videos/j.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/j.hd.mp4' }
  },
  k: {
    sd: require('./videos/k.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/k.hd.mp4' }
  },
  l: {
    sd: require('./videos/l.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/l.hd.mp4' }
  },
  m: {
    sd: require('./videos/m.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/m.hd.mp4' }
  },
  n: {
    sd: require('./videos/n.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/n.hd.mp4' }
  },
  nena1: {
    sd: require('./videos/nena1.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena1.hd.mp4' }
  },
  nena10: {
    sd: require('./videos/nena10.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena10.hd.mp4' }
  },
  nena11: {
    sd: require('./videos/nena11.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena11.hd.mp4' }
  },
  nena12: {
    sd: require('./videos/nena12.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena12.hd.mp4' }
  },
  nena13: {
    sd: require('./videos/nena13.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena13.hd.mp4' }
  },
  nena14: {
    sd: require('./videos/nena14.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena14.hd.mp4' }
  },
  nena15: {
    sd: require('./videos/nena15.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena15.hd.mp4' }
  },
  nena16: {
    sd: require('./videos/nena16.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena16.hd.mp4' }
  },
  nena17: {
    sd: require('./videos/nena17.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena17.hd.mp4' }
  },
  nena18: {
    sd: require('./videos/nena18.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena18.hd.mp4' }
  },
  nena19: {
    sd: require('./videos/nena19.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena19.hd.mp4' }
  },
  nena2: {
    sd: require('./videos/nena2.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena2.hd.mp4' }
  },
  nena20: {
    sd: require('./videos/nena20.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena20.hd.mp4' }
  },
  nena21: {
    sd: require('./videos/nena21.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena21.hd.mp4' }
  },
  nena22: {
    sd: require('./videos/nena22.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena22.hd.mp4' }
  },
  nena23: {
    sd: require('./videos/nena23.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena23.hd.mp4' }
  },
  nena24: {
    sd: require('./videos/nena24.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena24.hd.mp4' }
  },
  nena25: {
    sd: require('./videos/nena25.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena25.hd.mp4' }
  },
  nena26: {
    sd: require('./videos/nena26.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena26.hd.mp4' }
  },
  nena27: {
    sd: require('./videos/nena27.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena27.hd.mp4' }
  },
  nena28: {
    sd: require('./videos/nena28.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena28.hd.mp4' }
  },
  nena29: {
    sd: require('./videos/nena29.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena29.hd.mp4' }
  },
  nena3: {
    sd: require('./videos/nena3.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena3.hd.mp4' }
  },
  nena30: {
    sd: require('./videos/nena30.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena30.hd.mp4' }
  },
  nena31: {
    sd: require('./videos/nena31.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena31.hd.mp4' }
  },
  nena32: {
    sd: require('./videos/nena32.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena32.hd.mp4' }
  },
  nena33: {
    sd: require('./videos/nena33.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena33.hd.mp4' }
  },
  nena34: {
    sd: require('./videos/nena34.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena34.hd.mp4' }
  },
  nena35: {
    sd: require('./videos/nena35.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena35.hd.mp4' }
  },
  nena35a: {
    sd: require('./videos/nena35a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena35a.hd.mp4' }
  },
  nena36: {
    sd: require('./videos/nena36.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena36.hd.mp4' }
  },
  nena37: {
    sd: require('./videos/nena37.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena37.hd.mp4' }
  },
  nena38: {
    sd: require('./videos/nena38.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena38.hd.mp4' }
  },
  nena39: {
    sd: require('./videos/nena39.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena39.hd.mp4' }
  },
  nena39a: {
    sd: require('./videos/nena39a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena39a.hd.mp4' }
  },
  nena39b: {
    sd: require('./videos/nena39b.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena39b.hd.mp4' }
  },
  nena4: {
    sd: require('./videos/nena4.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena4.hd.mp4' }
  },
  nena40: {
    sd: require('./videos/nena40.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena40.hd.mp4' }
  },
  nena41: {
    sd: require('./videos/nena41.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena41.hd.mp4' }
  },
  nena42: {
    sd: require('./videos/nena42.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena42.hd.mp4' }
  },
  nena43: {
    sd: require('./videos/nena43.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena43.hd.mp4' }
  },
  nena44: {
    sd: require('./videos/nena44.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena44.hd.mp4' }
  },
  nena45: {
    sd: require('./videos/nena45.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena45.hd.mp4' }
  },
  nena46: {
    sd: require('./videos/nena46.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena46.hd.mp4' }
  },
  nena47: {
    sd: require('./videos/nena47.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena47.hd.mp4' }
  },
  nena47a: {
    sd: require('./videos/nena47a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena47a.hd.mp4' }
  },
  nena47b: {
    sd: require('./videos/nena47b.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena47b.hd.mp4' }
  },
  nena47c: {
    sd: require('./videos/nena47c.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena47c.hd.mp4' }
  },
  nena48: {
    sd: require('./videos/nena48.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena48.hd.mp4' }
  },
  nena49: {
    sd: require('./videos/nena49.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena49.hd.mp4' }
  },
  nena5: {
    sd: require('./videos/nena5.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena5.hd.mp4' }
  },
  nena50: {
    sd: require('./videos/nena50.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena50.hd.mp4' }
  },
  nena51: {
    sd: require('./videos/nena51.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena51.hd.mp4' }
  },
  nena52: {
    sd: require('./videos/nena52.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena52.hd.mp4' }
  },
  nena52a: {
    sd: require('./videos/nena52a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena52a.hd.mp4' }
  },
  nena53: {
    sd: require('./videos/nena53.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena53.hd.mp4' }
  },
  nena54: {
    sd: require('./videos/nena54.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena54.hd.mp4' }
  },
  nena55: {
    sd: require('./videos/nena55.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena55.hd.mp4' }
  },
  nena56: {
    sd: require('./videos/nena56.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena56.hd.mp4' }
  },
  nena56a: {
    sd: require('./videos/nena56a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena56a.hd.mp4' }
  },
  nena57: {
    sd: require('./videos/nena57.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena57.hd.mp4' }
  },
  nena58: {
    sd: require('./videos/nena58.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena58.hd.mp4' }
  },
  nena59: {
    sd: require('./videos/nena59.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena59.hd.mp4' }
  },
  nena6: {
    sd: require('./videos/nena6.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena6.hd.mp4' }
  },
  nena60: {
    sd: require('./videos/nena60.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena60.hd.mp4' }
  },
  nena61: {
    sd: require('./videos/nena61.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena61.hd.mp4' }
  },
  nena62: {
    sd: require('./videos/nena62.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena62.hd.mp4' }
  },
  nena63: {
    sd: require('./videos/nena63.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena63.hd.mp4' }
  },
  nena64: {
    sd: require('./videos/nena64.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena64.hd.mp4' }
  },
  nena65: {
    sd: require('./videos/nena65.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena65.hd.mp4' }
  },
  nena66: {
    sd: require('./videos/nena66.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena66.hd.mp4' }
  },
  nena6a: {
    sd: require('./videos/nena6a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena6a.hd.mp4' }
  },
  nena7: {
    sd: require('./videos/nena7.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena7.hd.mp4' }
  },
  nena7a: {
    sd: require('./videos/nena7a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena7a.hd.mp4' }
  },
  nena8: {
    sd: require('./videos/nena8.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena8.hd.mp4' }
  },
  nena9: {
    sd: require('./videos/nena9.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/nena9.hd.mp4' }
  },
  ng: {
    sd: require('./videos/ng.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/ng.hd.mp4' }
  },
  praise1: {
    sd: require('./videos/praise1.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise1.hd.mp4' }
  },
  praise10: {
    sd: require('./videos/praise10.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise10.hd.mp4' }
  },
  praise11: {
    sd: require('./videos/praise11.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise11.hd.mp4' }
  },
  praise12: {
    sd: require('./videos/praise12.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise12.hd.mp4' }
  },
  praise2: {
    sd: require('./videos/praise2.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise2.hd.mp4' }
  },
  praise3: {
    sd: require('./videos/praise3.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise3.hd.mp4' }
  },
  praise4: {
    sd: require('./videos/praise4.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise4.hd.mp4' }
  },
  praise5: {
    sd: require('./videos/praise5.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise5.hd.mp4' }
  },
  praise6: {
    sd: require('./videos/praise6.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise6.hd.mp4' }
  },
  praise7: {
    sd: require('./videos/praise7.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise7.hd.mp4' }
  },
  praise8: {
    sd: require('./videos/praise8.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise8.hd.mp4' }
  },
  praise9: {
    sd: require('./videos/praise9.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/praise9.hd.mp4' }
  },
  serlo1: {
    sd: require('./videos/serlo1.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo1.hd.mp4' }
  },
  serlo10: {
    sd: require('./videos/serlo10.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo10.hd.mp4' }
  },
  serlo11: {
    sd: require('./videos/serlo11.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo11.hd.mp4' }
  },
  serlo12: {
    sd: require('./videos/serlo12.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo12.hd.mp4' }
  },
  serlo13: {
    sd: require('./videos/serlo13.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo13.hd.mp4' }
  },
  serlo14: {
    sd: require('./videos/serlo14.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo14.hd.mp4' }
  },
  serlo15: {
    sd: require('./videos/serlo15.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo15.hd.mp4' }
  },
  serlo16: {
    sd: require('./videos/serlo16.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo16.hd.mp4' }
  },
  serlo17: {
    sd: require('./videos/serlo17.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo17.hd.mp4' }
  },
  serlo18: {
    sd: require('./videos/serlo18.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo18.hd.mp4' }
  },
  serlo19: {
    sd: require('./videos/serlo19.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo19.hd.mp4' }
  },
  serlo2: {
    sd: require('./videos/serlo2.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo2.hd.mp4' }
  },
  serlo20: {
    sd: require('./videos/serlo20.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo20.hd.mp4' }
  },
  serlo3: {
    sd: require('./videos/serlo3.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo3.hd.mp4' }
  },
  serlo4: {
    sd: require('./videos/serlo4.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo4.hd.mp4' }
  },
  serlo5: {
    sd: require('./videos/serlo5.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo5.hd.mp4' }
  },
  serlo6: {
    sd: require('./videos/serlo6.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo6.hd.mp4' }
  },
  serlo7: {
    sd: require('./videos/serlo7.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo7.hd.mp4' }
  },
  serlo8: {
    sd: require('./videos/serlo8.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo8.hd.mp4' }
  },
  serlo9: {
    sd: require('./videos/serlo9.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/serlo9.hd.mp4' }
  },
  soto1: {
    sd: require('./videos/soto1.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto1.hd.mp4' }
  },
  soto10: {
    sd: require('./videos/soto10.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto10.hd.mp4' }
  },
  soto11: {
    sd: require('./videos/soto11.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto11.hd.mp4' }
  },
  soto12: {
    sd: require('./videos/soto12.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto12.hd.mp4' }
  },
  soto13: {
    sd: require('./videos/soto13.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto13.hd.mp4' }
  },
  soto14: {
    sd: require('./videos/soto14.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto14.hd.mp4' }
  },
  soto14a: {
    sd: require('./videos/soto14a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto14a.hd.mp4' }
  },
  soto2: {
    sd: require('./videos/soto2.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto2.hd.mp4' }
  },
  soto3: {
    sd: require('./videos/soto3.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto3.hd.mp4' }
  },
  soto4: {
    sd: require('./videos/soto4.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto4.hd.mp4' }
  },
  soto5: {
    sd: require('./videos/soto5.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto5.hd.mp4' }
  },
  soto5a: {
    sd: require('./videos/soto5a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto5a.hd.mp4' }
  },
  soto6: {
    sd: require('./videos/soto6.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto6.hd.mp4' }
  },
  soto7: {
    sd: require('./videos/soto7.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto7.hd.mp4' }
  },
  soto8: {
    sd: require('./videos/soto8.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto8.hd.mp4' }
  },
  soto9: {
    sd: require('./videos/soto9.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto9.hd.mp4' }
  },
  soto9a: {
    sd: require('./videos/soto9a.mp4'),
    hd: { uri: 'https://assets.serlo.org/serlo-abc/soto9a.hd.mp4' }
  }
};

// @ts-ignore
export default videos as {
  [id: string]: { sd: AssetTypes.VideoAsset; hd: AssetTypes.VideoAsset };
};
