import React, { useState } from "react";
import { TextInput, Text, Label, View, Button, StyleSheet } from "react-native";
import useLogin from "../hooks/useLoginHook";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const LoginScreen = () => {
  const [emailText, changeEmailtext] = useState("");
  const [passwordText, changePasswordText] = useState("");
  const [loginLogic, loginVal] = useLogin({ emailText, passwordText });

  return (
    <View style={style.container}>
      <Text style={style.heading}>Fastor!</Text>
      <Text>email</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 8,
        }}
        onChangeText={(text) => changeEmailtext(text)}
        value={emailText}
      />
      <Text>Password</Text>
      <TextInput
        autoCapitalize="none"
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 8,
        }}
        onChangeText={(text) => changePasswordText(text)}
        value={passwordText}
      />
      <TouchableOpacity onPress={() => loginLogic({ emailText, passwordText })}>
        <Text style={style.login}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: hp("45%"),
    alignContent: "center",
    margin: wp("4%"),
  },
  heading: {
    textAlign: "center",
    fontSize: 35,
  },
  login: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "blue",
    height: 30,
    color: "#fff",
  },
});

export default LoginScreen;
