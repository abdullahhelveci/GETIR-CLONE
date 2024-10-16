import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../models";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import * as actions from '../../redux/actions/cartActions'

type CartItemProps = {
  product: Product;
  quantity:number
  removeFromCart: (product:Product) => void
};

const { width, height } = Dimensions.get("window");

const index = ({ product,quantity, removeFromCart }: CartItemProps) => {
  
  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
        <View
        style={{
          borderBottomWidth: 0.43,
          width: width * 0.92,
          marginHorizontal: width * 0.04,
          borderBottomColor: "lightgray",
          height: height * 0.13,
          flexDirection: "row",

          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ height: height * 0.09, width: height * 0.09 }}
            source={{ uri: product.image }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                maxWidth: width * 0.45,
              }}
            >
              {product && product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: "#848897",
                fontWeight: "600",
              }}
            >
              {product && product.miktar}
            </Text>
            <Text
              style={{
                color: "#5d3ebd",
                fontWeight: "bold",
                marginTop: 6,
                fontSize: 15,
              }}
            >
              ₺ {product && product.fiyat}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: width * 0.21,
            borderColor: "lightgray",
            borderWidth: 0.5,
            height: height * 0.037,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => removeFromCart(product)}
          style={{ flex: 1, alignItems: "center" }}>
            <Text> - </Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#5d3ebd",
              height: height * 0.037,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 13 }}>
            {quantity}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return{
    removeFromCart: (product:Product) =>
      dispatch(actions.removeFromCart(product))
  }
}

export default connect(null,mapDispatchToProps)(index)
