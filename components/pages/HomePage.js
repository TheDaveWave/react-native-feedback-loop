import { Button, View, Text, StyleSheet } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Home Page!</Text>
      <Button title="Next" onPress={() => navigation.navigate("Feeling")} />
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
