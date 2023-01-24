import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import FeedbackModal from "./FeedbackModal";

// component to display the individual entries of the feedback array.
export default function FeedbackItem({ item }) {
  const [showModal, setShowModal] = useState(false);
  // make the item's date value a javascript Date object.
  let date = new Date(item.date);
  // create a formatter for the date to display the month, day, and year.
  const dateFormat = new Intl.DateTimeFormat("en-us", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  // set the date equal to the formatted date.
  date = dateFormat.format(date);

  return (
    <Pressable onLongPress={() => setShowModal(!showModal)}>
      <View style={styles.container}>
        <Text style={styles.text}>Entry on {date}</Text>
      </View>
      <FeedbackModal item={item} showModal={showModal} setShowModal={setShowModal}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DBDCC1",
    margin: 10,
    padding: 7.5,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
  },
});
