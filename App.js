import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import SvgShuffle from './Svg.Shuffle';
import Letters from './Letters';

const background = require('./assets/background.jpg');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doShuffle: false
    };

    this.onShufflePress = this.onShufflePress.bind(this);
  }

  onShufflePress() {
    this.setState({ doShuffle: true }, () => {
      this.setState({
        doShuffle: false
      });
    });
  }

  render() {
    const { doShuffle } = this.state;

    return (
      <View style={styles.container}>
        <Image source={background} style={styles.backgroundImage} />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.onShufflePress}
          style={styles.buttonShuffle}
        >
          <SvgShuffle />
        </TouchableOpacity>

        <View style={styles.containerLetters}>
          <Letters doShuffle={doShuffle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    flex: 1
  },
  backgroundImage: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%'
  },
  buttonShuffle: {
    alignItems: 'center',
    backgroundColor: '#999',
    borderColor: '#000',
    borderRadius: 26,
    borderWidth: 1,
    bottom: 228,
    height: 52,
    justifyContent: 'center',
    left: 20,
    position: 'absolute',
    width: 52
  },
  containerLetters: {
    alignSelf: 'center',
    backgroundColor: '#ccc',
    borderRadius: 115,
    bottom: 48,
    height: 230,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    width: 230
  },
  horiLine: {
    backgroundColor: 'purple',
    height: 1,
    position: 'absolute',
    top: 115,
    width: 230
  },
  vertLine: {
    backgroundColor: 'purple',
    height: 230,
    left: 115,
    position: 'absolute',
    width: 1
  }
});
