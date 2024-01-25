import React from 'react'
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import RegisterForm from '../Component/SignUpForm'
import FormContainer from '../Component/FormContainer';
import Desciption from '../Component/Description';
import Button from '../Component/Button';

export default function Register({ navigation }: any) {

  const navigationToLogin = () => {
    navigation.navigate('Login'); // Điều này chuyển đổi sang màn hình đăng ký
  }
  return (
    <FormContainer>
      <ScrollView contentContainerStyle={styles.container}>
      <Desciption width={200}>
           SignUp
          </Desciption>
        <RegisterForm navigation={navigation} />
        <Button title="Đăng nhập" onPress={navigationToLogin} styleButton={styles.button} sytleText={styles.text} />
      </ScrollView>
    </FormContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'center', // Center content horizontally
    height: Dimensions.get('window').height-50,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.065,
    backgroundColor: '#FAED92',
    elevation: 8,
    borderRadius: 30,
    borderColor: '#FFA5F6',
    borderWidth: 5,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center'
    top:20
  },
  text: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'white', // Màu chữ
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
