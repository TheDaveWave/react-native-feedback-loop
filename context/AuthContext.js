import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";
import axios from "axios";

// create context for authorization.
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  function login(username, password) {
    setLoading(true);
    
    axios
      .post(`${BASE_URL}/api/jwt/generate`, {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Login Error", err);
      });

    // setUserToken("asdfasdf");
    // AsyncStorage.setItem("userToken", "asdfasdf");
    setLoading(false);
  }

  function logout() {
    setLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setLoading(false);
  }

  async function isLoggedIn() {
    try {
      setLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setLoading(false);
    } catch (err) {
      console.log("logged in error", err);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, loading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
}
