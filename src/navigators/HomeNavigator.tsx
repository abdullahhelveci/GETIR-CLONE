import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../src/screens/HomeScreen";
import CategoryFilterScreen from "../../src/screens/CategoryFilterScreen";
import ProductDetailScreen from "../screens/ProductDetailsScreen";
import CartScreen from "../screens/CartScreen";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { Product } from "../models";
import { useEffect, useState } from "react";
import * as actions from '../redux/actions/cartActions'

const Stack = createStackNavigator();

const { width, height } = Dimensions.get("window");

const HomeNavigator = (
  {cartItems,clearCart}:{cartItems:{product:Product,quantity:number}[]
  
}) => {
  const navigation = useNavigation();

  const [totalPrice,setTotalPrice] = useState<number>(0)

  const getProductsPrice = () => {
    var total = 0
    cartItems.forEach(cartItem => {
      const price = (total += cartItem.product.fiyat)
      setTotalPrice(price)
    })
    cartItems.length ? null : setTotalPrice(0)
  }

  useEffect(() => {
    getProductsPrice()
  },[cartItems])

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              //@ts-ignore
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Image
                style={{ width: 23, height: 33, marginLeft: 6 }}
                source={require("../../assets/cart.png")}
              />
              <View
                style={{ height: 33, width: 4, backgroundColor: "white" }}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 33,
                  backgroundColor: "#f3effe",
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                }}
              >
                <Text style={{ color: "#5d3ebd", fontWeight: "bold" }}>
                  ₺ {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#5c3ebc",
          },
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 12 }}
            >
              <Ionicons name="close" size={22} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            // @ts-ignore
            <TouchableOpacity 
            
            style={{ paddingRight: 12 }}>
              <Foundation name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          ),
        }}
        name="ProductDetails"
        component={ProductDetailScreen}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitleAlign:'center',
          headerTitle: () => (
            <Text style={{fontWeight:'bold',fontSize:15, color:'white'}}>Sepetim</Text>
          ),
          headerLeft: () => (
            <TouchableOpacity style={{paddingLeft:12}} onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={26} color='white' />
            </TouchableOpacity>
          ),headerRight: () => (
            <TouchableOpacity
            onPress={() => clearCart()} // Props'u doğrudan çağırın
              style={{ paddingRight: 12 }}
            >
              <Ionicons name="trash" size={26} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state,dispatch) => {
  const {cartItems} = state;
  return{
    cartItems:cartItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart())
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeNavigator)
