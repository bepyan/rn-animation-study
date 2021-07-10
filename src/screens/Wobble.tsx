import React from "react";
import { Button, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Container } from "../atoms";

const Wobble = () => {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  const onWobble = () => {
    rotation.value = withSequence(
      withTiming(-10, { duration: 50 }),
      //   true로 하면 끝날 때까지 기다리는 듯?
      withRepeat(withTiming(10, { duration: 100 }), 6, true),
      withTiming(0, { duration: 50 })
    );
  };

  return (
    <Container center>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="wobble" onPress={onWobble} />
      <Button
        title="rotate"
        onPress={() => (rotation.value = withSpring(Math.random() * 360))}
      />
      <Button title="reset" onPress={() => (rotation.value = withSpring(0))} />
    </Container>
  );
};

export default Wobble;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: "#150a76",
    marginVertical: 50,
  },
});
