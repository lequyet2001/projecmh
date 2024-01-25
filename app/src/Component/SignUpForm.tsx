import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import CustomAlert from './CustomAlert';
import Button from './Button';
import { ip } from './ip';
import LableInput from './LableInput';
import { useDispatch, useSelector } from 'react-redux';
import * as signup from '../redux/Actions/signUpActions';

interface User {
  username: string;
  password: string;
}

interface AlertButton {
  text: string;
  onPress: () => void;
}

export default function RegisterForm({ navigation }: { navigation: any }): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [msg, setMsg] = useState<string>('');
  const [alertButtons, setAlertButtons] = useState<AlertButton[]>([]);

  const handleSignin = async (): Promise<void> => {
    try {
      if (username === '' || password === '' || password2 === '' || email === '') {
        showAlert('Please enter complete information');
        return;
      }
          const response = await axios.post(`http://${ip}:3000/api/users/Signup`, {
            username: username,
            password: password,
            password2: password2,
            email: email,
          });
          if(response.data.status==400){
            showAlert(response.data.msg);
            return;
          }
          showAlert(response.data.msg);
          navigation.navigate('Login');
      
     
    } catch (error) {
      
      
      console.error('Error fetching data: ', error);
      // Handle error, show an alert, etc.
    }
  };



  const showAlert = (message: string, callback?: () => void): void => {
    setMsg(message);
    setAlertButtons([
      {
        text: 'Ok',
        onPress: () => {
          setAlertVisible(false);
          if (callback) {
            callback();
          }
        },
      },
    ]);
    setAlertVisible(true);
  };
  const a = [
    {
      placeholder: "Tên người dùng",
      value: username,
      onChangeText: (text: string) => { setUsername(text) },
      secureTextEntry: false
    },
    {
      placeholder: "Mật khẩu",
      value: password,
      onChangeText: (text: string) => { setPassword(text) },
      secureTextEntry: true
    },
    {
      placeholder: "Nhập lại mật khẩu",
      value: password2,
      onChangeText: (text: string) => { setPassword2(text) },
      secureTextEntry: true
    },
    {
      placeholder: "Email",
      value: email,
      onChangeText: (text: string) => { setEmail(text) },
      secureTextEntry: false
    }
  ]
  return (
    <View style={styles.container}>
      <View style={{
        height:Dimensions.get('window').height*0.38,
        justifyContent:'space-between'
        }}>

        {a.map((item, index) => {
          return (
            <LableInput
              key={index}
              placeholder={item.placeholder}
              style={{}}
              secureTextEntry={item.secureTextEntry}
              value={item.value}
              onChangeText={item.onChangeText}
              Lable={item.placeholder}
            />
          )
        })}
      </View>
      <Button
        title="Đăng ký"
        onPress={handleSignin}
        styleButton={styles.button}
        sytleText={styles.text}
      />
      <CustomAlert
        visible={isAlertVisible}
        onClose={() => setAlertVisible(false)}
        title={msg}
        msg={msg}
        onConfirm={() => setAlertVisible(false)}
        key={Math.random()}
        array={alertButtons}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // top:-30
  },
  input: {
    top: 25,
    left: 20,
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
