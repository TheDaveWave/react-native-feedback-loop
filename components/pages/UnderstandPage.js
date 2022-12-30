import { Button, View, Text, StyleSheet } from "react-native";

export default function UnderstandingPage({ navigation }) {
  return (
    <View>
      <Text>How well do you understand the content?</Text>
      <Button title="Next" onPress={() => navigation.navigate("Comment")} />
    </View>
  );
}
