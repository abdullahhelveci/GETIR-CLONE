import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";
import { connect } from "react-redux";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

const index = ({cartItems}:{cartItems:{product:Product,quantity:number}[]}) => {

  const [totalPrice,setTotalPrice] = useState<number>(0)

    const getProductsPrice = () => {
      let total = 0
      cartItems.forEach((item) => {
        total += item.product.fiyat
        setTotalPrice(total)
      })
      cartItems.length ? null : setTotalPrice(0)
    }

    useEffect(() => {
      getProductsPrice()
    },[cartItems])

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem quantity={item.quantity} product={item.product} />}
      />
      <View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: "#5d3ebd",
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text style={{ color: "#5d3dbd", fontWeight: "bold", fontSize: 16 }}>
            ₺ {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const {cartItems} = state
  return{
    cartItems:cartItems
  }
}

export default connect(mapStateToProps,null)(index)
