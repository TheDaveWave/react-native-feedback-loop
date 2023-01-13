import { View, StyleSheet, ImageBackground } from "react-native";
import CustomButton from "../buttons/CustomButton";

const image = require("../../assets/dripglobe.jpeg");

export default function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.body}>
          <CustomButton
            title="Login"
            onPress={() => navigation.navigate("Home")}
          />
          <CustomButton 
            title="Create Account"
            onPress={() => navigation.navigate("Signup")}
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
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#F2F3D9",
    borderRadius: 10,
    padding: 20,
  },
});
