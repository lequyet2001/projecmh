import React, { useEffect, useRef } from 'react'
import { Dimensions, Text, View, StyleSheet, Image, ToastAndroid } from 'react-native'
import Button from '../Component/Button';
import FormContainer from '../Component/FormContainer';
import Description from '../Component/Description';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomDrawerContent from '../Component/DrawerNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { BackHandler } from 'react-native';
import * as auth from '../redux/Actions/authActions';

const Drawer = createDrawerNavigator();



export default function Home({ navigation }: any) {
  const { data, isLogin } = useSelector((state: any) => state.auth);
  const [open, setOpen] = React.useState(false);
  const lastBackPressTime = useRef(null);
  // console.log(isLogin)
  const handleLogin = () => {
    navigation.navigate('Game');
  }
  const handleGoBack = () => {
    navigation.goBack();
  }
  

  useEffect(() => {
    const handleBackPress = () => {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - (lastBackPressTime.current || 0);

      // Kiểm tra thời gian giữa hai lần nhấn "back"
      if (timeDiff < 2000) {
        // Nếu khoảng thời gian nhỏ hơn 2 giây, đóng ứng dụng
        BackHandler.exitApp();
      } else {
        // Nếu khoảng thời gian lớn hơn hoặc bằng 2 giây, thông báo
        ToastAndroid.show('Nhấn back một lần nữa để đóng ứng dụng', ToastAndroid.SHORT);
        lastBackPressTime.current = currentTime;
      }
      // Nếu muốn khóa "back", return true; ngược lại, return false.
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    return () => {
      backHandler.remove();
    };
  }, [])

  function Home2({ navigation }: { navigation: any }) {
    return (
      <FormContainer  >
        <View style={{ 
          height: Dimensions.get('window').height,
          width:Dimensions.get('window').width ,
          justifyContent: 'space-evenly',
          }}>
          <Description  >
            Learn Together
          </Description>
          <View style={{
            // paddingTop: 20,
            display: 'flex',
            justifyContent: 'space-evenly',
            height: Dimensions.get('window').height / 1.5,
            alignItems: 'center'
          }}>
            {
              buttonGroup.map((button,index) => {
                return (
                  // <View key={button.id}>
                    <Button
                      key={button.id}
                      title={button.title}
                      onPress={button.onPress}
                      styleButton={button.styleButton}
                      sytleText={button.styleText} />
                  // </View>
                )
              })
            }
          </View>

          <MaterialIcons name="menu" size={24} color="black" style={styles.buttonContainer} onPress={() => navigation.openDrawer()} />
        </View>
      </FormContainer>
    )
  }


  const buttonGroup = [{
    id: 'Vacabulary',
    title: 'Vacabulary',
    onPress: () => { navigation.navigate('Vocabulary') },
    styleButton: styles.button,
    styleText: styles.text,

  }, {
    id: 'Grammar',
    title: 'Grammar',
    onPress: () => { navigation.navigate('Grammar') },
    styleButton: styles.button,
    styleText: styles.text,
  }, {
    id: 'Dictionary',
    title: 'Dictionary',
    onPress: () => { navigation.navigate('Dictionary') },
    styleButton: styles.button,
    styleText: styles.text,
  },

  {
    id: 'Number',
    title: 'Number',
    onPress: () => { navigation.navigate('Number') },
    styleButton: styles.button,
    styleText: styles.text,
  },
  {
    id: 'Stories',
    title: 'Stories',
    onPress: () => { navigation.navigate('Stories') },
    styleButton: styles.button,
    styleText: styles.text,

  }
]


  return (
    <>{
      isLogin ?
        <Drawer.Navigator
          defaultStatus='closed'
          //  initialRouteName="Home"

          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: '#561735',
              width: Dimensions.get('window').width / 1.4 ,
              height: Dimensions.get('window').height,
              borderRadius: 5,
              borderRightColor: '#fff',
              borderRightWidth: 1,
              // borderRightStyle:'dotted'
            },
            drawerActiveBackgroundColor: '#561735',
            drawerActiveTintColor: '#fff',
            // drawerInactiveTintColor: '#000',
            drawerItemStyle: {
              width: '110%',
              left: -15,

              top: -5,
              // justifyContent: 'center',
              // alignItems: 'center',
              // borderBottomColor: '#fff',
              // borderBottomWidth: 1,
            },
            drawerLabelStyle: {
              fontSize: 20,
              fontFamily: 'Lemon Regular',
              left: 85,
              top: -20,
              color: '#000'
            },
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >

          <Drawer.Screen name="TabHome" component={Home2} />
          {/* <Drawer.Screen name="Home3" component={Home3} /> */}
        </Drawer.Navigator>
        :
        navigation.navigate('Login')

    }
    </>




  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    // position: 'absolute',
    color: 'white',
    // top: 10,
    // left: 10,
    width: 60,
    height: 60,
    borderRadius: 20,
    fontSize: 60,
    backgroundColor: '#E7883E',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    borderColor: 'white',
    borderWidth: 3,
    textShadowColor: 'black', // Màu viền chữ
    textShadowOffset: { width: 1, height: 1 }, // Độ lệch của viền chữ
    textShadowRadius: 3, // Bán kính mờ của viền chữ
    // position: 'absolute',
    left:Dimensions.get('window').width*0.05,
  },
  button: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height *0.08,
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
    color: 'green', // Màu chữ
    opacity:1,
    // textShadowColor: '#F15C56', // Màu viền chữ
    // textShadowOffset: { width: 5, height: 0 }, // Độ lệch của viền chữ
    // textShadowRadius: 1, // Bán kính mờ của viền chữ
    paddingBottom: 10,

    fontFamily: 'Lemon Regular',
    textAlign: 'center',
    bottom: -5,
    left: -4,
  },
});

