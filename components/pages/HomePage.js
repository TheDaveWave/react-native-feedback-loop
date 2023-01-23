import { useContext } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import CustomButton from "../buttons/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";


const image = require("../../assets/dripglobe.jpeg");

export default function HomePage({ navigation }) {
  const { logout } = useContext(AuthContext);
  const dispatch = useDispatch();

  function clearFeedback() {
    dispatch({
      type: "CLEAR_FEEDBACK",
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
            onPress={() => {
              logout();
            }}
          />
          <CustomButton
            title="Review"
            onPress={() => navigation.navigate("Review")}
          />
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
