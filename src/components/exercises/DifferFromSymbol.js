import React from 'react';
import { View } from 'react-native';
import { PRIMARY } from '../../styles/colors';
import { RoundTextButton, RoundText } from '../Components';


const DifferFromSymbol =({letter}) => {

return (
    <View
      style={{
        flex: 1,
        backgroundColor: PRIMARY,
        alignItems: 'center'
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 300,
          marginTop: 50
        }}
      >
       <RoundTextButton
                  style={{ margin: 5 }}
                  text= {letter[0]}
                  size={80}
                />
       <RoundTextButton
                  style={{ margin: 5 }}
                  text={letter[1]}
                  size={80}
                />
       <RoundTextButton
                  style={{ margin: 5 }}
                  text={letter[2]}
                  size={80}
                />
     </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 300
        }}
      >
       <RoundTextButton
                  style={{ margin: 5 }}
                  text={letter[3]}
                  size={80}
                />
       <RoundTextButton
                  style={{ margin: 5 }}
                  text={letter[4]}
                  size={80}
                />
     </View>
   </View>)

};

export default DifferFromSymbol;