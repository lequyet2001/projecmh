import React, { useState ,useEffect} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import getUser from '../data/user';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
 interface users{
  username: String;
  password:String;
 }


export default function Form({navigation}:{navigation:any}): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState<users>();
  const handleLogin = (): void => {
    if(username==""||password==""){
      console.log("Vui lòng nhập đầy đủ thông tin");
    }
    console.log(data);
    if(username==data?.username&&password==data?.password){
      console.log("Đăng nhập thành công");
      navigation.navigate("Home")
    }
  }
  useEffect(() => {
    const a= axios.get('http://192.168.1.4:3000/api/users')
    .then(response => {
      // Xử lý dữ liệu nhận được từ máy chủ
      setData(response.data[0]);
    })
    .catch(error => {
      // Xử lý lỗi nếu có
      console.error('Error fetching data: ', error);
    });;

    
  },[])

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
  