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
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const image = require("../../assets/dripglobe.jpeg");

export default function CommentPage({ navigation }) {
  // access the store to get the current comment.
  const comment = useSelector((store) => store.comment);
  // make local state initialze with the current redux state comment.
  const [inputValue, setInputValue] = useState(comment);
  const routeName = navigation
    .getState()
    .routes[navigation.getState().index].name.toLowerCase();

  const dispatch = useDispatch();

  function addComment() {
    dispatch({
      type: "ADD_COMMENT",
      payload: inputValue,
    });
  }

  // adds a key value pair to local storage.
  async function addLocalKey() {
    try {
      await AsyncStorage.mergeItem(
        "userFeedback",
        JSON.stringify({ [routeName]: inputValue.toString() })
      );
    } catch (err) {
      console.log("Error adding key", err);
    }
  }

  return (
    <View
      style={styles.container}
      // dismiss the keyboard when user taps on the screen other than
      // a TextInput or another component that requires the keyboard.
      onStartShouldSetResponder={Keyboard.dismiss}
    >
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.body}>
          <Text style={styles.bodyHeader}>Any Comments?</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            placeholder="Comments..."
            value={inputValue ? inputValue : ""}
            onChangeText={setInputValue}
          />
          <View style={styles.bottom}>
            <Text>Current Input: {inputValue}</Text>
            <View style={styles.bodyBtnContainer}>
              <CustomButton title="Back" onPress={() => navigation.goBack()} />
              <CustomButton
                title="Next"
                onPress={() => {
                  navigation.navigate("Review");
                  addLocalKey();
                  addComment();
                }}
              />
            </View>
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
  bodyBtnContainer: {
    flexDirection: "row",
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
  bodyHeader: {
    alignSelf: "center",
  },
  bottom: {
    alignItems: "center",
  },
});
