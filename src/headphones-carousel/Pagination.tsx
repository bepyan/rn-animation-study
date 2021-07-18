import React from "react";
import { StyleSheet } from "react-native";
import { View, Dimensions, Animated } from "react-native";
import data from "./data";

const { width } = Dimensions.get("window");

interface PaginationProps {
  scrollX: Animated.Value;
  size: number;
}

const Pagination = ({ scrollX, size }: PaginationProps) => {
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-size, 0, size],
  });
  return (
    <View style={[{ height: size }, styles.pagination]}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            position: "absolute",
            transform: [{ translateX }],
          },
        ]}
      />
      {data.map((item) => {
        return (
          <View
            key={item.key}
            style={[{ width: size }, styles.paginationDotContainer]}
          >
            <View
              style={{
                width: size * 0.3,
                height: size * 0.3,
                borderRadius: size * 0.15,
                backgroundColor: item.color,
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  pagination: {
    position: "absolute",
    right: 20,
    bottom: 40,
    flexDirection: "row",
  },
  paginationDotContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  paginationIndicator: {
    borderWidth: 2,
    borderColor: "#ddd",
  },
});
