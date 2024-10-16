import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigator from './HomeNavigator'
import {Entypo,FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const RootNavigator = () => {

  const CustomTabBarButton = ({children}:any) => (
    <TouchableOpacity
    style={{
      width:58,
      height:58,
      backgroundColor:'#5c3ebc',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      marginTop:-8,
      borderWidth:2,
      borderColor:'white'
    }}
    >
      <Entypo name='list' size={32} color='#ffd00c' />
    </TouchableOpacity>
  )

  return (
    <Tab.Navigator
    initialRouteName='AnaSayfa'
    screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5c3ebc',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
            height:80
        }
    }}
    >
      <Tab.Screen name='Anasayfa' component={HomeNavigator}
      options={{
        tabBarIcon: ({color}) => (
            <Entypo name='home' size={24} color={color} />
        )
      }}
      />
      <Tab.Screen name='Arama' component={HomeNavigator}
      options={{
        tabBarIcon: ({color}) => (
            <FontAwesome name='search' size={24} color={color} />
        )
      }}
      />

      <Tab.Screen 
      name='list' component={HomeNavigator} options={{
        tabBarButton: (props) => <CustomTabBarButton {...props} />
      }}
      />

      <Tab.Screen name='Kullanıcı' component={HomeNavigator}
      options={{
        tabBarIcon: ({color}) => (
            <FontAwesome name='user' size={24} color={color} />
        )
      }}
      />
      <Tab.Screen name='Hediye' component={HomeNavigator}
      options={{
        tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name='gift' size={24} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})