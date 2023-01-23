import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";
import axios from "axios";

// create context for authorization.
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  // use context to send jwt in header of authentication in routes?

  function login(username, password) {
    setLoading(true);
    axios
      // /generate could be changed to /login
      .post(`${BASE_URL}/api/user/login`, {
        username,
        password,
      })
      .then((response) => {
        AsyncStorage.setItem("userInfo", JSON.stringify(response.data));
        AsyncStorage.setItem("userToken", response.data.token);

        setUserInfo(response.data);
        setUserToken(response.data.token);
      })
      .catch((err) => {
        console.log("Login Error", err);
      });
    setLoading(false);
  }

  function logout() {
    setLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    setLoading(false);
  }

  /**
   * Make a function to clear token when token
   * is expired. 
   */


  // check if there local storage has user info and a token.
  async function isLoggedIn() {
    try {
      setLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      let userToken = await AsyncStorage.getItem("userToken");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }
      setLoading(false);
    } catch (err) {
      console.log("logged in error", err);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, loading, userToken, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
}
