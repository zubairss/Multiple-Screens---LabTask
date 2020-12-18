import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { or } from 'react-native-reanimated';

export default function HomeScreen({ navigation, route }) {

    const [products, setProducts] = useState([
        ["Fan", "2500", "NAN", "Fan -> Details will be shown here"],
        ['Headphones', '4000', 'NAN', 'Headphones -> Details will be shown here'],
        ['Laptop', '400000', 'NAN', 'Laptop -> Details will be shown here']
      ]);
  
      const [employees, setEmployees] = useState([
        ['Aslam', 40, 'NAN', 'Aslam -> Bio will be shown here' ],
        ['Rajesh', 35, 'NAN', 'Rajesh -> Bio will be shown here'],
        ['Jenny', 45, 'NAN', 'Jenny -> Bio will be shown here']
      ])
      
      const [orders, setOrders] = useState([
        ['pizza', 20, 'NAN', 'Order Details will be shown here'],
        ['Wall Clock', 2500, 'NAN', 'Order Details will be shown here'],
        ['Burgers', 500, 'NAN', 'Order Details will be shown here']
      ])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("List",  products )}
        >
            <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>
                Manage Products
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("List", employees)}
        >
            <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>
                Manage Employees
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("List", orders)}
        >
            <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>
                Manage Orders
            </Text>
        </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    padding: 30,
    backgroundColor: '#ff4646',
    borderRadius: 55,
    marginVertical: 20,
  }
});
