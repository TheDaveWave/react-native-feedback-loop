import { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Keyboard,
} from "react-native";
import CustomButton from "../buttons/CustomButton";

const image = require("../../assets/dripglobe.jpeg");

export default function LoginPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          </View>
          <View>
            <CustomButton
              title="Log in"
              onPress={() => navigation.navigate("Home")}
            />
            <CustomButton
              title="Create Account"
              onPress={() => navigation.navigate("Signup")}
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
    alignItems: "center",
    justifyContent: "center",
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
