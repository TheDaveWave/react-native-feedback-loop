import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../buttons/CustomButton";

export default function HomePage({ navigation }) {
  return (
    // Views act as divs or native equivalents.
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Feedback Survey!</Text>
      <View style={styles.content}>
        <CustomButton
          title="Start"
          onPress={() => navigation.navigate("Feeling")}
        />
        <CustomButton title="Previous Feedback" />
      </View>
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
    // backgroundColor: "#F2F3D9",
    backgroundColor: "#122E72",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#F2F3D9",
    borderRadius: 10,
    padding: 20,
  },
});
