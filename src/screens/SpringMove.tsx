import React from "react";
import { StyleSheet, Button } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Container } from "../atoms";

const SpringMove = () => {
  const offset = useSharedValue(0);
  offset.value = withTiming(100, {
    duration: 500,
    easing: Easing.out(Easing.exp),
  });

  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value * 255,
        },
      ],
    };
  });

  /* 스타일에 spring을 적용해서 애니메이션을 적용할 수 있다. */
  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });

  return (
    <Container>
      <Animated.View style={[styles.box, defaultSpringStyles]} />
      <Animated.View style={[styles.box, customSpringStyles]} />

      {/* spring을 적용안하면 순 간 이 동 */}
      <Button onPress={() => (offset.value = Math.random())} title="Move" />

      {/* 입력에서 spring을 적용해서  */}
      <Button
        onPress={() => {
          offset.value = withSpring(
            Math.random(),
            { damping: 20, stiffness: 90 },
            (finished) => {
              if (finished) {
                console.log("ANIMATION ENDED");
              } else {
                console.log("ANIMATION GOT CANCELLED");
              }
            }
          );
        }}
        title="Custom Move"
      />
    </Container>
  );
};
export default SpringMove;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: "#150a76",
    marginVertical: 10,
  },
});
