import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function CommentDisplay() {
  // access the comment property from the store object.
  const comment = useSelector((store) => store.comment);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Comment:</Text>
      <Text style={styles.text}>{comment}</Text>
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
