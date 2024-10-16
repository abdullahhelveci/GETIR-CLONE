import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderMain from '../../components/HeaderMain'
import BannerCarousel from '../../components/BannerCarousel'
import MainCategories from '../../components/MainCategories'

const index = () => {
  return (
    <ScrollView style={{backgroundColor:'#f5f5f5'}}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})