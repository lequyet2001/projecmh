import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LableInput from '../LableInput';
import { useMemo, useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
import CheckBox from '../CheckBox'
import Button from "../Button";
import { MaterialIcons } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";
import CustomSlider from "../CustomSlider";
import { useSelector } from "react-redux";

type visibleProp = {
    visible: boolean;
    onRequestClose: () => void;
    onPress: () => void;
    editVisible?: boolean;
    editOnRequestClose?: () => void;
    editOnPress?: () => void;
    editAvata?: () => void;
    editInfo?: () => void;
}

const DrawerModelSetting: React.FC<visibleProp> = (props) => {
    const {data}=useSelector((state:any)=>state.auth);
    console.log(data?.user[0]?.sound)
    const { visible, onRequestClose, onPress } = props;


    return (<>
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
        >

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}>

                <View style={{
                    backgroundColor: '#44EBE1',
                    borderRadius: 40,
                    borderColor: 'white',
                    borderWidth: 5,
                    padding: 20,
                    alignItems: 'center',
                    height: 200,
                    width: 350,
                }}>
                    <LinearGradient
                        // start={{ x: 1, y: 0 }}
                        // end={{ x: 1, y: 1 }}
                        colors={['#1F81EE', '#33238B']}
                        style={{
                            backgroundColor: '#44EBE1',
                            borderRadius: 20,
                            borderColor: 'white',
                            borderWidth: 5,
                            padding: 20,
                            alignItems: 'center',
                            height: 80,
                            width: 200,
                            right: 70,
                            top: -50,
                        }}
                    >
                        <Text style={{
                            fontSize: 25,
                            color: 'white',
                            textAlign: 'center',
                            fontFamily: 'Lemon Regular',
                            textShadowColor: '#F15C56',
                            textShadowOffset: { width: 2, height: 2 },
                            textShadowRadius: 4,
                            height: 50,
                        }}>Settings</Text>
                    </LinearGradient>
                    <View style={{ top: -30, left: -40 }}>
                        <TouchableOpacity onPress={onPress}>
                            <Image source={require('../../../assets/Close.png')} style={{width:30,height:30, position:'absolute', left:160,top:-60}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{top:0,gap:10}}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width:300
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 20,
                                fontFamily: 'Lemon Regular',
                            }}>Music</Text>
                            <CustomSlider value={data.user[0]?.music} />
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width:300
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 20,
                                fontFamily: 'Lemon Regular',
                            }}>Sound</Text>
                            <CustomSlider value={data.user[0]?.sound}/>
                        </View>
                    </View>
                </View>
            </View>

        </Modal >


    </>)
}
export default DrawerModelSetting;