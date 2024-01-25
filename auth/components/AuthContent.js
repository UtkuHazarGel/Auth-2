import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthForm from "./AuthForm";
import ButtonWhite from "./ButtonWhite";
import { useNavigation } from "@react-navigation/native";

export default function AuthContent({ isLogin,onAuthenticate }) {
  const [credentialsIsValid, setCredentialsIsValid] = useState({
    email: false,
    confirmEmail: false,
    password: false,
    confirmPassword: false,
  });

  function submitHandler(credentials) {
    console.log(credentials);
    let { confirmEmail, confirmPassword, email, password } = credentials;
    
    email = email.trim();
    password = password.trim();
    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordAreEqual = password === confirmPassword;
    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordAreEqual))
    ) {
      Alert.alert("Hatalı deneme!","Lütfen girilen bilgileri kontrol ediniz!");
      setCredentialsIsValid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: passwordIsValid,
        confirmPassword: passwordIsValid || passwordAreEqual,
      });
      return;
    }

    onAuthenticate({email,password})
  }
  const navigation = useNavigation();
  function switchScreen() {
    if (isLogin) {
      navigation.navigate("SignUp");
    } else {
      navigation.navigate("Login");
    }
  }
  return (
    <View style={styles.container}>
      <AuthForm
        credentialsIsValid={credentialsIsValid}
        isLogin={isLogin}
        onsubmit={submitHandler}
      />
      <View>
        <ButtonWhite onPress={switchScreen}>
          {isLogin ? "Yeni Kullanıcı Oluştur" : "Giriş Yap"}
        </ButtonWhite>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blueviolet",
    marginTop: 50,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 15,
    elevation: 4,
  },
});
