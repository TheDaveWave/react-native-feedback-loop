import { View, Text, StyleSheet } from "react-native";

export default function CommentDisplay() {
    const testComment = "Super legit speaker today, awesome lecture, learned a bunch!";

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Comment:</Text>
      <Text style={styles.text}>{testComment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    alignSelf: "center",
  },
  text: {
    marginTop: 5,
    alignSelf: "center",
  },
});
