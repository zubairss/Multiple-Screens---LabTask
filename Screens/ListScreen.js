import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ListScreen({ navigation, route }) {
    let dataFetched = route.params;
    
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <Text style={{fontWeight: 'bold', fontSize: 30}}>List</Text>

        <Text style={{textAlign: 'center', marginVertical: 10}}>{dataFetched}</Text>


        <Button title="Details" onPress={() => navigation.navigate('Detail', dataFetched)}/>
                     
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
