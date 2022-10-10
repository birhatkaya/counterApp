import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0);

  function updateCounter() {
    setCounter(counter + 1)
  }


  return (
    <View>
      <Text style={{fontSize: 50}}>Counter: {counter}</Text>
      <Button title='Ekle' onPress={updateCounter}></Button>
    </View>
  );
}

const styles = StyleSheet.create({

}
);
