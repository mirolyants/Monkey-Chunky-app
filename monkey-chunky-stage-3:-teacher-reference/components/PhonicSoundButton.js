import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      pressButtonIndex:'',
    };
  }
  playSound = async soundChunk => {
    console.log(soundChunk);
    var soundLink =
      'https://s3-whitehatjrcontent.whjr.online/phones/' +
      soundChunk +
      '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        //style={styles.chunkButton}
        style={this.props.buttonIndex===this.state.pressButtonIndex ?
        [styles.chunkButton,{backgroundColor:'blue'}]:[styles.chunkButton,{backgroundColor:'red'}]}

        onPress={() => {
          this.setState({pressButtonIndex:this.props.buttonIndex})
          ;
          this.playSound(this.props.soundChunk);
        }}>
        <Text style={styles.displayText}>{this.props.wordChunk}</Text>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});