import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";
const SRC_WIDTH = Dimensions.get("window").width;

console.log(SRC_WIDTH * 0.55);

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    width: SRC_WIDTH * 0.55,
    height: 262,
    borderRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    alignItems: "center",
    position: "relative",
    marginHorizontal: 10,
    paddingHorizontal: 6,
  },

  previewImage: {
    top: -50,
    position: "absolute",
    width: 120,
    height: 120,
    zIndex: 999999999999,
  },

  tagText: {
    color: "#4B2995",
    fontWeight: "700",
    fontSize: 10,
    textTransform: "uppercase",
  },

  tag: {
    marginTop: 90,
    backgroundColor: "#EBE5F9",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 15,
  },

  description: {
    fontSize: 12,
    color: "#8D8686",
    marginTop: 5,
  },

  price: {
    color: "#C47F17",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
});
