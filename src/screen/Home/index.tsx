import { Dimensions, Text, View, ViewToken } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components/Card";

import Animated from "react-native-reanimated";
import { useRef, useState } from "react";

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH * 0.55;
const SPACING = SRC_WIDTH * 0.02;

export function Home() {
  const [scrollX, setScrollX] = useState(0);

  const mock = [
    {
      image: require("../../../assets/images/mocaccino.png"),
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, leite e espuma",
      price: "9,90",
    },
    {
      image: require("../../../assets/images/irlandes.png"),
      title: "Irlandes",
      description: "Café expresso com calda de chocolate, leite e espuma",
      price: "9,90",
    },
    {
      image: require("../../../assets/images/tradicional.png"),
      title: "Tradicional",
      description: "Café expresso com calda de chocolate, leite e espuma",
      price: "9,90",
    },
    {
      image: require("../../../assets/images/mocaccino.png"),
      title: "Mocaccino - 3",
      description: "Café expresso com calda de chocolate, leite e espuma",
      price: "9,90",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.headerList}
        data={mock}
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
        scrollEventThrottle={16}
        decelerationRate={0}
        bounces={false}
        contentContainerStyle={{
          alignItems: "center",
        }}
        renderItem={({ item, index }) => {
          return <Card {...item} scrollX={scrollX} index={index} />;
        }}
        snapToInterval={CARD_LENGTH + SPACING * 1.5}
      />
    </View>
  );
}
