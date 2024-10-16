import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const { height, width } = Dimensions.get("window");

const TypeBox = ({
  setCat,
  item,
  active,
}: {
  item: string;
  active: string;
  setCat: any;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 12,
          borderRadius: 6,
          height: height * 0.044,
          marginRight: 12,
        },
        item == active
          ? { backgroundColor: "#5c3ebc" }
          : { borderColor: "#f0eff7", borderWidth: 1.5 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, fontWeight: "600" },
          item == active ? { color: "white" } : { color: "#7849f7" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const index = () => {
  const [category, setCategory] = useState<string>("Birlikte İyi Gider");
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal
      style={{
        width: "100%",
        height: height * 0.072,
        backgroundColor: "white",
        flexDirection: "row",
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
      }}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        (item) => (
          <TypeBox setCat={setCategory} item={item} active={category} />
        )
      )}
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
