import React, { useState } from "react";
import { Text, StyleSheet, View, Picker } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import OrderList from "../Components/OrderList";
import HomeHooks from "../hooks/useHomesScreen";
import DropDownPicker from "react-native-dropdown-picker";
const HomeScreen = () => {
  const [val, changeVal] = useState("");
  const [
    HomePostsData,
    HomePosts,
    errorMessage,
    HomeLoadingIndicator,
  ] = HomeHooks({ val });
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
      <Picker
        selectedValue={val}
        style={{ height: 50, width: 150, top: hp("7%") }}
        onValueChange={async (itemValue, itemIndex) => {
          await changeVal(itemValue),
            await console.log(val),
            await HomePostsData({ val });
        }}
      >
        <Picker.Item label="Today" value="2" />
        <Picker.Item label="past 7 days" value="7" />
        <Picker.Item label="past month" value="30" />
      </Picker>
      <ScrollView style={style.container2}>
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
    top: hp("10%"),
    height: hp("50%"),
  },
});

export default HomeScreen;
