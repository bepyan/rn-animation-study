import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BolierScreen from "../screens/BoilerScreen";
import WidthChange from "../screens/WidthChange";
import SpringMove from "../screens/SpringMove";
import Wobble from "../screens/Wobble";
import TabGesture from "../screens/TabGesture";
import PanMovingBall from "../screens/PanMovingBall";
import PanMovingBackBall from "../screens/PanMovingBackBall";
import TodoList from "../screens/TodoList";

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BolierScreen} />
        <Drawer.Screen name="WidthChange" component={WidthChange} />
        <Drawer.Screen name="SpringMove" component={SpringMove} />
        <Drawer.Screen name="Wobble" component={Wobble} />
        <Drawer.Screen name="TabGesture" component={TabGesture} />
        <Drawer.Screen name="PanMovingBall" component={PanMovingBall} />
        <Drawer.Screen name="PanMovingBackBall" component={PanMovingBackBall} />
        <Drawer.Screen name="TodoList" component={TodoList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
