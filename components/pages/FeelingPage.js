import { Button, View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import CustomButton from "../buttons/CustomButton";

export default function FeelingPage({ navigation }) {
  // setup local state
  const [selectedValue, setSelectedValue] = useState(3);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>How are you feeling?</Text>
        {/* Try to make the picker a separate component to be reused */}
        <Picker
          selectedValue={selectedValue}
          // defined a name for the function being used in the onValueChange property,
          // to test out what happens if an error occurs here as opposed to using an anonymous
          // arrow function.
          onValueChange={function changeValue(itemValue, itemIndex) {
            setSelectedValue(itemValue);
          }}
        >
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
          <Picker.Item label="5" value={5} />
        </Picker>
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
