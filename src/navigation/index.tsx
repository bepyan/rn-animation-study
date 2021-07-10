import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BolierScreen from "../screens/BoilerScreen";
import WidthChange from "../screens/WidthChange";
import SpringMove from "../screens/SpringMove";
import Wobble from "../screens/Wobble";

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BolierScreen} />
        <Drawer.Screen name="WidthChange" component={WidthChange} />
        <Drawer.Screen name="SpringMove" component={SpringMove} />
        <Drawer.Screen name="Wobble" component={Wobble} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
