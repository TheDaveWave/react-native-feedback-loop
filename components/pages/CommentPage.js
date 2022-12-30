import { Button, View, Text, StyleSheet } from "react-native";

export default function CommentPage({ navigation }) {
  return (
    <View>
      <Text>Any Comments?</Text>
      <Button title="Next" onPress={() => navigation.navigate("Review")} />
    </View>
  );
}
