import React from "react";
import { Animated, View, PanResponder } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class DecayScreen extends React.Component {
  state = {
    animation: new Animated.ValueXY(0)
  };

  componentWillMount() {
    this._x = 0;
    this._y = 0;
    this.state.animation.addListener(value => {
      this._x = value.x;
      this._y = value.y;
    });
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onMoveShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: () => {
        this.state.animation.setOffset({
          x: this._x,
          y: this._y
        });
        this.state.animation.setValue({
          x: 0,
          y: 0
        });
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.animation.x,
          dy: this.state.animation.y
        }
      ]),
      onPanResponderRelease: (e, gesture) => {
        Animated.decay(this.state.animation, {
          velocity: { x: gesture.vx, y: gesture.vy },
          deceleration: 0.997
        }).start();
      }
    });
  }

  render() {
    const { animation } = this.state;

    const animatedStyle = {
      transform: animation.getTranslateTransform()
    };

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Animated.View
          style={[
            { height: 50, width: 50, backgroundColor: "tomato" },
            animatedStyle
          ]}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}

export default DecayScreen;
