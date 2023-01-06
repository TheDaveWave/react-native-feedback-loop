import { Button, View, Text, StyleSheet } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is the Home Page!</Text>
      <Button title="Start" onPress={() => navigation.navigate("Feeling")} />
      <Button title="Previous Feedback" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignSelf: "center",
  },
});
