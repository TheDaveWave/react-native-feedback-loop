import { View, Text, StyleSheet } from "react-native";

export default function ScoreDisplay() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>
          Feeling Score: <Text style={styles.score}>{3}</Text>
        </Text>
        <Text>
          Support Score: <Text style={styles.score}>{3}</Text>
        </Text>
        <Text>
          Understanding Score: <Text style={styles.score}>{3}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
  },
  textContainer: {
    alignSelf: "center",
  },
  score: {
    fontWeight: "bold",
  },
});
