import { View, StyleSheet, ImageBackground } from "react-native";
import CustomButton from "../buttons/CustomButton";

const image = require("../../assets/dripglobe.jpeg");

export default function SignupPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.body}>
          <CustomButton
            title="Sign Up"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: "#F2F3D9",
    borderRadius: 10,
    padding: 20,
  },
});
