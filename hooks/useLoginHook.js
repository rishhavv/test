import { useState, useEffect } from "react";
import Axios from "axios";
import querystring from "querystring";
import { useNavigation } from "@react-navigation/native";

export default ({ emailText, passwordText }) => {
  const navigation = useNavigation();
  const [loginVal, changeLogin] = useState(false);
  const url = "http://staging.fastor.in/v1/web/auth/login";
  const loginLogic = async () => {
    await Axios.post(
      url,
      querystring.stringify({
        email: emailText,
        password: passwordText,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          email: `${emailText}`,
          password: `${passwordText}`,
        },
      }
    )
      .then((response) => {
        console.log(response.data.message);
        if (response.data.message == "Logged in Successfully") {
          changeLogin(true);
          navigation.navigate("homeScreen");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return [loginLogic, loginVal];
};
