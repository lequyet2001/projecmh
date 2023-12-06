import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Description from './Description';

export interface FormContainerProps {
  children: React.ReactNode;
  desc?: string;
  children2?: () => React.ReactNode;
  backgroundColor?:string;
  DescBackgroundColor?:string;
  contetnBackGroundColor?:string;
  width?:number;
}

export default function Content({width, DescBackgroundColor,children, desc, children2,backgroundColor ,contetnBackGroundColor}: FormContainerProps) {
  const a = children2 ? children2() : null;

  return (
    <View
      style={{
        display: 'flex',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: backgroundColor,
      }}
    >
      <View
        style={{
          backgroundColor: DescBackgroundColor,
          height: 400 / 2.6,
        }}
      >
        <Description fontSize={40} width={width} top={12}>
          {desc}
        </Description>
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            backgroundColor: contetnBackGroundColor,
            borderColor: 'white',
            borderWidth: 5,
            borderStyle: 'solid',
            width: Dimensions.get('window').width - 10,
            height: 430,
            borderRadius: 10,
            top:5
          }}
        >
          <ScrollView contentContainerStyle={{display:'flex',alignItems:'center'}}>{children}</ScrollView>
        </View>
      </View>
      <View>{a}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
