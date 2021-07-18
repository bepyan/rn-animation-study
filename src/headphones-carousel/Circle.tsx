import React from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";
import data from "./data";

interface CircleProps {
  scrollX: Animated.Value;
  radius: number;
}

const { width } = Dimensions.get("window");

const Circle = ({ scrollX, radius }: CircleProps) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
      {data.map(({ color }, index) => {
        const inputRange = [
          (index - 0.55) * width,
          index * width,
          (index + 0.55) * width,
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 0.2, 0],
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                width: radius,
                height: radius,
                borderRadius: radius / 2,
                backgroundColor: color,
                opacity,
                transform: [{ scale }],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    position: "absolute",
    top: "15%",
  },
});
