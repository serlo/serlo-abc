import React, { Component } from 'react';
import View from 'react-native';

import PRIMARY from '../../styles/colors';
import Video from '../common/Video';

import BuildSentence from './BuildSentence';

const styles = {
  vidContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

class BuildSentenceVideo extends Component {
  constructor(props) {
    super(props);
}

render(){
	return(
		<View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          flex: 1,
          backgroundColor: PRIMARY
        }}
      	>
			<View style={styles.vidContainer}>
	          <Video video={this.props.video} />
	        </View>
	        <BuildSentence
	        	sentence={this.props.words}
	      	/>	
	    </View>    
		);
	}
}
export default BuildSentenceVideo;