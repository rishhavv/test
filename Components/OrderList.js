import React from "react";
import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Final from "../Components/Final";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const OrderList = ({ data }) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      <FlatList
        scrollEnabled
        data={data}
        keyExtractor={(results) => results.order_id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Final id={item.order_id} total={item.subtotal} />
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};
const style = StyleSheet.create({
  name: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#8f2f3f",
    fontSize: 25,
    height: 40,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  container: {
    marginBottom: 150,
    backgroundColor: "#F8F7F7",
  },
});

export default OrderList;
