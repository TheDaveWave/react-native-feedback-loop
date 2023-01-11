import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import CustomButton from "../buttons/CustomButton";
import CustomPicker from "../picker/CustomPicker";
import { useDispatch } from "react-redux";

const image = require("../../assets/dripglobe.jpeg");

export default function UnderstandingPage({ navigation }) {
  const [selectedValue, setSelectedValue] = useState(3);

  const dispatch = useDispatch();

  function addUnderstanding() {
    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: selectedValue,
    });
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.body}>
          <Text style={styles.bodyHeader}>
            How well do you understand the content?
          </Text>
          <CustomPicker
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <View style={styles.bottom}>
            <Text>{selectedValue}</Text>
            <View style={styles.bodyBtnContainer}>
              <CustomButton title="Back" onPress={() => navigation.goBack()} />
              <CustomButton
                title="Next"
                onPress={() => {navigation.navigate("Comment"); addUnderstanding();}}
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
