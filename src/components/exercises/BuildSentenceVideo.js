import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

import PRIMARY from '../../styles/colors';
import Video from '../common/Video';
import BuildSentence from './BuildSentence';

var Window = Dimensions.get('window');

export default class BuildSentenceVideo extends Component {
  constructor(props) {
    super(props);
}

render(){
	return(
		<View style={{flex: 3,
					 alignItems: 'center',
					 justifyContent: 'center',
					 backgroundColor: PRIMARY
					}}>
			<Video video={this.props.video}/>
	        <BuildSentence sentence={this.props.sentence} paddingTop={Window.height * 0.3}/>
	    </View>    
		);
	}
}