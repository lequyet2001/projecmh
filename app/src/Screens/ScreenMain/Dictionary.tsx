import React, { useState } from 'react'
import { Dimensions, Image, Text, View, TouchableOpacity, TextInput } from 'react-native'
import FormContainer from '../../Component/FormContainer'
import Content from '../../Component/Content'
import { StyleSheet } from 'react-native'
import Button from '../../Component/Button'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function Vocabulary({navigation}:any) {
  const [isComponentVisible, setComponentVisible] = useState(false);

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
      title='Back Home'
      styleButton={[styles.button,{backgroundColor:'#F44'}]}
      sytleText={styles.text}
    />
   <Button
    onPress={()=>navigation.navigate('Game')}
      title='History'
      styleButton={[styles.button,{backgroundColor:'#157F32'}]}
      sytleText={styles.text}
    />
  
  </View>)
}

  return (

    <Content
    width={180}
    DescBackgroundColor='#C0FA92' 
    backgroundColor='#F7E5D7'
    contetnBackGroundColor='#CBCC93'
    desc='Dicionary' 
    children2={buttonGroup} >
      <View>
     
          <View
            style={{
              backgroundColor: '#E4E2E2',
              width:370,
              height: 60,
              marginTop: 7,
              marginLeft: 5,
              marginRight: 5,
              borderRadius: 5,
              justifyContent: 'flex-start',
              display: 'flex',
              flexDirection:'row',
              alignItems:'center'
            }}>
            <Image source={require('../../../assets/Search.png')} style={{ width: 60, height: 60,left:-10,backgroundColor:'#E4E840', marginLeft: 10,borderRadius:6 }} />
            <TextInput
            // aria-label="Email"
              style={{
                fontFamily: 'Lemon Regular',
                fontSize: 20,
                color: 'black',
                // backgroundColor:'pink',
                width:310,
                borderRadius:5
              }}
            />
          </View>
        {isComponentVisible &&
            <>
            <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>
              • asds
            </Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>
                ex: asd
                </Text>
            </>
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
    // backgroundColor: '#F44',
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

    paddingBottom: 10,
    fontFamily: 'Lemon Regular',
    textAlign: 'center',
    bottom: -5,
    // left: -4,
  },
});
