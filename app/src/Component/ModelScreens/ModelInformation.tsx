import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LableInput from '../LableInput';
import { useMemo, useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
import CheckBox from '../CheckBox'
import Button from "../Button";
import { MaterialIcons } from "@expo/vector-icons";

type visibleProp = {
    visible: boolean;
    onRequestClose: () => void;
    onPress: () => void;
    editVisible?: boolean;
    editOnRequestClose?: () => void;
    editOnPress?: () => void;
}


export const DrawerModel: React.FC<visibleProp> = (props) => {

    const { visible, onRequestClose, onPress, editOnPress, editOnRequestClose, editVisible } = props;
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
                    height: 600,
                    width: 350,
                }}>
                    <View style={{ display: 'flex', flexDirection: 'row', left: 0 }}>
                        <Image source={require('../../../assets/avata.jpg')}
                            style={{
                                left: 0,
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                                marginBottom: 10,
                                zIndex: 2,
                                borderColor: '#fff',
                                borderWidth: 5
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
                                borderColor: '#FAED92'
                            }}>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Lemon Regular', left: -25 }}>Le ádasdasdsaThuy</Text>
                            </View>
                        </View>
                    </View>
                    <View

                        style={{
                            // alignItems: 'flex-end',
                            alignSelf: 'flex-end',
                            left: 10,
                            bottom: 65,
                            // backgroundColor: 'red',
                            borderRadius: 100,
                            // width:40,
                            // height:0,
                        }}>
                        <TouchableOpacity onPress={onPress}>
                            <Image source={require('../../../assets/Close.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        // alignItems: 'flex-end',
                        alignSelf: 'flex-end',
                        left: -230,
                        bottom: 70,
                        zIndex: 999,
                        // backgroundColor: 'red',
                        borderRadius: 100,
                        // width:40,
                        // height:0,
                    }}>
                        <TouchableOpacity onPress={editOnPress} >
                            <Image source={require('../../../assets/Restart.png')} style={{ width: 40, height: 40 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'flex-end', width: '100%', bottom: 70 }}>
                        <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'black', fontSize: 20 }}>Edit Infomation
                            <Image source={require('../../../assets/Edit.png')} style={{ width: 30, height: 30 }} />
                        </Text>
                    </View>

                    <View style={{ height: 400, bottom: 80 }} >
                        <LableInput style={styles.input} Lable="Username" />
                        <LableInput style={styles.input} Lable="Username" />
                        <LableInput style={styles.input} Lable="Username" />
                        <LableInput style={styles.input} Lable="Username" />
                        <LableInput style={styles.input} Lable="Username" />
                        <LableInput style={styles.input} Lable="Username" />
                    </View>
                </View>
            </View>
            <DrawerModelEditAvatar
                visible={editVisible}
                onRequestClose={editOnRequestClose}
            />
        </Modal>

    </>)
}
export const DrawerModelEditAvatar = ({ visible, onRequestClose, onPress }: any) => {
    const [avata,setAvata]=useState(null);

    const [checked, setChecked] = useState({
        button1: false,
        button2: false,
    });


    const bt1 = () => {
        setChecked({
            button1: true,
            button2: false
        })
    }
    const bt2 = () => {
        setChecked({
            button1: false,
            button2: true
        })
    }

    const icon = [

        {
            id:1,
            title: 'MAM',
            src: require('../../../assets/MAM.png') },
        {
            id:2,
            title: 'image1',
            src: require('../../../assets/image1.png')    },
        {
            id:3,
            title: 'Search',
            src: require('../../../assets/Search.png')    },
        {
            id:4,
            title: 'Rectangle71',
            src: require('../../../assets/Rectangle71.png')
        },
        {
            title: 'Rectangle82',
            src: require('../../../assets/Rectangle82.png')
        },
    ]
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
                    height: 600,
                    width: 350,
                    gap: 20,

                }}>
                    <CheckBox title='Choose available avatars' checked={checked.button1} onPress={bt1} />
                    <View style={{
                        borderColor: 'black',
                        borderWidth: 3,
                        borderRadius: 20,
                        width: 320,
                        height: 250,
                        display: 'flex',
                        // justifyContent: 'center',
                        // alignItems: 'center',
                        // flexDirection:'row'
                    }}>
                        <ScrollView contentContainerStyle={{
                            display: 'flex',
                            flexDirection: 'row',
                            columnGap: 5,
                            marginTop: 5,
                            marginLeft: 5,
                            flexWrap: 'wrap'
                        }} >
                            {
                                icon.map((e,index) => {
                                    return (<> 
                                        <Button onPress={() => {
                                            setChecked({
                                                button1: true,
                                                button2: false
                                            })
                                            setAvata(e.title)
                                            console.log(avata)

                                        }} 
                                        key={e.title}
                                            icon={() => {
                                                return (<>
                                                    <Image source={e.src} style={{ width: 70, height: 70 }} />
                                                </>)
                                            }}
                                        />

                                    </>)
                                })
                            }

                        </ScrollView>
                    </View>
                    <CheckBox title='Choose picture' checked={checked.button2} onPress={bt2} />
                    <View style={{
                        // backgroundColor: 'white',
                        // borderColor: 'black',
                        // borderWidth: 3,
                        // borderRadius: 20,
                        width: 320,
                        height: 'auto',
                        gap: 20,
                        top: 30
                    }}>
                        <View style={{ width: 320, alignItems: 'center' }}>

                            <Button title='Upload File'
                                styleButton={[styles.button, { backgroundColor: '#0DFF17', }]}
                                sytleText={[styles.text]}
                            />
                        </View>
                        <View style={{ width: 320, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

                            <Button title='Save'
                                styleButton={[styles.button, { backgroundColor: '#1B92FF', }]}
                                sytleText={[styles.text]}
                            />
                            <Button title='Cancel'
                                styleButton={[styles.button, { backgroundColor: '#B92323', }]}
                                sytleText={[styles.text]}
                            />
                        </View>
                    </View>

                </View>

            </View>
        </Modal>
    </>)
}




const styles = StyleSheet.create({
    input: {
        top: 35,
        left: 20,
        fontSize: 20,
        fontFamily: 'Cantarell',
    },
    labelStyle: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Lemon Regular',
        left: 15,
    },
    style: {
        backgroundColor: '#561735',
        width: '100%',
        left: -15,
    },
    button: {

        height: 50,
        width: 150,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontFamily: 'Lemon Regular',
        color: 'black'
    }
})