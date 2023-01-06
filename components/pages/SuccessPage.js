import { Button, View, Text, StyleSheet } from "react-native";

export default function SuccessPage({navigation}) {
  return (
    <View>
      <Text>Feedback Submitted!</Text>
      <Button 
        title="Submit New Feedback"
        onPress={() => navigation.navigate("Feeling")}
      />
      <Button 
        title="Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
