import React, { useState ,useEffect} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import user from '../data/user';
import axios from 'axios';
export default function Form(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (): void => {
    // Xử lý đăng nhập ở đây (kiểm tra thông tin đăng nhập)
    console.log(`Đăng nhập với tên người dùng: ${username} và mật khẩu: ${password}`);
    user()
  }
 

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
  