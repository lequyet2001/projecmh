import React, { useState ,useEffect} from 'react';
import { View, Text, TextInput, StyleSheet,Alert } from 'react-native';
import getUser from '../data/user';
import { NavigationContainer } from '@react-navigation/native';

import axios from 'axios';
import CustomAlert from './CustomAlert';
import Button from './Button';
import {ip} from './ip';



 interface users{
  username: String;
  password:String;
 }
 interface array {
  text: string;
  onPress: () => void;
}
export default function Form({navigation}:{navigation:any}): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAlertVisible, setAlertVisible] = useState(false);

  const [data, setData] = useState<users>();
  const [msg, setMsg] = useState<string>('');
  const [bt,setbt] = useState<array[]>([]);


  const handleLogin = async (): Promise<void> => {
    try {
      console.log({ip})    
     
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
      const response = await axios.get(`http://${ip}:3000/api/users/Login?username=${username}&password=${password}`);
      
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
    onPress: () => { navigation.navigate("Register")},
},
{
    text: 'Tiếp tục đăng nhập',
    onPress: () => setAlertVisible(false)
},]
  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Tên người dùng"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
      <CustomAlert 
      visible={isAlertVisible}
      onClose={()=>setAlertVisible(false)}
      title="Thông báo"
      msg={msg}
      onConfirm={()=>{setAlertVisible(false)}}
      // navigation={navigation}
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
  