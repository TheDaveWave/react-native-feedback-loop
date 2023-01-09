import { Pressable, Text, StyleSheet, View } from "react-native";

export default function CustomButton({ onPress, title }) {
  return (
    <View style={styles.buttonOuter}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuter: {
    // have the buttons fit content width.
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3DA5D9",
    padding: 10,
    borderRadius: 10,
    margin: 2,
  },
  text: {
    color: "#fff",
  },
});
