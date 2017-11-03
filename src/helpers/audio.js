import loadSound from '../assets/sounds';

export const getSound = id => {
  const load = loadSound[id];
  return load && load();
};

export const play = sound =>
  new Promise(resolve => {
    sound.playFromPositionAsync(0);

    sound.setOnPlaybackStatusUpdate(status => {
      if (status.didJustFinish) {
        sound.stopAsync().then(() => resolve());
      }
    });
  });

export const playAll = (sounds, delay = 1000) =>
  new Promise(resolve => {
    const playAllRecursive = ([sound, ...rest]) => {
      play(sound).then(() => {
        if (rest.length === 0) {
          return resolve();
        }

        setTimeout(() => {
          playAllRecursive(rest, delay);
        }, delay);
      });
    };

    playAllRecursive(sounds);
  });
