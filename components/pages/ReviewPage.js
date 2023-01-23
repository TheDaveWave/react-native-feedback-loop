import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useDispatch } from "react-redux";
import CustomButton from "../buttons/CustomButton";
import CommentDisplay from "../textComponents/CommentDisplay";
import ScoreDisplay from "../textComponents/ScoreDisplay";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { BASE_URL } from "../../config";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const image = require("../../assets/dripglobe.jpeg");

export default function ReviewPage({ navigation }) {
  const { userToken } = useContext(AuthContext);
  const dispatch = useDispatch();

  function clearFeedback() {
    dispatch({
      type: "CLEAR_FEEDBACK",
    });
  }

  async function getLocalFeedback() {
    // variable to store all keys.
    let keys = [];
    // variable to store all values.
    let values;
    try {
      // get all keys from async storage.
      keys = await AsyncStorage.getAllKeys();
      // use keys to get values for all keys.
      values = await AsyncStorage.multiGet(keys);
      values[0][1] = JSON.parse(values[0][1]);
    } catch (err) {
      console.log("Error in getting local keys", err);
    }
    console.log("Stored Values:", values !== null ? values : "Nothing here :(");
  }

  function testAuthMiddleware() {
    const header = {
      'test': userToken, 
    };
    axios
      .get(`${BASE_URL}/api/jwt/validateToken`, {
        headers: header,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.body}>
          <Text style={styles.bodyHeader}>Feedback Review</Text>
          {/* Where all the input information will be displayed. */}
          <View style={styles.bodyTextContainer}>
            {/* Display the scores */}
            <ScoreDisplay />
            {/* Display Comment */}
            <CommentDisplay />
          </View>
          <CustomButton
            title="Submit Feedback"
            onPress={() => {
              navigation.navigate("Success");
              clearFeedback();
            }}
          />
          <CustomButton title="Back" onPress={() => navigation.goBack()} />
          {/* temporary log button to check local storage / async storage */}
          <CustomButton title="Log" onPress={() => getLocalFeedback()} />
          {/* clears out the local storage does not update context
            so user is still verified. */}
          <CustomButton title="Clear" onPress={() => AsyncStorage.clear()} />
          <CustomButton title="Auth" onPress={() => testAuthMiddleware()}/>
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
    width: "80%",
    backgroundColor: "#F2F3D9",
    borderRadius: 10,
    padding: 30,
  },
  bodyHeader: {
    alignSelf: "center",
  },
  bodyTextContainer: {
    marginBottom: 15,
    marginTop: 15,
  },
});
