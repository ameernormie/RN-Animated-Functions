import React from "react";
import { Animated, View, TouchableWithoutFeedback } from "react-native";

class Interpolate extends React.Component {
  state = {
    rotationAnimation: new Animated.Value(0)
  };


  startRotationAnimation = () => {
    Animated.loop(Animated.timing(this.state.rotationAnimation, {
      toValue: 1,
      duration: 1500
    })).start();
  };

  render() {
    const { rotationAnimation } = this.state;


    const rotateInterpolation = rotationAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    const rotateAnimationStyle = {
      transform: [
        {
          rotate: rotateInterpolation
        }
      ]
    };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        {/* Rotation Interpolation */}
        <TouchableWithoutFeedback onPress={this.startRotationAnimation}>
          <Animated.View
            style={[
              {
                height: 100,
                width: 100,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "tomato"
              },
              rotateAnimationStyle
            ]}
          >
            <Animated.Text >
              Rotation Interpolation
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Interpolate;
