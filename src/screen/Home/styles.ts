import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    position: "relative",
    height: 350,

    backgroundColor: "#272221",
  },

  headerList: {
    position: "absolute",
    top: 170,
    // marginLeft: 32,
    zIndex: 9999999,
    height: 400,
  },
});
