import { Button, View, Text, StyleSheet, Pressable } from "react-native";



export default function HomePage({ navigation }) {
  return (
    // Views act as divs or native equivalents.
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Feedback Survey!</Text>
      {/* <CustomButton title="Start" onPress={() => navigation.navigate("Feeling")} /> */}
      {/* <Button title="Start" onPress={() => navigation.navigate("Feeling")} /> */}
      {/* <Button title="Previous Feedback" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
