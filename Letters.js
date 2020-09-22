import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class Letters extends React.Component {
  constructor() {
    super();

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
      p1: {
        left: new Animated.Value(pathing[0].left),
        top: new Animated.Value(pathing[0].top)
      },
      p2: {
        left: new Animated.Value(pathing[1].left),
        top: new Animated.Value(pathing[1].top)
      },
      p3: {
        left: new Animated.Value(pathing[2].left),
        top: new Animated.Value(pathing[2].top)
      },
      p4: {
        left: new Animated.Value(pathing[3].left),
        top: new Animated.Value(pathing[3].top)
      },
      p5: {
        left: new Animated.Value(pathing[4].left),
        top: new Animated.Value(pathing[4].top)
      },
      p6: {
        left: new Animated.Value(pathing[5].left),
        top: new Animated.Value(pathing[5].top)
      }
    };

    this.doShuffle = this.doShuffle.bind(this);
  }

  componentDidUpdate() {
    const { doShuffle } = this.props;

    if (doShuffle) this.doShuffle();
  }

  doShuffle() {
    const { pathing, p1, p2, p3, p4, p5, p6 } = this.state;

    const nums = [0, 1, 2, 3, 4, 5];
    const rand = [];
    let i = nums.length;
    let j = 0;

    for (i = nums.length; i > 0; i -= 1) {
      j = Math.floor(Math.random() * i);
      rand.push(nums[j]);
      nums.splice(j, 1);
    }

    Animated.spring(p1.left, {
      toValue: pathing[rand[0]].left,
      useNativeDriver: false
    }).start();
    Animated.spring(p1.top, {
      toValue: pathing[rand[0]].top,
      useNativeDriver: false
    }).start();

    Animated.spring(p2.left, {
      toValue: pathing[rand[1]].left,
      useNativeDriver: false
    }).start();
    Animated.spring(p2.top, {
      toValue: pathing[rand[1]].top,
      useNativeDriver: false
    }).start();

    Animated.spring(p3.left, {
      toValue: pathing[rand[2]].left,
      useNativeDriver: false
    }).start();
    Animated.spring(p3.top, {
      toValue: pathing[rand[2]].top,
      useNativeDriver: false
    }).start();

    Animated.spring(p4.left, {
      toValue: pathing[rand[3]].left,
      useNativeDriver: false
    }).start();
    Animated.spring(p4.top, {
      toValue: pathing[rand[3]].top,
      useNativeDriver: false
    }).start();

    Animated.spring(p5.left, {
      toValue: pathing[rand[4]].left,
      useNativeDriver: false
    }).start();
    Animated.spring(p5.top, {
      toValue: pathing[rand[4]].top,
      useNativeDriver: false
    }).start();

    Animated.spring(p6.left, {
      toValue: pathing[rand[5]].left,
      useNativeDriver: false
    }).start();
    Animated.spring(p6.top, {
      toValue: pathing[rand[5]].top,
      useNativeDriver: false
    }).start();
  }

  render() {
    const { p1, p2, p3, p4, p5, p6 } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.containerLetter, { left: p1.left, top: p1.top }]}
        >
          <Text style={styles.letter}>N</Text>
        </Animated.View>
        <Animated.View
          style={[styles.containerLetter, { left: p2.left, top: p2.top }]}
        >
          <Text style={styles.letter}>R</Text>
        </Animated.View>
        <Animated.View
          style={[styles.containerLetter, { left: p3.left, top: p3.top }]}
        >
          <Text style={styles.letter}>S</Text>
        </Animated.View>
        <Animated.View
          style={[styles.containerLetter, { left: p4.left, top: p4.top }]}
        >
          <Text style={styles.letter}>M</Text>
        </Animated.View>
        <Animated.View
          style={[styles.containerLetter, { left: p5.left, top: p5.top }]}
        >
          <Text style={styles.letter}>O</Text>
        </Animated.View>
        <Animated.View
          style={[styles.containerLetter, { left: p6.left, top: p6.top }]}
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
