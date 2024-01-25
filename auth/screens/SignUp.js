import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../util/auth";
import Loading from "../components/Loading";

export default function SignUp() {
  const [isAuthanticated, setIsAuthanticated] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthanticated(true);
    await createUser(email, password);
    setIsAuthanticated(false);
  }
  if (isAuthanticated) {
    return <Loading message="Kullanıcı Oluşturuluyor" />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
