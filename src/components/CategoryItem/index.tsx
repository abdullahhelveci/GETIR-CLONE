import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
type categoryItemProps = {
  item: Category;
};
const index = ({ item }: categoryItemProps) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CategoryDetails',{category:item})}
      style={{
        width: width * 0.25,
        height: width * 0.24,
        borderRadius: 8,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
        justifyContent: "space-between",
      }}
    >
      <Image
        style={{ width: width * 0.18, height: width * 0.18, borderRadius: 8 }}
        source={{ uri: item.src }}
      />
      <Text style={{ fontSize: 12, color: "#616161", fontWeight: "500" }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({});
