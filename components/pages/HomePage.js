import { View, StyleSheet, ImageBackground } from "react-native";
import CustomButton from "../buttons/CustomButton";

const image = require("../../assets/dripglobe.jpeg");

export default function HomePage({ navigation }) {
  return (
    // Views act as divs or native equivalents.
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.content}>
          <CustomButton
            title="Start"
            onPress={() => navigation.navigate("Feeling")}
          />
          <CustomButton title="Previous Feedback" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#fff",
    flex: 0.1,
  },
  container: {
    flex: 1,
    backgroundColor: "#122E72",
  },
  content: {
    backgroundColor: "#F2F3D9",
    borderRadius: 10,
    padding: 20,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
