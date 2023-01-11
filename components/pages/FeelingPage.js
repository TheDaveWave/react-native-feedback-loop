import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import CustomButton from "../buttons/CustomButton";
import CustomPicker from "../picker/CustomPicker";
import { useDispatch } from "react-redux";

const image = require("../../assets/dripglobe.jpeg");

export default function FeelingPage({ navigation }) {
  // setup local state for CustomPicker
  const [selectedValue, setSelectedValue] = useState(3);

  const dispatch = useDispatch();
  // dispatch the selected value to the redux store.
  function addFeeling() {
    dispatch({
      type: "ADD_FEELING",
      payload: selectedValue,
    });
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.body}>
          <Text style={styles.bodyHeader}>How are you feeling?</Text>
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
                onPress={() => {navigation.navigate("Support"); addFeeling();}}
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
  bodyHeader: {
    alignSelf: "center",
  },
  bodyBtnContainer: {
    flexDirection: "row",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    alignItems: "center",
  },
});
