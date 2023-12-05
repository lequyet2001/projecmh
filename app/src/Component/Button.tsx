import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'


import React from 'react'

interface ButtonProps {
    
    styleButton?:Object;
    sytleText?:Object;
    onPress?:()=>void;
    title:string;
    key?:string;
    styleText2?:Object;
}


function Button({styleButton,sytleText,onPress,title,styleText2}:ButtonProps) {
    return (
        
            <TouchableOpacity style={styleButton} onPress={onPress}>   
           

                <Text style={sytleText}>{title}</Text>
            
            </TouchableOpacity>
    
    )
}

export default Button