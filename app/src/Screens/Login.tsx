import React from "react"
import { View, Text, StyleSheet } from 'react-native';
import Form from '../Component/LoginForm';
import { NavigationContainer } from '@react-navigation/native';



export default function Login({navigation}:{navigation:any}): JSX.Element {
    const navigateToRegister = () => {
        navigation.navigate('Home'); // Điều này chuyển đổi sang màn hình đăng ký
      }
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Đăng nhập</Text>
      <Form navigation={navigation}/>
      <Text dataDetectorType="link"  onPress={navigateToRegister}>
        Đăng ký
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:20,
    paddingBottom:20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
