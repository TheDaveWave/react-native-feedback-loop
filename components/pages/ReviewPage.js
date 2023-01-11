import { View, Text, StyleSheet, ImageBackground } from "react-native";
import CustomButton from "../buttons/CustomButton";

const image = require("../../assets/dripglobe.jpeg");

export default function ReviewPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.body}>
          <Text style={styles.bodyHeader}>Feedback Review</Text>
          <Text style={styles.bodyText}>
            This will display the values chosen on the previous pages.
          </Text>
          <CustomButton
            title="Submit Feedback"
            onPress={() => navigation.navigate("Success")}
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
    width: "80%",
    backgroundColor: "#F2F3D9",
    borderRadius: 10,
    padding: 30,
  },
  bodyHeader: {
    alignSelf: "center",
  },
  bodyText: {
    marginBottom: 15,
    marginTop: 15,
  },
});
