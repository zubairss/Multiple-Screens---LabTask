import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function DetailScreen({ navigation, route }) {
  let dataFetched = route.params;
  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
      <StatusBar style="auto" />

  <Text style={{textAlign: 'center'}}>{dataFetched}</Text>


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
});
