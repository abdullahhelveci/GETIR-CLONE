import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from '../../redux/actions/cartActions'

const { width, height } = Dimensions.get("window");

type ProductItemType = {
  item: Product;
  addItemToCart:(a:Product) => void
};
const index = ({ item, addItemToCart }: ProductItemType) => {

const navigation = useNavigation()

  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('ProductDetails',{product:item})}
      style={{
        width: width * 0.28,
        marginTop: 12,
        height: height * 0.24,
        marginLeft: 12,
        marginBottom: 6,
      }}
    >
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderWidth: 0.1,
          borderColor: "gray",
        }}
        source={{
          uri: item.image,
        }}
      />
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text
          style={{
            fontSize: 11.5,
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          ₺ {item.fiyat}
        </Text>
        <Text
          style={{
            color: "#5d3ebd",
            fontWeight: "bold",
            fontSize: 12,
            marginLeft: 5,
          }}
        >
          ₺ {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontSize: 13, fontWeight: "600", marginTop: 5 }} numberOfLines={1} >
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 13,
          marginTop: 4,
          fontWeight: "500",
        }}
      >
        {item.miktar}
      </Text>
      <TouchableOpacity
      onPress={() => addItemToCart(item)}
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.3,
          borderColor: "lightgrey",
          backgroundColor: "white",
          position: "absolute",
          right: -6,
          top: -6,
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
          shadowRadius: 30,
          shadowOpacity: 0.05,
          elevation: 5,
        }}
      >
        <Entypo name="plus" size={22} color="#5d3ebd" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart:(product:Product) =>
      dispatch(actions.addToCart({quantity:1,product}))
  }
}

export default connect(null,mapDispatchToProps)(index);
