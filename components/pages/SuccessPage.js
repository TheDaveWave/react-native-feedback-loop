import { Button, View, Text, StyleSheet } from "react-native";
import CustomButton from "../buttons/CustomButton";

const image = require("../../assets/dripglobe.jpeg");

export default function SuccessPage({navigation}) {
  return (
    <View>
      <Text>Feedback Submitted!</Text>
      <CustomButton 
        title="Submit New Feedback"
        onPress={() => navigation.navigate("Feeling")}
      />
      <CustomButton
        title="Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
