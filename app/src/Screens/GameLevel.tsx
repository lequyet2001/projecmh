import { Button, Text } from '@rneui/themed'
import React from 'react'
import { Image, ScrollView } from 'react-native'
import { Dimensions, View, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {level} from '../redux/Actions/authActions'
import { useDispatch, useSelector } from 'react-redux'


export default function GameLevel({navigation}:any) {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const dispacth=useDispatch();
    const [levelData,setLevelData]=React.useState(0);
  
    const {data}=useSelector((state:any)=>state.auth);
    console.log(data?.gameProgress?.all_level)
    // const gameLevel=
    const a = data?.gameProgress?.all_level;
    const user=data?.user[0];
    return (
        <View
            style={{
                display: 'flex',
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                backgroundColor: '#F7E5D7',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                
            }}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    // left: width * -0.05,
                    // top:height*-0.1
                }}>
                <Image
                    source={{uri:user?.avatar}}
                    // source={{uri:user?.avatar}}
                    style={{
                        left: 0,
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        marginBottom: 10,
                        zIndex: 2,
                        borderColor: '#fff',
                        borderWidth: 5,
                        // position: 'absolute',
                        
                    }} />
                <View
                    style={{
                        top: 10,
                        backgroundColor: '#E77B7B',
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        borderRadius: 60,
                        width: 250,
                        left: -70,
                        borderWidth: 4,
                        borderColor: '#FAED92',
                        
                    }}>
                    <View style={{ width: 150, alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Lemon Regular', left: width * -0.15 }}>
                            {user?.nickname}
                        </Text>
                        <Text style={{
                            fontFamily: 'Cantarell bold',
                            fontWeight: 'bold',
                            left: width * -0.15
                        }}>
                            Coins:
                            <Text style={{
                                fontFamily: 'Cantarell bold',
                                fontWeight: 'bold',
                            }}>
                                {user?.coins}
                            </Text>
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.goBack()}>

                    <View style={{
                        // backgroundColor: '#E77B7B',
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 60,
                        width: 60,
                        // borderWidth: 4,
                        // borderColor: '#FAED92',
                        bottom: -10,
                    }}>
                        <Image source={require('../../assets/Close.png')} style={{ width: 40, height: 40 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: 'white',
                    borderColor: 'black',
                    borderWidth: 5,
                    borderStyle: 'solid',
                    width: Dimensions.get('window').width * 0.95,
                    height: Dimensions.get('window').height * 0.7,
                    borderRadius: 10,
                    top: 5
                }}
            >
                <ScrollView
                    contentContainerStyle={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        padding: 10,
                        gap:10
                    }}>
                    {
                        a.map((item, index) => {
                            return (
                                <TouchableOpacity 
                                onPress={
                                    (item?.is_play==true)?()=>{
                                        dispacth(level(item?.level))
                                        navigation.navigate('Game')
                                    }:()=>{}
                                    
                                }
                                
                                >

                                    <View
                                        style={{
                                            backgroundColor: item?.is_completed?'yellow':'#E77B7B',
                                            width: 100,
                                            height: 100,
                                            marginTop: 7,
                                            marginLeft: 5,
                                            marginRight: 5,
                                            borderRadius: 100,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontFamily: 'Lemon Regular',
                                                fontSize: 20,
                                                color: 'black',
                                                textAlign: 'center'
                                            }}
                                        >Level {item?.level}
                                        </Text>
                                        {
                                            (item?.is_play==false ) ?<Image source={require('../../assets/th.jpg')} style={{ width: 50, height: 50, alignSelf: 'center',borderRadius:50 }} />:null
                                        }
                                        
                                    </View>
                                </TouchableOpacity>

                            )
                        })
                    }
                </ScrollView>
            </View>
            {/* <View
                style={{
                    // backgroundColor: '#E77B7B',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    // borderRadius: 10,
                    // borderWidth: 4,
                    // borderColor: '#FAED92',
                    height: 60,
                    width: width * 0.9,
                }}
            >
                <TouchableOpacity>
                    <View style={{
                       width: width * 0.3,
                       height: height * 0.07,
                       borderColor: 'black',
                       borderRadius:10,
                       borderWidth: 5,
                       justifyContent:'center',
                       alignItems:'center'
                    }}>
                        <Text>
                            asd
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                       width: width * 0.3,
                       height: height * 0.07,
                       borderColor: 'black',
                       borderRadius:10,
                       borderWidth: 5,
                       justifyContent:'center',
                       alignItems:'center'
                    }}>
                        <Text>
                            asd
                        </Text>
                    </View>
                </TouchableOpacity>
            </View> */}

        </View>
    )
}
