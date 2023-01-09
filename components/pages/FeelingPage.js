import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import CustomButton from "../buttons/CustomButton";
import CustomPicker from "../picker/CustomPicker";

export default function FeelingPage({ navigation }) {
  // setup local state for CustomPicker
  const [selectedValue, setSelectedValue] = useState(3);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>How are you feeling?</Text>
        <CustomPicker selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
        <View style={styles.bottom}>
          <Text>{selectedValue}</Text>
          <CustomButton
            title="Next"
            onPress={() => navigation.navigate("Support")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#122E72",
  },
  body: {
    backgroundColor: "#F2F3D9",
    borderRadius: 10,
    margin: 20,
    padding: 20,
  },
  header: {
    alignSelf: "center",
  },
  bottom: {
    alignItems: "center",
  },
});
