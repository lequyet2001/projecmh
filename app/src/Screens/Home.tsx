import React from 'react'
import {Button, Text, View } from 'react-native'

export default function Home({navigation}:any) {
  const handleLogin=()=>{
    navigation.navigate('Game');
  }
  return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Button title="Game" onPress={handleLogin} />
    </View>
  )
}
