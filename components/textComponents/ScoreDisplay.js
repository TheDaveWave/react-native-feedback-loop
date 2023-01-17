import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function ScoreDisplay() {
  // access the redux store to get the scores.
  const feedback = useSelector((store) => store.feedback);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>
          Feeling Score: <Text style={styles.score}>{feedback.feeling}</Text>
        </Text>
        <Text>
          Support Score: <Text style={styles.score}>{feedback.support}</Text>
        </Text>
        <Text>
          Understanding Score:{" "}
          <Text style={styles.score}>{feedback.understanding}</Text>
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
