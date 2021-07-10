import React, { useEffect, useState } from "react";
import { Text, Button, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Container } from "../atoms";

const Item = (props: { value: number | string; visible: boolean }) => {
  const height = useSharedValue(0);
  const offset = useSharedValue(0);

  const uas = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, { duration: 300 }),
      transform: [
        {
          translateX: withSpring(offset.value * 100),
        },
      ],
    };
  });

  useEffect(() => {
    if (props.visible) {
      height.value = 20;
      offset.value = Math.random();
    } else {
      height.value = 0;
    }
  }, [props.visible]);

  return (
    <Animated.View style={[{ backgroundColor: "#dfdfdf" }, uas]}>
      <Text>{props.value}</Text>
    </Animated.View>
  );
};

const TodoList = () => {
  const [list, setList] = useState<number[]>([]);
  const [stage, setStage] = useState(0);

  return (
    <Container center>
      <Item value="위험위험..." visible={stage > 5} />
      <Item value="위험위험위험..." visible={stage > 7} />

      {list.map((v, idx) => {
        return <Item key={idx} value={v} visible={idx < stage} />;
      })}

      <Text style={{ marginTop: 30 }}>MAX stage</Text>
      <Text style={{ marginTop: 10 }}>{list.length}</Text>
      <Text style={{ marginTop: 30 }}>current stage</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Button
          title="-"
          onPress={() => {
            if (stage > 0) setStage(stage - 1);
          }}
        />
        <Text>{stage}</Text>
        <Button
          title="+"
          onPress={() => {
            if (stage < list.length) setStage(stage + 1);
          }}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Button
          title="add"
          onPress={() => {
            setList([...list, Math.random() * 100]);
            if (stage === list.length) setStage(stage + 1);
          }}
        />
        <Button
          title="remove"
          onPress={() => {
            setList(list.filter((_, idx) => idx < list.length - 1));
            if (stage === list.length) setStage(stage - 1);
          }}
        />
      </View>
    </Container>
  );
};

export default TodoList;
