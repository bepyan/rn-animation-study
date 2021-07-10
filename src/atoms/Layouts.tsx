import React from "react";
import { View } from "react-native";

interface ContainerProps {
  center?: boolean;
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
        },
        props.center && { alignItems: "center" },
      ]}
    >
      {props.children}
    </View>
  );
};
