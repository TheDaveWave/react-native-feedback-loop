import { useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// component imports:
import CustomButton from "../../buttons/CustomButton";
import FeedbackItem from "./FeedbackItem";

const image = require("../../../assets/dripglobe.jpeg");

export default function FeedbackPage({ navigation }) {
  const feedback = useSelector((store) => store.feedbackReducer.feedback);

  const dispatch = useDispatch();

  function fetchFeedback() {
    dispatch({
      type: "FETCH_FEEDBACK",
    });
  }

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.body}>
          {/* the element / container to display the previous feedback items. */}
          <View>
            {feedback.map((item) => (
              <FeedbackItem key={item.id} item={item} />
            ))}
          </View>
          {/* container to house buttons */}
          <View>
            <CustomButton
              title="Home"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    width: "85%",
    backgroundColor: "#F2F3D9",
    borderRadius: 10,
    padding: 20,
  },
});
