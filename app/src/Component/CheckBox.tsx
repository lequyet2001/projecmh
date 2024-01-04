import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


type props={
    onPress:()=>void;
    checked:Boolean;
    title:String;

}
const CustomRadioButton:React.FC<props> = (props) => {
  const {onPress,checked,title}=props

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: 'black',
              backgroundColor: 'white',

            }}
          />
          <View  style={{
              width: 10,
              height: 10,
              borderRadius: 10,
              left:-15,
            //   borderWidth: 3,
            //   borderColor: checked? 'white':'black',
              backgroundColor: checked?'black':'white',

            }}>

          </View>
          <Text style={{ marginLeft: 0, fontSize:20, fontFamily:'Lemon Regular' ,color:'black'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomRadioButton;
