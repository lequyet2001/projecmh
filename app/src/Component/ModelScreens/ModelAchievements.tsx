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
    const [isComponentVisible, setComponentVisible] = useState(true);
    const toggleComponentVisibility = () => {
        setComponentVisible(!isComponentVisible);
    };
    const handleObstacleDelete = (obstacleId: any) => {
        setRadioButtonsData((prev: any) => prev.filter((obstacle: any) => obstacle.task_id !== obstacleId));
    };
    const { visible, onRequestClose, onPress } = props;
    const { data } = useSelector((state: any) => state.auth);
    console.log(data?.user_task)
    const task = data?.user_task;
    const [radioButtonsData, setRadioButtonsData] = useState(task);
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
                            width: 220,
                            // right: 70,
                            top: -30,
                            position: 'absolute',

                        }}
                    >
                        <Text style={{
                            fontSize: 20,
                            color: 'white',
                            textAlign: 'center',
                            fontFamily: 'Lemon Regular',
                            textShadowColor: '#F15C56',
                            textShadowOffset: { width: 2, height: 2 },
                            textShadowRadius: 4,
                            height: 50,

                        }}>Achievements</Text>
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
                        {
                            radioButtonsData.map((item: any, index: number) => {

                                return (<>

                                    <TouchableOpacity key={item?.task_name} onPress={toggleComponentVisibility}>
                                        <View style={{
                                            width: 300,
                                            height: 50,
                                            borderRadius: 10,

                                            backgroundColor: '#ff9f5f',
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            paddingLeft: 10,
                                            gap: 20,
                                        }}>
                                            {
                                                item?.is_completed ?
                                                <Image source={require('../../../assets/Stars.png')} style={{ width: 40, height: 40 }} />:
                                                <Image source={require('../../../assets/Stars.png')} style={{ width: 40, height: 40, opacity:0.2 }} />
                                            }
                                            <Text style={{
                                                fontFamily: 'Cantarell',
                                                fontSize: 20,
                                                color: item?.is_completed ? 'black' : 'white',
                                                overflow: 'hidden',
                                            }}>
                                                {item?.task_name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    {isComponentVisible &&
                                        <>
                                            <Text style={{ fontSize: 20, fontFamily:'Cantarell Bold',fontWeight:'bold', color: 'white' }}>
                                                {item?.description}
                                            </Text>
                                                <TouchableOpacity onPress={() => handleObstacleDelete(item?.task_id)}>
                                                    <View style={{

                                                    }}>
                                                        {
                                                            item?.is_completed?<Image source={require('../../../assets/Close.png')} style={{ width: 20, height: 20 }} />
                                                            :null
                                                        }
                                                    </View>
                                                </TouchableOpacity>
                                        </>
                                    }
                                </>)
                            })
                        }

                    </View>
                </LinearGradient>
            </View>

        </Modal >


    </>)
}
export default DrawerModelSetting;