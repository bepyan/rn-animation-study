import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, View, Image, Animated } from "react-native";

import Circle from "./Circle";
import Item from "./Item";
import data from "./data";
import Pagination from "./Pagination";
import Ticker from "./Ticker";

const { width } = Dimensions.get("window");
const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;
const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.6;

const HeadPhonesCarousel = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />
      <Circle scrollX={scrollX} radius={CIRCLE_SIZE} />
      <Animated.FlatList
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({ item, index }) => (
          <Item {...item} index={index} scrollX={scrollX} />
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
      <Image
        style={styles.logo}
        source={{
          uri: "https://github.com/catalinmiron/react-native-headphones-carousel/blob/master/assets/ue_black_logo.png?raw=true",
        }}
      />
      <Pagination scrollX={scrollX} size={DOT_SIZE} />
      <Ticker scrollX={scrollX} tickerHeight={TICKER_HEIGHT} />
    </View>
  );
};

export default HeadPhonesCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    opacity: 0.9,
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH,
    resizeMode: "contain",
    position: "absolute",
    left: 10,
    bottom: 10,
    transform: [
      { translateX: -LOGO_WIDTH / 2 },
      { translateY: -LOGO_HEIGHT / 2 },
      { rotateZ: "-90deg" },
      { translateX: LOGO_WIDTH / 2 },
      { translateY: LOGO_HEIGHT / 2 },
    ],
  },
});
