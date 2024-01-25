import React from "react";
import { View, Text, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native';
import Form from '../Component/LoginForm';
import Description from "../Component/Description";
import Button from "../Component/Button";
import FormContainer from "../Component/FormContainer";

export default function Login({ navigation }: { navigation: any }): JSX.Element {
  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    // <ImageBackground source={require('../../assets/image1.png')} style={styles.backgroundImage}>
    <FormContainer>
      <ScrollView contentContainerStyle={styles.container}>
      <Description width={180} >
           Login
          </Description>
        <Form navigation={navigation} />
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            Do not have an account?
          </Text>
          <Button onPress={navigateToRegister} styleButton={styles.button} sytleText={styles.text} title="Sign Up" />
        </View>
      </ScrollView>
    </FormContainer>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'center', // Center content horizontally
    height: Dimensions.get('window').height - 50,
  },

  registerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  registerText: {
    fontFamily: 'Lemon Regular',
    color: 'black',
    textDecorationLine: 'none',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.065,
    backgroundColor: '#FAED92',
    elevation: 8,
    borderRadius: 30,
    borderColor: '#FFA5F6',
    borderWidth: 5,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    textShadowColor: '#F15C56',
    textShadowOffset: { width: 5, height: 0 },
    textShadowRadius: 1,
    fontFamily: 'Lemon Regular',
    textAlign: 'center',
  },
});
