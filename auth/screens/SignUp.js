import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../util/auth";
import Loading from "../components/Loading";
import { AuthContext } from "../store/auth-context";

export default function SignUp() {
  const [isAuthanticated, setIsAuthanticated] = useState(false);
  const authContext = useContext(AuthContext)
  async function signUpHandler({ email, password }) {
    setIsAuthanticated(true);
    try {
     const token= await createUser(email, password);
     authContext.authenticate(token)
    } catch (error) {
      Alert.alert("kayıt olunamadı!","Lütfen bilgilerinizi kontrol ediniz.")
    }
    
    setIsAuthanticated(false);
  }
  if (isAuthanticated) {
    return <Loading message="Kullanıcı Oluşturuluyor" />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
