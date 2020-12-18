import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DetailScreen from './Screens/DetailScreen';
import ListScreen from './Screens/ListScreen';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

  


    const [products, setProducts ] = useState([{
      name: 'Fan',
      price: '2500',
      image: 'NAN',
      detail: 'Fan -> Details will be shown here'
    },
    {
      name: 'Headphones',
      price: '4000',
      image: 'NAN',
      detail: 'Headphones -> Details will be shown here'
    },
    {
      name: 'Laptop',
      price: '400000',
      image: 'NAN',
      detail: 'Laptop -> Details will be shown here'
    }])
    const [employees, setEmployees] = useState([{
      name: 'Aslam',
      age: 40,
      image: 'NAN',
      detail: 'Aslam -> Bio will be show here'
    },
    {
      name: 'Rajesh',
      age: 35,
      image: 'NAN',
      detail: 'Rajesh -> Bio will be shown here'
    },
    {
      name: 'Jenny',
      age: 45,
      image: 'NAN',
      detail: 'Jenny -> Bio will be shown here'
    }])
    const [orders, setOrders] = useState([{
      order: 'Pizza',
      price: 20,
      image: 'NAN',
      detail: 'Order Details will be shown here'
    },{
      order: 'Wall Clock',
      price: 2500,
      image: 'NAN',
      detail: 'Order Details will be shown here'
    },{
      order: 'Burgers',
      price: 500,
      image: 'NAN',
      detail: 'Order Details will be shown here'
    }])


  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
