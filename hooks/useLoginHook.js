import { useState, useEffect } from "react";
import axios from "axios";
import querystring from "querystring";

export default ({ emailText, passwordText }) => {
  const url = "http://staging.fastor.in/v1/web/auth/login";
  const loginLogic = async () => {
    await axios
      .post(
        url,
        JSON.stringify({
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
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return loginLogic;
};
