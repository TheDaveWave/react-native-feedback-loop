import { Button, View, Text, StyleSheet } from "react-native";

export default function ReviewPage({ navigation }) {
  return (
    <View>
      <Text>Review Feedback.</Text>
      <Text>This will display the values chosen on the previous pages.</Text>
      <Button
        title="Submit Feedback"
        onPress={() => navigation.navigate("Success")}
      />
    </View>
  );
}
