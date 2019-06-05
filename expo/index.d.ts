declare module 'expo' {
  const AppLoading: any;
  namespace Audio {
    const INTERRUPTION_MODE_ANDROID_DO_NOT_MIX: unknown;
    const INTERRUPTION_MODE_IOS_DO_NOT_MIX: unknown;
    const RECORDING_OPTIONS_PRESET_HIGH_QUALITY: unknown;
    class Sound {
      public unloadAsync(): void;
    }
    const Recording: any;
    function setAudioModeAsync(params: {
      allowsRecordingIOS: boolean;
      playThroughEarpieceAndroid: boolean;
      interruptionModeIOS: unknown
      playsInSilentModeIOS: boolean,
      playsInSilentLockedModeIOS: boolean,
      shouldDuckAndroid: boolean
    }): void;
  }
  const Constants: any;
  const Permissions: any;
  const Svg: any;
  const WebBrowser: any;
}
