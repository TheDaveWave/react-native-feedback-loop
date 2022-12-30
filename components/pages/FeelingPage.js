import { Button, View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function FeelingPage({ navigation }) {
  // setup local state
  const [selectedValue, setSelectedValue] = useState(3);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How are you feeling?</Text>
      <Picker
        selectedValue={selectedValue}
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
      <Button title="Next" onPress={() => navigation.navigate("Support")} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "#fff",
      // alignItems: "center",
      justifyContent: "center",
    },
    header: {
      alignSelf: "center",
    },
  });
