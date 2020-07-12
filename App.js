import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/Login";

const RootStack = createStackNavigator();

const App = () => {
  const [isSignedIn, SetLoggedIn] = useState(false);
  // useEffect(() => {
  //   CheckLoggedIn();
  // });
  // const CheckLoggedIn = () => {
  //    => {
  //     if (user) {
  //       console.log("CheckLoggedIn");
  //       SetLoggedIn(true);
  //     } else {
  //       console.log(" not logged in! check");
  //       SetLoggedIn(false);
  //     }
  //   });
  // };
  const RenderNavigation = () => {
    if (isSignedIn) {
      return (
        <NavigationContainer>
          <RootStack.Navigator headerMode="none" initialRouteName="Login">
            <RootStack.Screen name="NewWorkAdd" component={mainPage} />
          </RootStack.Navigator>
        </NavigationContainer>
      );
    } else if (!isSignedIn) {
      return (
        <NavigationContainer>
          <RootStack.Navigator headerMode="none" initialRouteName="LoginScreen">
            <RootStack.Screen name="LoginScreen" component={HomeScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      );
    } else {
      return <Loading />;
    }
  };
  return RenderNavigation();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
