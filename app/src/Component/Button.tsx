import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'


import React from 'react'

interface ButtonProps {
    
    styleButton?:Object;
    sytleText?:Object;
    onPress?:()=>void;
    title?:string;
    key?:string;
    styleText2?:Object;
    icon?:()=>React.ReactNode;
}


function Button({styleButton,sytleText,onPress,title,styleText2,icon}:ButtonProps) {
    const a=icon?icon():null
    
    return (
        
            <TouchableOpacity style={styleButton} onPress={onPress}>   
                {
                title? <Text style={sytleText}>{title}</Text>:a
            }
            </TouchableOpacity>
    
    )
}

export default Button