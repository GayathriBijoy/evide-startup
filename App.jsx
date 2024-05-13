import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screen/LoginScreen';
import SignupScreen from './src/screen/SignupScreen';
import OpenScreen from './src/screen/OpenScreen';
import InstOne from './src/screen/InstOne';
import InstTwo from './src/screen/InstTwo';
import InstThree from './src/screen/InstThree';
import Open0 from './src/screen/Open0';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>{
      <Stack.Navigator 
        screenOptions={{headerShown: false,}}>
        <Stack.Screen name="open0" component={Open0} />
        <Stack.Screen name="open" component={OpenScreen} />
        <Stack.Screen name="inst1" component={InstOne} />
        <Stack.Screen name="inst2" component={InstTwo} />
        <Stack.Screen name="inst3" component={InstThree} />

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

      </Stack.Navigator>
      }</NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#F5F5F5",
    flex:1,
  }
})