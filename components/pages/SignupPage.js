import { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Keyboard,
  Text,
} from "react-native";
import CustomButton from "../buttons/CustomButton";

const image = require("../../assets/dripglobe.jpeg");

export default function SignupPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // check if the passwords match and if they do,
  // do not display warning.
  function passwordMatch() {
    if (password === confirmPass) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <View style={styles.container} onStartShouldSetResponder={Keyboard.dismiss}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.body}>
          <View style={{ marginBottom: 20 }}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            {/* check if passwords match and if not display warning */}
            {/* maybe change this to a single function to render warning. */}
            {passwordMatch() && (
              <Text style={{ color: "#FF0000" }}>Passwords do not match.</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPass}
              onChangeText={setConfirmPass}
              secureTextEntry={true}
            />
          </View>
          <View>
            <CustomButton
              title="Sign Up"
              onPress={() => navigation.navigate("Home")}
            />
            <CustomButton
              title="Login"
              onPress={() => navigation.navigate("Login")}
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
    width: "60%",
    backgroundColor: "#F2F3D9",
    borderRadius: 10,
    padding: 20,
  },
  input: {
    margin: 10,
    padding: 5,
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
});
