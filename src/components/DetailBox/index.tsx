import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type DetailBoxProps={
    price:number,
    name:string,
    quantity:string
}

const index = ({price,name,quantity}:DetailBoxProps) => {
  return (
    <View style={{width:'100%',backgroundColor:'white',alignItems:'center'}}>
      <Text style={{color:'#5d3ebd',fontSize:20,fontWeight:'bold',marginTop:12}}>₺{price}</Text>
      <Text style={{fontWeight:'700',fontSize:16,marginTop:12}}>{name}</Text>
      <Text style={{color:'#848897',fontWeight:'600',marginTop:8,paddingBottom:17}}>{quantity}</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})