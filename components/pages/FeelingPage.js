import { Button, View, Text, StyleSheet } from "react-native";

export default function FeelingPage({ navigation }) {
  return (
    <View>
      <Text>How are you feeling?</Text>
      <Button title="Next" onPress={() => navigation.navigate("Support")} />
    </View>
  );
}
