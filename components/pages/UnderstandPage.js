import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import CustomButton from "../buttons/CustomButton";
import CustomPicker from "../picker/CustomPicker";

const image = require("../../assets/dripglobe.jpeg");

export default function UnderstandingPage({ navigation }) {
  const [selectedValue, setSelectedValue] = useState(3);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.body}>
          <Text style={styles.header}>
            How well do you understand the content?
          </Text>
          <CustomPicker
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <View style={styles.bottom}>
            <Text>{selectedValue}</Text>
            <CustomButton
              title="Next"
              onPress={() => navigation.navigate("Comment")}
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
