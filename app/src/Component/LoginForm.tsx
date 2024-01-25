import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Dimensions } from 'react-native';
import getUser from '../data/user';
import { NavigationContainer } from '@react-navigation/native';
import LableInput from './LableInput';
import axios from 'axios';
import CustomAlert from './CustomAlert';
import Button from './Button';
import { ip } from './ip';
import { login } from '../fetchAPI/Login'
import { useDispatch, useSelector } from 'react-redux';
import * as auth from '../redux/Actions/authActions';

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

  // const [data1, setData] = useState<users>();
  const [msg, setMsg] = useState<string>('');
  const [bt, setbt] = useState<array[]>([]);
  const { data, isLogin } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
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
      const data = await login(username, password);
      const response = data;
      const responseData = response;
      dispatch(auth.loginSuccess(responseData.user))
      console.log(response)
      if (responseData) {
        // navigation.navigate('Home');
        // setAlertVisible(true);
        switch (response.status) {
          case 200:
            // if (responseData) {
            navigation.navigate('Home');
            // setAlertVisible(true);
            // }
            break;

          case 400:
            setMsg(responseData.msg);
            setbt(array);
            setAlertVisible(true);
            break;
         
          default:
            break;
        }
      }
      else {
        console.error('Invalid response data:', responseData);
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
      <View style={{ height: Dimensions.get('window').height*0.2,justifyContent:'space-between' }}>
        <LableInput
          placeholder='Email or username'
          // style={styles.input}
          secureTextEntry={false}
          value={username}
          onChangeText={(text: React.SetStateAction<string>) => setUsername(text)}
          Lable='Username'
        />
        <LableInput
          placeholder='Password'
          // style={styles.input}
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
        title={msg}
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
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  input: {
    // top: 10,
    // left: 20,
    fontSize: 20,
    fontFamily: 'Cantarell',
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
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'black', // Màu chữ

    // paddingBottom: 10,

    fontFamily: 'Canterell',
    textAlign: 'center',
    // bottom: -5,
    // left: -4,
  },
});
