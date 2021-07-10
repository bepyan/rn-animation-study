import React from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Container } from "../atoms";

const PanMovingBackBall = () => {
  const startingPosition = 0;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const pressed = useSharedValue(false);

  const movingBackHandler = useAnimatedGestureHandler({
    onStart: () => {
      pressed.value = true;
    },
    onActive: (event) => {
      x.value = startingPosition + event.translationX;
      y.value = startingPosition + event.translationY;
    },
    onEnd: () => {
      pressed.value = false;
      x.value = withSpring(startingPosition);
      y.value = withSpring(startingPosition);
    },
  });

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? "#00197260" : "#001972",
      transform: [
        { scale: withSpring(pressed.value ? 1.2 : 1) },
        { translateX: x.value },
        { translateY: y.value },
      ],
    };
  });

  return (
    <Container center>
      <PanGestureHandler onGestureEvent={movingBackHandler}>
        <Animated.View
          style={[
            {
              width: 100,
              height: 100,
              borderRadius: 50,
            },
            uas,
          ]}
        />
      </PanGestureHandler>
    </Container>
  );
};

export default PanMovingBackBall;
