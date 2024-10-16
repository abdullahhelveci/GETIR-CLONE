import { ScrollView, StyleSheet } from "react-native";
import CategoryFiltering from "../../components/CategoryFiltering";
import TypeFiltering from "../../components/TypeFiltering";
import ProductsContainer from "../../components/ProductsContainer";
import { useState } from "react";
import { Category } from "../../models";

const index = (props:any) => {

  const [category,setCategory] = useState<Category | null>(props.route.params.category || null)
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductsContainer />
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
