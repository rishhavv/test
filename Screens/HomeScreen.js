import React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const HomeScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.heading}>Orders</Text>
      <View style={style.card}>
        <View style={style.flex}>
          <Text style={style.flexBox}>total</Text>
          <Text style={style.flexBox}>12,651</Text>
          <Text style={style.flexBox}>total</Text>
          <Text style={style.flexBox}>12,651</Text>
        </View>
        <View style={style.flex}>
          <Text style={style.flexBox}>total</Text>
          <Text style={style.flexBox}>12,651</Text>
          <Text style={style.flexBox}>total</Text>
          <Text style={style.flexBox}>12,651</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: hp("1%"),
    flex: 1,
    height: hp("90%"),
  },
  heading: {
    top: hp("5%"),
    left: wp("5%"),
    fontSize: 35,
    fontWeight: "bold",
  },
  card: {
    top: hp("7%"),
    left: wp("4%"),
    borderWidth: 1,
    flexDirection: "row",
    width: wp("85%"),
    elevation: 2,
    borderRadius: 5,
  },
  flexBox: {
    fontSize: 35,
  },
  flex: {
    padding: hp("1%"),
    width: wp("50%"),
  },
});

export default HomeScreen;
