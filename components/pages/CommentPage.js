import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import CustomButton from "../buttons/CustomButton";

const image = require("../../assets/dripglobe.jpeg");

export default function CommentPage({ navigation }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <View
      style={styles.container}
      // dismiss the keyboard when user taps on the screen other than
      // a TextInput or another component that requires the keyboard.
      onStartShouldSetResponder={Keyboard.dismiss}
    >
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.body}>
          <Text style={styles.header}>Any Comments?</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            placeholder="Comments..."
            onChangeText={setInputValue}
          />
          <View style={styles.bottom}>
            <Text>Current Input: {inputValue}</Text>
            <CustomButton
              title="Next"
              onPress={() => navigation.navigate("Review")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    width: "80%",
    backgroundColor: "#F2F3D9",
    borderRadius: 10,
    padding: 30,
  },
  input: {
    margin: 10,
    padding: 5,
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignSelf: "center",
  },
  bottom: {
    alignItems: "center",
  },
});
