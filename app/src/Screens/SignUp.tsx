import React from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import RegisterForm from '../Component/SignUpForm'


export default function Register({navigation}:any) {

  const navigationToLogin = () => {
    navigation.navigate('Login'); // Điều này chuyển đổi sang màn hình đăng ký
  }
  return (
    <View style={styles.container}>
      
    <Text style={styles.title}>Đăng nhập</Text>
    <RegisterForm navigation={navigation}/>
    <Text dataDetectorType="link"  onPress={navigationToLogin}>
      Đăng nhập
    </Text>
  </View>
  )
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
