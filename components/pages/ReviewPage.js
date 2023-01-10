import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../buttons/CustomButton";

const image = require("../../assets/dripglobe.jpeg");

export default function ReviewPage({ navigation }) {
  return (
    <View>
      <Text>Review Feedback.</Text>
      <Text>This will display the values chosen on the previous pages.</Text>
      <CustomButton
        title="Submit Feedback"
        onPress={() => navigation.navigate("Success")}
      />
    </View>
  );
}
