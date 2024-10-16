import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import * as actions from '../../redux/actions/cartActions'
import { Product } from "../../models";
const { width, height } = Dimensions.get("window");

type cardButtonType = {
  addItemToCart: (a:Product) => void,
  item:Product
}
const index = ({item,addItemToCart}:cardButtonType) => {
  return (
    <TouchableOpacity
    onPress={() =>addItemToCart(item)}
      style={{
        justifyContent: "center",
        marginTop: 7,
        width: "100%",
        height: height * 0.08,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: height * 0.06,
          width: "90%",
          backgroundColor: "#5d39c1",
          marginHorizontal: "5%",
          borderRadius: 8,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
};
  const matDispatchToProps = (dispatch) => {
    return {
      addItemToCart: (product:Product) => dispatch(actions.addToCart({quantity:1,product}))
    }
  }


export default connect(null,matDispatchToProps)(index);
