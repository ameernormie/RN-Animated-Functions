import React from "react";
import { Animated, View, TouchableWithoutFeedback } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class AnimatedEvent extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 200,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  };

  render() {
    const { animation } = this.state;

    const backgroundInterpolate = animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
    });
    const backgroundStyle = {
      backgroundColor: backgroundInterpolate
    };
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: animation
                }
              }
            }
          ])}
        >
          <Animated.View style={[{ height: 3000 }, backgroundStyle]} />
        </ScrollView>
      </View>
    );
  }
}

export default AnimatedEvent;
