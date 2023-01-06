import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
} from "react-native";
import { useState } from "react";

export default function CommentPage({ navigation }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <View
      style={styles.container}
      // dismiss the keyboard when user taps on the screen other than
      // a TextInput or another component that requires the keyboard.
      onStartShouldSetResponder={Keyboard.dismiss}
    >
      <View style={styles.body}>
        <Text style={styles.header}>Any Comments?</Text>
        <TextInput
          style={styles.input}
          // find a way to disable overflow and have a wrap.
          multiline={true}
          placeholder="Comments..."
          onChangeText={setInputValue}
        />
        <View style={styles.bottom}>
          <Text>Current Input: {inputValue}</Text>
          <Button title="Next" onPress={() => navigation.navigate("Review")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#EAF1E3",
  },
  input: {
    margin: 10,
    padding: 5,
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignSelf: "center",
  },
  bottom: {
    alignItems: "center",
  },
});
