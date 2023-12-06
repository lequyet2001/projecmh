import React, { useState } from 'react'
import { Dimensions, Image, Text, View, TouchableOpacity } from 'react-native'
import FormContainer from '../../Component/FormContainer'
import Content from '../../Component/Content'
import { StyleSheet } from 'react-native'
import Button from '../../Component/Button'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function Vocabulary({navigation}:any) {
  const [isComponentVisible, setComponentVisible] = useState(true);

  const toggleComponentVisibility = () => {
    setComponentVisible(!isComponentVisible);
  };


  
const buttonGroup=()=>{
  return ( <View style={{
    display: 'flex',
    justifyContent: 'center',
    height: 70,
    flexDirection: 'row',
    gap: 50,
    top: 10
  }}>
    <Button
    onPress={()=>navigation.navigate('Home')}
      icon={() => {
        return (<>
          <View style={{
            borderColor: 'white',
            borderWidth: 5,
            borderRadius: 12.5,
            backgroundColor: '#1B92FF',
            width: 50,
            height: 50,

            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('../../../assets/Home.png')} style={{ width: 30, height: 30 }} />
          </View>
        </>)
      }}
    />
    <Button
    onPress={()=>navigation.navigate('Game')}
      title='Play Game'
      styleButton={styles.button}
      sytleText={styles.text}
    />
    <Button
      icon={() => {
        return (<>
          <View style={{
            borderColor: 'white',
            borderWidth: 5,
            borderRadius: 12.5,
            backgroundColor: '#1B92FF',
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('../../../assets/Home.png')} style={{ width: 30, height: 30 }} />
          </View>
        </>)
      }}
    />
  </View>)
}

  return (

    <Content
    width={200}
    DescBackgroundColor='#FA92F6' 
    backgroundColor='#F7E5D7'
    contetnBackGroundColor='#80AA9B'
    desc='Vocabulary' 
    children2={buttonGroup} >
      <View>
        <TouchableOpacity onPress={toggleComponentVisibility}>
          <View
            style={{
              backgroundColor: '#E4E2E2',
              width:370,
              height: 60,
              marginTop: 7,
              marginLeft: 5,
              marginRight: 5,
              borderRadius: 5,
              justifyContent: 'center',
            }}>

            <Text
              style={{
                fontFamily: 'Lemon Regular',
                fontSize: 20,
                color: 'black',

              }}
            >Unit 1
              <Text style={{

              }}>
                : School
              </Text>
            </Text>
          </View>
        </TouchableOpacity>
        {isComponentVisible &&
            <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>
              • asds
            </Text>
        }

      </View>
      

    </Content>

  )
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
  },
  button: {
    width: 130,
    height: 50,
    backgroundColor: '#F44',
    elevation: 8,
    borderRadius: 12.5,
    borderColor: 'white',
    borderWidth: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: 'white', // Màu chữ
    textShadowColor: '#F15C56', // Màu viền chữ
    textShadowOffset: { width: 5, height: 0 }, // Độ lệch của viền chữ
    textShadowRadius: 1, // Bán kính mờ của viền chữ
    paddingBottom: 10,
    fontFamily: 'Lemon Regular',
    textAlign: 'center',
    bottom: -5,
    // left: -4,
  },
});
