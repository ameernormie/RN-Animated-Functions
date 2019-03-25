import React from "react";
import { Animated, Text, View, TouchableWithoutFeedback } from "react-native";

class Interpolation extends React.Component {
  state = {
    animation: new Animated.Value(0)
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

  render() {
    const { animation } = this.state;
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
      </View>
    );
  }
}

export default Interpolation;
