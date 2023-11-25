import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'


import React from 'react'

interface ButtonProps {
    
    styleButton?:Object;
    sytleText?:Object;
    onPress?:()=>void;
    title:string;
    key?:number;
}


function Button({styleButton,sytleText,onPress,title,key}:ButtonProps) {
    return (
        
            <TouchableOpacity style={styleButton} key={key} onPress={onPress}>   
                <Text style={sytleText}>{title}</Text>
            </TouchableOpacity>
    
    )
}

export default Button