import { Button, View, Text, StyleSheet } from "react-native";

export default function SupportPage({ navigation }) {
  return (
    <View>
      <Text>How well do you feel supported?</Text>
      <Button title="Next" onPress={() => navigation.navigate("Understand")} />
    </View>
  );
}
