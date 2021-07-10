import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BolierScreen from "../screens/BoilerScreen";

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BolierScreen} />
        <Drawer.Screen name="Notifications" component={BolierScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
