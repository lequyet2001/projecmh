import * as React from "react";
import { StyleSheet, View, Text, TextInput, Dimensions } from "react-native";
type Props = {
  value?: string;
  secureTextEntry?: boolean;
  onChangeText?: any;
  placeholder?: string;
  style?: Object;
  Lable?: string;
  canEdit?: boolean;
}


const Component1 = (Props: Props) => {
  const { value, secureTextEntry, onChangeText, style, placeholder, Lable, canEdit } = Props;

  return (
    <View style={{
      width: Dimensions.get('window').width * 0.8,
      height: Dimensions.get('window').height * 0.06,
      display: "flex",
      justifyContent: "space-evenly",
    }}>
      <Text style={{
        height: "100%", // Sửa đổi: Set chiều cao 100% để căn giữa văn bản
        width: "77%", // Sửa đổi: Sử dụng giá trị cụ thể thay vì phần trăm
        fontSize: Dimensions.get('window').fontScale * 20,
        fontWeight: "bold",
        fontFamily: 'Cantarell Bold',
        color: "rgba(30, 30, 30, 0.74)",
        // top: Dimensions.get('window').height * 0.03, // Sửa đổi: Sử dụng giá trị cụ thể thay vì phần trăm
      }}>*{Lable}</Text>
      <View style={{
        padding:5
      }}/>
      <TextInput
        style={[style, {
          
          borderRadius: 30,
          backgroundColor: "rgba(175, 175, 175, 0.4)",
          fontSize: 20,
          fontFamily: 'Cantarell Regular',
          color: "rgba(30, 30, 30, 1)",
          // top: Dimensions.get('window').height*-0.05,
          // left: Dimensions.get('window').width*0.05,
        }]}
        placeholder={`   ${placeholder}`}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        editable={canEdit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  usernameFlexBox: {
    // top:15,
    // position: "absolute",
    width: "100%", // Sửa đổi: Set chiều rộng 100% để căn giữa văn bản
    height: "100%", // Sửa đổi: Set chiều cao 100% để căn giữa văn bản
    justifyContent: "center",
  },
  component1Child: {
    height: 40, // Sửa đổi: Sử dụng giá trị cụ thể thay vì phần trăm
    width: 300, // Sửa đổi: Sử dụng giá trị cụ thể thay vì phần trăm
    borderRadius: 30,
    backgroundColor: "rgba(175, 175, 175, 0.4)",
    // position: "absolute",
  },
  username: {
    height: "100%", // Sửa đổi: Set chiều cao 100% để căn giữa văn bản
    width: "77%", // Sửa đổi: Sử dụng giá trị cụ thể thay vì phần trăm
    left: Dimensions.get('window').width * 0.1, // Sửa đổi: Sử dụng giá trị cụ thể thay vì phần trăm
    top: Dimensions.get('window').height * -0.03, // Sửa đổi: Sử dụng giá trị cụ thể thay vì phần trăm
    fontSize: Dimensions.get('window').fontScale * 20,
    fontWeight: "bold",
    fontFamily: 'Cantarell Bold',
    color: "rgba(30, 30, 30, 0.74)",
  },

  component1: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowRadius: 4,
    // elevation: 4,
    // shadowOpacity: 1,
    flex: 1,
    width: 300,
    height: 40,
  },
});

export default Component1;
