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
    fetch('http://192.168.0.88:5000/api/feedback')
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
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
          <CustomButton title="Fetch" onPress={() => getStuff()}/>
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
