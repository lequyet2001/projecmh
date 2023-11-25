import React from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
export default function Desciption() {
    return (
        <>
            <View style={{ paddingBottom: 30 }}>
                <Text style={styles.title}> E-Painpai</Text>
                <View style={{ borderRadius: 50, borderWidth: 3, borderColor: "#fff", backgroundColor: '#88f1ff', width: 314, height: 59, left: 50 }}>

                    <Text style={styles.description}>Learn Together</Text>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
   
    title: {
      fontSize: 60,
      color: '#F15C56', // Màu chữ
      textShadowColor: '#fff', // Màu viền chữ
      textShadowOffset: { width: 5, height: 0 }, // Độ lệch của viền chữ
      textShadowRadius: 1, // Bán kính mờ của viền chữ
      paddingBottom: 10,
      fontFamily: 'Lemon Regular',
      textAlign: 'center',
    },
    description: {
      fontSize: 30,
      color: '#fff', // Màu chữ
      textShadowColor: '#E7883E', // Màu viền chữ
      textShadowOffset: { width: 5, height: 0 }, // Độ lệch của viền chữ
      textShadowRadius: 1, // Bán kính mờ của viền chữ
      paddingBottom: 10,
      fontFamily: 'Lemon Regular',
      textAlign: 'center',
    },
  
  });
  