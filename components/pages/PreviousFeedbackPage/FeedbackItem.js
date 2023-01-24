import { View, Text, StyleSheet } from "react-native";

// component to display the individual entries of the feedback array.
export default function FeedbackItem({ item }) {
  let date = new Date(item.date);
  let formattedDate = `${
    date.getUTCMonth() + 1
  }/${date.getUTCDate()}/${date.getUTCFullYear()}`;

  return (
    <View>
      <Text>{formattedDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    
});