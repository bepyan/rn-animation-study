import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import data from "./data";

interface TickerProps {
  scrollX: Animated.Value;
  tickerHeight: number;
}

const { width } = Dimensions.get("window");

const Ticker = ({ scrollX, tickerHeight }: TickerProps) => {
  const inputRange = [-width, 0, width];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [tickerHeight, 0, -tickerHeight],
  });
  return (
    <View style={[{ height: tickerHeight }, styles.tickerContainer]}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map(({ type }, index) => {
          return (
            <Text
              key={index}
              style={[
                { fontSize: tickerHeight, lineHeight: tickerHeight },
                styles.tickerText,
              ]}
            >
              {type}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default Ticker;

const styles = StyleSheet.create({
  tickerContainer: {
    position: "absolute",
    top: 40,
    left: 20,
    overflow: "hidden",
  },
  tickerText: {
    textTransform: "uppercase",
    fontWeight: "800",
  },
});
