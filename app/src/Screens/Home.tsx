import React from 'react'
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native'
import Button from '../Component/Button';
import FormContainer from '../Component/FormContainer';
import Description from '../Component/Description';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomDrawerContent from '../Component/DrawerNavigator';



const Drawer = createDrawerNavigator();



export default function Home({ navigation }: any) {

  const [open, setOpen] = React.useState(false);

  const handleLogin = () => {
    navigation.navigate('Game');
  }
  const handleGoBack = () => {
    navigation.goBack();
  }


  function Home2({ navigation }: { navigation: any }) {
    return (


      <FormContainer>
        <View style={{ height: Dimensions.get('window').height }}>
            <Description >
            Learn Together
            </Description>
          <View style={{
            paddingTop: 20,
            display: 'flex',
            justifyContent: 'space-evenly',
            height: 450,
            alignItems: 'center'
          }}>
            {
              buttonGroup.map((button) => {
                return (

                  <Button
                    key={button.id}
                    title={button.title}
                    onPress={button.onPress}
                    styleButton={button.styleButton}
                    sytleText={button.styleText} />
                )
              })
            }
          </View>

          <MaterialIcons name="menu" size={24} color="black" style={styles.buttonContainer} onPress={() => navigation.openDrawer()} />
          {/* <Button key={"X"} title={`${open ? 'X' : 'O'} `} onPress={()=>navigation.openDrawer()} styleButton={styles.buttonContainer} /> */}
        </View>
      </FormContainer>
    )
  }


  const buttonGroup = [{
    id: 'Vacabulary',
    title: 'Vacabulary',
    onPress: () => { console.log('Vacabulary') },
    styleButton: styles.button,
    styleText: styles.text,

  }, {
    id: 'Grammar',
    title: 'Grammar',
    onPress: () => { console.log('Grammar') },
    styleButton: styles.button,
    styleText: styles.text,
  }, {
    id: 'Dictionary',
    title: 'Dictionary',
    onPress: () => { console.log('Dictionary') },
    styleButton: styles.button,
    styleText: styles.text,
  },

  {
    id: 'Setting',
    title: 'Setting',
    onPress: () => { console.log('Setting') },
    styleButton: styles.button,
    styleText: styles.text,
  },
  {
    id: 'Number',
    title: 'Number',
    onPress: () => { console.log('Number') },
    styleButton: styles.button,
    styleText: styles.text,
  },
  {
    id: 'Stories',
    title: 'Stories',
    onPress: () => { console.log('Stories') },
    styleButton: styles.button,
    styleText: styles.text,

  }]


  return (
    <Drawer.Navigator
      defaultStatus='closed'
      //  initialRouteName="Home"

      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#561735',
          width: 300,
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
      drawerContent={props => <CustomDrawerContent {...props} />}
    >

      <Drawer.Screen name="TabHome" component={Home2} />
      {/* <Drawer.Screen name="Home3" component={Home3} /> */}
    </Drawer.Navigator>


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
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 3,
    textShadowColor: 'black', // Màu viền chữ
    textShadowOffset: { width: 1, height: 1 }, // Độ lệch của viền chữ
    textShadowRadius: 3, // Bán kính mờ của viền chữ
  },
  button: {
    width: 700 / 3,
    height: 180 / 3,
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

