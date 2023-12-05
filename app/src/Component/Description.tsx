import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';


interface FormContainerProps {
  children: React.ReactNode;
  width?: number;
}
export default function Description({children,width}:FormContainerProps) {
  return (
    <>
      <View style={{ paddingBottom: 0, alignItems: 'center' }}>
        <Text style={[styles.title,{fontSize: 60}]}> E-Painpai</Text>
        <View
          style={{
            borderRadius: 50,
            borderWidth: 3,
            borderColor: '#fff',
            backgroundColor: '#88f1ff',
            width: 314,
            height: 59,
          }}>
          <Text style={styles.description}>{children}</Text>
        </View>
      </View>
    </>
  );
}

const styles =StyleSheet.create({
    title: {
      
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
