import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product } from '../../models'
import ImageCarousel from '../../components/ImageCarousel'
import DetailBox from '../../components/DetailBox'
import DetailProperty from '../../components/DetailProperty'
import CardButton from '../../components/CardButton'

const index = (props:any) => {

const [product,setProduct] = useState<Product>()

    useEffect(() => {
      setProduct(props.route.params.product)
    },[])

    if(!product){
      return <ActivityIndicator color={'#5d3ebd'} />
    }


  return (
    <ScrollView style={{flexDirection:'column'}}>
      <View>
      <ImageCarousel images={product.images} />
      <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
      <Text style={{paddingHorizontal:10,paddingVertical:14,color:'#808899',fontWeight:'600'}}>Detaylar</Text>
      <DetailProperty />
      </View>
      <CardButton item={product} />
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})