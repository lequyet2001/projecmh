import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import getUser from '../data/user';
import { NavigationContainer } from '@react-navigation/native';
import LableInput from './LableInput';
import axios from 'axios';
import CustomAlert from './CustomAlert';
import Button from './Button';
import { ip } from './ip';
import {login} from '../fetchAPI/Login'


interface users {
  username: String;
  password: String;
}
interface array {
  text: string;
  onPress: () => void;
}
export default function Form({ navigation }: { navigation: any }): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAlertVisible, setAlertVisible] = useState(false);

  const [data, setData] = useState<users>();
  const [msg, setMsg] = useState<string>('');
  const [bt, setbt] = useState<array[]>([]);


  const handleLogin = async (): Promise<void> => {
    try {
      console.log({ ip })

      if (username === '' || password === '') {
        setMsg('Vui lòng nhập đầy đủ thông tin');
        setbt([{
          text: 'Ok',
          onPress() {
            setAlertVisible(false)
          }
        }])
        setAlertVisible(true)
        return;
      }
      const response = await login(username, password);

      const responseData = response.data;
      console.log(responseData.status)
      switch (response.data.status) {
        case 200:
          if (responseData) {
            setMsg(responseData.msg);
            setbt([{
              text: 'Ok',
              onPress() {
                setAlertVisible(false);
                navigation.navigate('Home');
              },
            }]);
            setAlertVisible(true);
          } else {
            console.error('Invalid response data:', responseData);
          }
          break;

        case 400:
          setMsg(responseData.msg);
          setbt(array);
          setAlertVisible(true);
          break;
        case 500:
          setMsg(responseData.msg);
          setbt([{
            text: 'Ok',
            onPress() {
              setAlertVisible(false);
            },
          }]);
          setAlertVisible(true);
          break;
        default:
          break;
      }

    } catch (error) {
      console.error('Error fetching data: ', error);
      // Handle error, show an alert, etc.
    }
  };




  const array = [{
    text: 'Tạo tài khoản',
    onPress: () => { navigation.navigate("Register") },
  },
  {
    text: 'Tiếp tục đăng nhập',
    onPress: () => setAlertVisible(false)
  },]
  return (
    <View style={styles.container}>
      <View style={{height:200}}>
        <LableInput
          placeholder='Email or username'
          style={styles.input}
          secureTextEntry={false}
          value={username}
          onChangeText={(text: React.SetStateAction<string>) => setUsername(text)}
          Lable='Username'
        />
        <LableInput
          placeholder='Password'
          style={styles.input }
          secureTextEntry={true}
          value={password}
          onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
          Lable='Password'
        />
      </View>

      <Button title="Đăng nhập" onPress={handleLogin} styleButton={styles.button} sytleText={styles.text} />
      <CustomAlert
        visible={isAlertVisible}
        onClose={() => setAlertVisible(false)}
        title="Thông báo"
        msg={msg}
        onConfirm={() => { setAlertVisible(false) }}
        key={Math.random()}
        array={bt}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // top:50,
    // paddingBottom:50
  },
  input: {
    top: 35,
    left: 20,
    fontSize: 20,
    fontFamily: 'Cantarell',
  },
  button: {
    width: 742.5/3.5,
    height:140/3,
    backgroundColor: '#FAED92',
    elevation: 8,
    borderRadius: 30,
    borderColor: '#FFA5F6',
    borderWidth: 5,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center'
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
