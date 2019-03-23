import React from "react";
import { Animated, Text, View, TouchableWithoutFeedback } from "react-native";

class Scale extends React.Component {
  state = {
    animation: new Animated.Value(1)
  };

  startAnimation = () => {
    this.state.animation.addListener(({value}) => {
      console.log(value);
    })
    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 2,
      tension: 160
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 100
      }).start()
    });
  };

  render() {
    const { animation } = this.state;
    const animatedStyle = {
      transform: [{ scale: animation }]
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
              { height: 100, width: 100, backgroundColor: "tomato" },
              animatedStyle
            ]}
          >
            <Text>Spring Function</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Scale;
