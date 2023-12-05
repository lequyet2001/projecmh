import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
type Props={
  value?:string;
  secureTextEntry?:boolean;
  onChangeText?:any;
  placeholder?:string;
  style?:Object;
  Lable?:string;
}


const Component1 = (Props:Props) => {
  const {value,secureTextEntry,onChangeText,style,placeholder,Lable}=Props;

  return (
    <View style={styles.component1}>
      <View style={styles.component1Child} />
      <Text style={[styles.username, styles.usernameFlexBox]}>*{Lable}</Text>
      <Text style={[styles.emailOrPhone1, styles.usernameFlexBox]}>
      </Text>
        <TextInput 
        style={style} 
        placeholder={placeholder} 
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
         />
    </View>
  );
};

const styles = StyleSheet.create({
  usernameFlexBox: {
   top:15,
    position: "absolute",
    width: "100%", // Sửa đổi: Set chiều rộng 100% để căn giữa văn bản
    height: "100%", // Sửa đổi: Set chiều cao 100% để căn giữa văn bản
    justifyContent: "center",
  },
  component1Child: {
    height:40, // Sửa đổi: Sử dụng giá trị cụ thể thay vì phần trăm
    width: 300, // Sửa đổi: Sử dụng giá trị cụ thể thay vì phần trăm
    top: 40,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 30,
    backgroundColor: "rgba(175, 175, 175, 0.4)",
    position: "absolute",
  },
  username: {
    height: "100%", // Sửa đổi: Set chiều cao 100% để căn giữa văn bản
    width: "77%", // Sửa đổi: Sử dụng giá trị cụ thể thay vì phần trăm
    top: 0,
    // left: -100, // Sửa đổi: Sử dụng giá trị cụ thể thay vì phần trăm
    fontSize: 15,
    // fontWeight: "bold",
    fontFamily: 'Cantarell Bold',
    color: "rgba(30, 30, 30, 0.74)",
  },
  emailOrPhone1: {
    top: 50,
    left: -40,
    fontSize: 15,
    fontFamily: "Cantarell Regular",
    color: "rgba(0, 0, 0, 0.3)",
  },
  component1: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: 300,
    height: 40,
  },
});

export default Component1;
