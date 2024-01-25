import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import Video from 'react-native-video';
import Button from '../Component/Button';
import Desciption from '../Component/Description';


export default function ScreenDefault({ navigation }: any): JSX.Element {
  const Login = (): void => {
    navigation.navigate("Login");
  }
  const SignUp = (): void => {
    navigation.navigate("Register");
  }
  const videoError = (error: any): void => {
    console.log(error);
  }
  useEffect(() => {

  }, [])
  return (
    <ImageBackground source={require('../../assets/image1.png')} style={styles.a}>
      <View style={{ flex: 1,justifyContent:'space-around',top:-50  }}>
        <Desciption style={{flex:0}}>
          Learn Together 
        </Desciption>
        <View style={[styles.container,{flex:0}]} >
          <Button title="Login" onPress={Login} styleButton={styles.button} sytleText={styles.text} />
          <Button title="SignUp" onPress={SignUp} styleButton={styles.button} sytleText={styles.text} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    flexDirection: 'row',
    // top: -80
  },
  a: {
    flex: 1,
    // resizeMode: 'stretch', // or 'stretch'
    justifyContent: 'center', // Optional: align content vertically
    display: 'flex',
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    // top:-10
  },
  button: {
    width: 166 / 1.1,
    height: 128 / 1.1,
    backgroundColor: '#FAED92',
    elevation: 8,
    borderRadius: 30,
    borderColor: '#FFA5F6',
    borderWidth: 5,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',

  },
  text: {
    fontSize: 30,
    // fontWeight: 'bold',
    color: '#fff', // Màu chữ
    textShadowColor: '#F15C56', // Màu viền chữ
    textShadowOffset: { width: 5, height: 0 }, // Độ lệch của viền chữ
    textShadowRadius: 1, // Bán kính mờ của viền chữ
    paddingBottom: 10,

    fontFamily: 'Lemon Regular',
    textAlign: 'center',
    bottom: -5,
    left: -4,
  },

});
