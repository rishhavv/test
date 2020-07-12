import React, { useState } from "react";
import { TextInput, Text, Label, View, Button } from "react-native";
import useLogin from "../hooks/useLoginHook";
import { TouchableOpacity } from "react-native-gesture-handler";
const LoginScreen = () => {
  const [emailText, changeEmailtext] = useState("");
  const [passwordText, changePasswordText] = useState("");
  const loginLogic = useLogin({ emailText, passwordText });
  return (
    <View>
      <Text>email</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => changeEmailtext(text)}
        value={emailText}
      />
      <Text>Password</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => changePasswordText(text)}
        value={passwordText}
      />
      <TouchableOpacity onPress={() => loginLogic({ emailText, passwordText })}>
        <Text>lodasdad</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
