import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";
import { styles } from "./style";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

type Props = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
  index: number;
  scrollX: number;
};

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH * 0.55;
const SPACING = SRC_WIDTH * 0.02;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;

export function Card(cardProps: Props) {
  const size = useSharedValue(0.8);
  const opacity = useSharedValue(1);

  const inputRange = [
    (cardProps.index - 1) * CARD_LENGTH,
    cardProps.index * CARD_LENGTH,
    (cardProps.index + 1) * CARD_LENGTH,
  ];

  console.log({
    index: cardProps.index,
    x: cardProps.scrollX,
    input: inputRange,
  });
  size.value = interpolate(
    cardProps.scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP
  );

  opacity.value = interpolate(
    cardProps.scrollX,
    inputRange,
    [-90, -10, 90],
    Extrapolate.CLAMP
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: size.value }],
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${opacity.value}deg`,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        styles.container,
        cardStyle,
        {
          marginLeft: cardProps.index == 0 ? SIDECARD_LENGTH : SPACING,
          marginRight: cardProps.index == 3 ? SIDECARD_LENGTH : SPACING,
        },
      ]}
    >
      <Animated.Image
        style={[styles.previewImage, imageStyle]}
        source={cardProps.image}
        resizeMode="cover"
      />

      <View style={styles.tag}>
        <Text style={styles.tagText}>TRADICIONAL</Text>
      </View>

      <Text style={styles.title}>{cardProps.title}</Text>
      <Text style={styles.description}> {cardProps.description} </Text>
      <Text style={styles.price}> R$ {cardProps.price} </Text>
    </Animated.View>
  );
}
