import { Pressable, Text, StyleSheet } from "react-native";

export default function CustomButton({ onPress, title }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3DA5D9",
    padding: 10,
    borderRadius: 10,
    margin: 2,
  },
  text: {
    color: "#fff",
  }
});
