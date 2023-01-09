import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../buttons/CustomButton";

export default function HomePage({ navigation }) {
  return (
    // Views act as divs or native equivalents.
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Feedback Survey!</Text>
      <CustomButton
        title="Start"
        onPress={() => navigation.navigate("Feeling")}
      />
      <CustomButton title="Previous Feedback" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3D9",
    alignItems: "center",
    justifyContent: "center",
  },
});
