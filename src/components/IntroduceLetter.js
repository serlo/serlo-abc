import React from 'react';
import { View, Text } from 'react-native';


import { RoundImageWithBorder } from '../components/Components';
const IntroduceLetter = ({ images, letter }) => {
  
  

  
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#b5ce4d',
        alignItems: 'center',
        
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{ color: '#fff', fontSize: 50, fontWeight: 'bold',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 100,padding: 50 }}>{letter}</Text>
      </View>
      <View
        style={{flexDirection: 'row' ,marginTop:-10}}
      >
        <RoundImageWithBorder style={{margin:0, borderWidth: 15,borderColor: '#b5ce4d85'}}
          image={images[0]}
          size={200}
        />
        <RoundImageWithBorder style={{margin:-10, borderWidth: 15,borderColor: '#b5ce4d85'}}
          image={images[0]}
          size={180}
        />
      </View>
      <RoundImageWithBorder style={{margin:-10, borderWidth: 15,borderColor: '#b5ce4d85'}}
        image={images[0]}
        size={200}
      />
    </View>
  );
};

export default IntroduceLetter;
