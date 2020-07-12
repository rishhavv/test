import React, { useState } from "react"; //component for individual post on blog page
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const Final = ({ id, total }) => {
  return (
    <View style={style.body}>
      <Text style={style.title}>{id}</Text>
      <Text style={style.tagline}>Rs. {total}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  body: {
    alignSelf: "center",
    display: "flex",
    width: "97%",
    backgroundColor: "#ffffff",
    flex: 0,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 2,
    margin: 4,
  },
  hub: {
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "right",
    color: "black",
  },
  tagline: {
    minHeight: 44,
    maxHeight: 54,
    fontSize: 16,
    left: 7,
    right: 5,
    fontFamily: "sans-serif-condensed",
    color: "#6b6b6b",
    width: "98%",
  },
  title: {
    fontSize: 25,
    textAlign: "left",
    left: 5,
    color: "#000000",
    width: "99.5%",
  },
  votes: {
    marginBottom: 5,
    alignSelf: "flex-end",
    right: 8,
  },
});

export default Final;
