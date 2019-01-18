import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class Letters extends React.Component {
  constructor(props) {
    super(props);

    const pathing = [
      { left: 95, top: 10 },
      { left: 155, top: 50 },
      { left: 155, top: 140 },
      { left: 95, top: 175 },
      { left: 30, top: 140 },
      { left: 30, top: 50 }
    ];

    this.state = {
      pathing,
      p1L: new Animated.Value(pathing[0].left),
      p1T: new Animated.Value(pathing[0].top),

      p2L: new Animated.Value(pathing[1].left),
      p2T: new Animated.Value(pathing[1].top),

      p3L: new Animated.Value(pathing[2].left),
      p3T: new Animated.Value(pathing[2].top),

      p4L: new Animated.Value(pathing[3].left),
      p4T: new Animated.Value(pathing[3].top),

      p5L: new Animated.Value(pathing[4].left),
      p5T: new Animated.Value(pathing[4].top),

      p6L: new Animated.Value(pathing[5].left),
      p6T: new Animated.Value(pathing[5].top)
    };

    this.doShuffle = this.doShuffle.bind(this);
  }

  componentDidUpdate() {
    const { doShuffle } = this.props;

    if (doShuffle) this.doShuffle();
  }

  doShuffle() {
    const {
      pathing,
      p1L,
      p1T,
      p2L,
      p2T,
      p3L,
      p3T,
      p4L,
      p4T,
      p5L,
      p5T,
      p6L,
      p6T
    } = this.state;

    const nums = [0, 1, 2, 3, 4, 5];
    const rand = [];
    let i = nums.length;
    let j = 0;

    for (i = nums.length; i > 0; i -= 1) {
      j = Math.floor(Math.random() * i);
      rand.push(nums[j]);
      nums.splice(j, 1);
    }

    Animated.spring(p1L, { toValue: pathing[rand[0]].left }).start();
    Animated.spring(p1T, { toValue: pathing[rand[0]].top }).start();

    Animated.spring(p2L, { toValue: pathing[rand[1]].left }).start();
    Animated.spring(p2T, { toValue: pathing[rand[1]].top }).start();

    Animated.spring(p3L, { toValue: pathing[rand[2]].left }).start();
    Animated.spring(p3T, { toValue: pathing[rand[2]].top }).start();

    Animated.spring(p4L, { toValue: pathing[rand[3]].left }).start();
    Animated.spring(p4T, { toValue: pathing[rand[3]].top }).start();

    Animated.spring(p5L, { toValue: pathing[rand[4]].left }).start();
    Animated.spring(p5T, { toValue: pathing[rand[4]].top }).start();

    Animated.spring(p6L, { toValue: pathing[rand[5]].left }).start();
    Animated.spring(p6T, { toValue: pathing[rand[5]].top }).start();
  }

  render() {
    const {
      p1L,
      p1T,
      p2L,
      p2T,
      p3L,
      p3T,
      p4L,
      p4T,
      p5L,
      p5T,
      p6L,
      p6T
    } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.containerLetter, { left: p1L, top: p1T }]}
        >
          <Text style={styles.letter}>N</Text>
        </Animated.View>
        <Animated.View
          style={[styles.containerLetter, { left: p2L, top: p2T }]}
        >
          <Text style={styles.letter}>R</Text>
        </Animated.View>
        <Animated.View
          style={[styles.containerLetter, { left: p3L, top: p3T }]}
        >
          <Text style={styles.letter}>S</Text>
        </Animated.View>
        <Animated.View
          style={[styles.containerLetter, { left: p4L, top: p4T }]}
        >
          <Text style={styles.letter}>M</Text>
        </Animated.View>
        <Animated.View
          style={[styles.containerLetter, { left: p5L, top: p5T }]}
        >
          <Text style={styles.letter}>O</Text>
        </Animated.View>
        <Animated.View
          style={[styles.containerLetter, { left: p6L, top: p6T }]}
        >
          <Text style={styles.letter}>E</Text>
        </Animated.View>
      </View>
    );
  }
}

Letters.propTypes = {
  // required
  doShuffle: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  containerLetter: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    position: 'absolute',
    width: 40
  },
  letter: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Letters;
