import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ScaleSpring from "../screens/ScaleSpring/ScaleScreenSpring";
import InterpolateLoop from "../screens/InterpolateLoop/InterpolateLoop";
import AnimatedEvent from "../screens/AnimatedEvent/AnimatedEvent";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    ScaleSpring: {
      screen: ScaleSpring
    },
    InterpolateLoop: {
      screen: InterpolateLoop
    },
    AnimatedEvent: {
      screen: AnimatedEvent
    },
  },

  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
