// jsx를 쓰는 이유... onGestureEvent 타입과 movingHandler 타입이 충돌난다..
// Types of parameters 'event' and 'event' are incompatible.

import React from "react";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Container } from "../atoms";

const TabGesture = () => {
  const pressed = useSharedValue(false);

  const movingHandler = useAnimatedGestureHandler({
    onStart: () => {
      pressed.value = true;
    },
    onEnd: () => {
      pressed.value = false;
    },
  });

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? "#00197260" : "#001972",
      transform: [{ scale: withSpring(pressed.value ? 2 : 1) }],
    };
  });

  return (
    <Container center>
      <TapGestureHandler onGestureEvent={movingHandler}>
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
      </TapGestureHandler>
    </Container>
  );
};

export default TabGesture;
