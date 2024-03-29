import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';


interface FormContainerProps {
  children: React.ReactNode;
  width?: number;
  fontSize?: number;
  top?:number;
  style?:Object;
}
export default function Description({ children, width, fontSize ,top,style}: FormContainerProps) {
  return (
    <>
      <View style={[{ paddingBottom: 0, alignItems: 'center' },style]}>
        <Text style={[{
          fontSize: fontSize ? fontSize : 60,
          color: '#F15C56', // Màu chữ
          // textShadowColor: '#fff', // Màu viền chữ
          textShadowOffset: { width: 5, height: 0 }, // Độ lệch của viền chữ
          textShadowRadius: 1, // Bán kính mờ của viền chữ
          paddingBottom: 10,
          fontFamily: 'Lemon Regular',
          textAlign: 'center',
          width:Dimensions.get('window').width,
          // justifyContent:'center',
          // alignItems:'center',

        }]}>E-Painpai</Text>
        <View
          style={{
            borderRadius: 50,
            borderWidth: 3,
            borderColor: '#fff',
            backgroundColor: '#88f1ff',
            width: width ? width : 300,
            height: 59,
          }}>
          <Text style={[

            {
              fontSize: fontSize ? fontSize / 2 : 30,
              color: 'black', // Màu chữ
              // textShadowColor: '#E7883E', // Màu viền chữ
              // textShadowOffset: { width: 5, height: 0 }, // Độ lệch của viền chữ
              // textShadowRadius: 1, // Bán kính mờ của viền chữ
              paddingBottom: 10,
              fontFamily: 'Lemon Regular',
              textAlign: 'center',
              top:top?top:0,
            }
          ]}>{children}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {

    color: '#F15C56', // Màu chữ
    textShadowColor: '#fff', // Màu viền chữ
    textShadowOffset: { width: 5, height: 0 }, // Độ lệch của viền chữ
    textShadowRadius: 1, // Bán kính mờ của viền chữ
    paddingBottom: 10,
    fontFamily: 'Lemon Regular',
    textAlign: 'center',
  },

});
