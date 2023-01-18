import { View, StyleSheet, ImageBackground } from "react-native";
import { useDispatch } from "react-redux";
import CustomButton from "../buttons/CustomButton";

const image = require("../../assets/dripglobe.jpeg");

export default function HomePage({ navigation }) {
  const dispatch = useDispatch();

  function clearFeedback() {
    dispatch({
      type: "CLEAR_FEEDBACK",
    });
  }

  function getStuff() {
    fetch('http://10.39.20.4:5000/api/feedback')
    .then((response) => {
      return response.text();
    }).then( t => {
      console.log(t)
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    // Views act as divs or native equivalents.
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.content}>
          <CustomButton
            title="Start"
            onPress={() => {
              navigation.navigate("Feeling");
              clearFeedback();
            }}
          />
          <CustomButton title="Previous Feedback" />
          <CustomButton
            title="Logout"
            onPress={() => navigation.navigate("Login")}
          />
          {/* temporay buttons to test out a fetch and jump to review to see persisted data */}
          <CustomButton title="Fetch" onPress={() => getStuff()}/>
          <CustomButton title="Review" onPress={() => navigation.navigate("Review")}/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#122E72",
  },
  content: {
    backgroundColor: "#F2F3D9",
    borderRadius: 10,
    padding: 20,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
