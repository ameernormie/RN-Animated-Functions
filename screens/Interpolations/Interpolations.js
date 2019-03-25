import React from "react";
import { Animated, Text, View, TouchableWithoutFeedback } from "react-native";

class Interpolation extends React.Component {
  state = {
    animation: new Animated.Value(0),
    colorAnimation: new Animated.Value(0),
    rotateAnimation: new Animated.Value(0),
    extrapolateAnimation: new Animated.Value(1)
  };

  startAnimation = () => {
    // this.state.animation.addListener(({value}) => {
    //   console.log(value);
    // })
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 2,
        duration: 300
      }).start();
    });
  };

  startColorAnimation = () => {
    Animated.timing(this.state.colorAnimation, {
      toValue: 1,
      duration: 500
    }).start(() => {
      Animated.timing(this.state.colorAnimation, {
        toValue: 2,
        duration: 300
      }).start();
    });
  };

  startRotateAnimation = () => {
    Animated.timing(this.state.rotateAnimation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      this.state.rotateAnimation.setValue(0);
    });
  };

  startExtrapolateAnimation = () => {
    Animated.timing(this.state.extrapolateAnimation, {
      toValue: 3,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.extrapolateAnimation, {
        toValue: 1,
        duration: 300
      }).start();
    });
  };

  render() {
    const animatedInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 300, 0]
    });

    const interpolatedinterpolate = animatedInterpolate.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 0.5]
    });

    const translateXInterpolate = animatedInterpolate.interpolate({
      inputRange: [0, 30, 50, 80, 120, 150, 250, 300],
      outputRange: [0, -30, -50, 80, -100, 300, 0, -100]
    });

    const animatedStyle = {
      transform: [
        { translateY: animatedInterpolate },
        { translateX: translateXInterpolate }
      ],
      opacity: interpolatedinterpolate
    };

    // 2nd example
    const colorInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ["rgb(71,255,99)", "rgb(255,99,71)", "rgb(99,71,255)"]
    });

    const colorAnimatedStyle = {
      backgroundColor: colorInterpolate
    };

    // 3rd example
    const rotateInterpolate = this.state.rotateAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    const yInterpolate = this.state.rotateAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["0deg", "0deg", "180deg"]
    });

    const rotateAnimatedStyle = {
      transform: [{ rotateX: rotateInterpolate }, { rotateY: yInterpolate }]
    };

    // 4th example
    const scaleInterpolate = this.state.extrapolateAnimation.interpolate({
      inputRange: [1, 2],
      outputRange: [1, 2],
      extrapolate: "clamp"
    });

    const extrapolateAnimatedStyle = {
      transform: [{ scale: scaleInterpolate }]
    };

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[
              {
                height: 100,
                width: 100,
                backgroundColor: "tomato",
                justifyContent: "center",
                alignItems: "center"
              },
              animatedStyle
            ]}
          >
            <Text>Crazy Interpolation</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.startColorAnimation}>
          <Animated.View
            style={[
              {
                height: 100,
                width: 100,
                backgroundColor: "tomato",
                justifyContent: "center",
                alignItems: "center"
              },
              colorAnimatedStyle
            ]}
          >
            <Text>Color Interpolation</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.startRotateAnimation}>
          <Animated.View
            style={[
              {
                height: 100,
                width: 100,
                backgroundColor: "tomato",
                justifyContent: "center",
                alignItems: "center"
              },
              rotateAnimatedStyle
            ]}
          >
            <Text>Rotation Interpolation</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.startExtrapolateAnimation}>
          <Animated.View
            style={[
              {
                height: 100,
                width: 100,
                backgroundColor: "tomato",
                justifyContent: "center",
                alignItems: "center"
              },
              extrapolateAnimatedStyle
            ]}
          >
            <Text>Extrapolate</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Interpolation;
