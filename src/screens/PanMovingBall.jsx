import React from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Container } from "../atoms";

const GrowBall = () => {
  const startingPosition = 0;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const pressed = useSharedValue(false);

  const movingHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: () => {
      pressed.value = false;
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
      <PanGestureHandler onGestureEvent={movingHandler}>
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

export default GrowBall;
