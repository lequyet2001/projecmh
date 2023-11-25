import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import CustomAlert from './CustomAlert';
import Button from './Button';
import { ip } from './ip';

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
        showAlert('Vui lòng nhập đầy đủ thông tin');
        return;
      }

      const emailCheck = await axios.get(`http://${ip}:3000/api/users/EmailCheck?email=${email}`);

      if (emailCheck.data.status === 200) {
        const user = await axios.get(`http://${ip}:3000/api/users/UserCheck?username=${username}`);
        if (user.data.status === 200) {
          const response = await axios.post(`http://${ip}:3000/api/users/Signin`, {
            username: username,
            password: password,
            password2: password2,
            email: email,
          });

          if (response.data.status === 400 || response.data.status === 201) {
            showAlert(response.data.msg);
            return;
          }

          showAlert(response.data.msg, () => navigation.navigate('Login'));
        } else {
          showAlert(user.data.msg);
        }
      } else {
        showAlert(emailCheck.data.msg);
      }
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
  const a=[
    {
      placeholder:"Tên người dùng",
      value:username,
      onChangeText:(text:string)=>{setUsername(text)}
    },
    {
      placeholder:"Mật khẩu",
      value:password,
      onChangeText:(text:string)=>{setPassword(text)}
    },
    {
      placeholder:"Nhập lại mật khẩu",
      value:password2,
      onChangeText:(text:string)=>{setPassword2(text)}
    },
    {
      placeholder:"Email",
      value:email,
      onChangeText:(text:string)=>{setEmail(text)}
    }
  ]
  return (
    <View style={styles.container}>
     {a.map((item,index)=>{
        return(
          <TextInput
          style={styles.input}
          placeholder={item.placeholder}
          value={item.value}
          onChangeText={item.onChangeText}
        />
        )
     })}
      <Button title="Đăng ký" onPress={handleSignin} />
      <CustomAlert
        visible={isAlertVisible}
        onClose={() => setAlertVisible(false)}
        title="Thông báo"
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
    justifyContent: 'center',
    alignItems: 'center',
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
