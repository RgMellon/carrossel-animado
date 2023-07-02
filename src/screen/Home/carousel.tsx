import { Dimensions, FlatList, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

export const Carousel = ({ data }) => {
  const scrollX = useSharedValue(0);
  const u = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      // console.log(event.contentOffset.x);
      // medidas do layout visivel na tela
      // console.log(event.layoutMeasurement, "2");
      // tamanho do conteudo da scrollView
      // console.log(event.contentSize, "content");
      // event.contentOffset.x;
      //   console.log(event.contentOffset.x);
      scrollX.value = event.contentOffset.x;
      // assisX.value = event.contentOffset.x / 180;
    },
  });

  let index = 0;
  console.log(" scrollX.value", u.value);

  // const inputRange = [(0 - 1) * width, 1 * width, (1 + 1) * width];

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            [u.value, u.value * 360, u.value * 700],
            [0.9, 1, 0.9]
          ),
        },
      ],
    };
  });

  const renderItem = ({ item, index }) => {
    // index = index;
    // u.value = index;
    console.log(index, "iii------iii");

    return (
      <Animated.View style={[styles.item, animatedStyle]}>
        {/* Render your carousel item here */}
        <View style={{ width: 180, height: 180, backgroundColor: "blue" }} />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = {
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    marginTop: 200,
  },
  item: {
    width: Dimensions.get("window").width,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
};
