import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LableInput from '../LableInput';
import { useMemo, useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
import CheckBox from '../CheckBox'
import Button from "../Button";
import { MaterialIcons } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";
import CustomSlider from "../CustomSlider";
import Content from "../Content";

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

                <LinearGradient
                    colors={['#59FFF5', '#D1EC65', '#F98282']}
                    style={{
                        backgroundColor: '#44EBE1',
                        borderRadius: 40,
                        borderColor: 'white',
                        borderWidth: 5,
                        padding: 20,
                        alignItems: 'center',
                        height: 600,
                        width: 350,
                    }}>
                    <LinearGradient
                        // start={{ x: 1, y: 0 }}
                        // end={{ x: 1, y: 1 }}
                        colors={['#FE7683', '#FD3C4F']}
                        style={{
                            backgroundColor: '#44EBE1',
                            borderRadius: 20,
                            borderColor: 'white',
                            borderWidth: 5,
                            padding: 20,
                            alignItems: 'center',
                            height: 80,
                            width: 200,
                            // right: 70,
                            top: -30,
                            position: 'absolute',
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
                        }}>Favorite</Text>
                    </LinearGradient>
                    <View style={{ top: 0, left: 0 }}>
                        <TouchableOpacity onPress={onPress}>
                            <Image source={require('../../../assets/Close.png')} style={{ width: 30, height: 30, position: 'absolute', left: 120, top: -10 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        // position: 'absolute',
                        zIndex: 999,
                        width: 330,
                        height: 450,
                        borderColor: 'white',
                        borderWidth: 5,
                        borderRadius: 20,
                        bottom: -80,
                        backgroundColor: '#1F4C56',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        paddingTop: 10,
                        alignItems: 'center',
                        gap: 10,
                    }}>
                        <TouchableOpacity>
                            <View style={{
                                width: 300,
                                height: 50,
                                borderRadius: 10,
                                backgroundColor: '#Fff',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingLeft: 10,
                                gap: 20,
                            }}>

                                <Image source={require('../../../assets/Love.png')} style={{ width: 40, height: 40 }} />
                                <Text style={{
                                    fontFamily: 'Cantarell',
                                    fontSize: 20,
                                    overflow: 'hidden',
                                }}>

                                </Text>        
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{
                                width: 300,
                                height: 50,
                                borderRadius: 10,
                                backgroundColor: '#Fff',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingLeft: 10,
                                gap: 20,
                            }}>

                                <Image source={require('../../../assets/Love.png')} style={{ width: 40, height: 40 }} />
                                <Text style={{
                                    fontFamily: 'Cantarell',
                                    fontSize: 20,
                                    overflow: 'hidden',
                                }}>

                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>

        </Modal >


    </>)
}
export default DrawerModelSetting;