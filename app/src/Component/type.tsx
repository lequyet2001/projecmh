import { Component } from "react";

export interface User {
    username: string;
    password: string;
  }
  
  export interface AlertButton {
    text: string;
    onPress: () => void;
  }


export interface array {
    text: string;
    onPress: () => void;
  }

export  type Props={
    value?:string;
    secureTextEntry?:boolean;
    onChangeText?:any;
    placeholder?:string;
    style?:Object;
    Lable?:string;
  }
  export interface FormContainerProps {
    children: React.ReactNode;
    desc?:string;
    children2?:()=>React.ReactNode;
  }