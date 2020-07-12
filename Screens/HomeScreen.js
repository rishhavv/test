import React, { useState } from "react";
import { Text, StyleSheet, View, Picker } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import OrderList from "../Components/OrderList";
import HomeHooks from "../hooks/useHomesScreen";

const HomeScreen = () => {
  const [menu, changeMenu] = useState("1");
  const [
    HomePostsData,
    HomePosts,
    errorMessage,
    HomeLoadingIndicator,
  ] = HomeHooks({ menu });
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
      <ScrollView style={style.container2}>
        <Picker
          selectedValue={menu}
          style={{ height: 50, width: 150 }}
          onValueChange={
            ((itemValue, itemIndex) => changeMenu(itemValue), HomePostsData())
          }
        >
          <Picker.Item label="Today" value="1" />
          <Picker.Item label="past 7 days" value="7" />
          <Picker.Item label="past month" value="30" />
        </Picker>
        <OrderList data={HomePosts} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: hp("1%"),
    flex: 1,
    height: hp("90%"),
    backgroundColor: "#fff",
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
    elevation: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  flexBox: {
    fontSize: 35,
  },
  flex: {
    padding: hp("1%"),
    width: wp("50%"),
  },
  container2: {
    top: hp("15%"),
    height: hp("50%"),
  },
});

export default HomeScreen;
