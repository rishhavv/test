import React, { useState } from "react";
import { TextInput, Text, Label, View, Button } from "react-native";

const LoginScreen = () => {
  const [emailText, changeEmailtext] = useState("");
  const [passwordText, changePasswordText] = useState("");

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
      <Button title="login" />
    </View>
  );
};

export default LoginScreen;
