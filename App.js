import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/Login";
const RootStack = createStackNavigator();

const App = () => {
  const RenderNavigation = () => {
    return (
      <NavigationContainer>
        <RootStack.Navigator headerMode="none" initialRouteName="LoginScreen">
          <RootStack.Screen name="LoginScreen" component={LoginScreen} />
          <RootStack.Screen name="homeScreen" component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
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
