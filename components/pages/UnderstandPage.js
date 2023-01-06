import { Button, View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function UnderstandingPage({ navigation }) {
  const [selectedValue, setSelectedValue] = useState(3);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>How well do you understand the content?</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => {
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
          <Button
            title="Next"
            onPress={() => navigation.navigate("Comment")}
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
  },
  body: {
    backgroundColor: "#EAF1E3",
  },
  header: {
    alignSelf: "center",
  },
  bottom: {
    alignItems: "center",
  },
});
