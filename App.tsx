import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigators/RootNavigator'
import { LogBox } from 'react-native'
import store from './src/redux/store'
import { Provider } from 'react-redux'
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
}
})