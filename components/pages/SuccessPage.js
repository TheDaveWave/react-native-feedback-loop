import { View, Text, StyleSheet, ImageBackground } from "react-native";
import CustomButton from "../buttons/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const image = require("../../assets/dripglobe.jpeg");

export default function SuccessPage({ navigation }) {
  async function clearFeedback() {
    try {
      await AsyncStorage.removeItem("userFeedback");
    } catch (err) {
      console.log("Error clearing local user feedback");
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.body}>
          <Text style={styles.bodyHeader}>Feedback Submitted!</Text>
          <CustomButton
            title="Submit New Feedback"
            onPress={() => {
              clearFeedback();
              navigation.navigate("Feeling");
            }}
          />
          <CustomButton
            title="Home"
            onPress={() => {
              clearFeedback();
              navigation.navigate("Home");
            }}
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
    // width: "80%",
    backgroundColor: "#F2F3D9",
    borderRadius: 10,
    padding: 30,
  },
  bodyHeader: {
    alignSelf: "center",
    marginBottom: 10,
  },
});
