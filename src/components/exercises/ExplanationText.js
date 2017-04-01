import React from 'react';
import {View, Text} from 'react-native';
import {RoundButton} from '../Components';
import withAudio from '../helpers/withAudio';
import speakerImage from '../../assets/images/speaker.png';


const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(181,206,77)',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};


const UnwrappedExplanationText = ({text, sounds: [textSound]}) => {
  const play = () => {
    textSound.playAsync();
    textSound.setPlaybackFinishedCallback(() => {
      textSound.setPositionAsync(0);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
      <RoundButton icon={speakerImage} size={40} onPress={play}/>
    </View>
  );
};

const WrappedExplanationText = withAudio(UnwrappedExplanationText);

const ExplanationText = ({sound, ...props}) => {
  return <WrappedExplanationText sounds={[sound]} {...props}/>
}


export default ExplanationText;
