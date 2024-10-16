import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import { useState } from "react";
import { Category } from "../../models";

const { height, width } = Dimensions.get("window");

const CategoryBox = ({item,active}:{item:Category,active:Category}) => {
    return(
        <View style={[{paddingHorizontal:9,flexDirection:'row',alignItems:'center'},item.name==active.name && {borderBottomColor:'#ffd00c',borderBottomWidth:2.5}]}>
            <Text style={{fontSize:14,color:'white',fontWeight:'600'}}>{item.name}</Text>
        </View>
    )
}

const index = ({category,active}:{category:Category,active:Category}) => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
    showsHorizontalScrollIndicator={false} 
    bounces={true}
    horizontal
      style={{
        width: "100%",
        backgroundColor: "#7849f7",
        height: height * 0.065,
      }}
    >
      {categories.map((item) => (
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
