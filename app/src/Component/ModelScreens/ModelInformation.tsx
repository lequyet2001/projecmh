import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LableInput from '../LableInput';
import { useMemo, useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';
import CheckBox from '../CheckBox'
import Button from "../Button";
import { MaterialIcons } from "@expo/vector-icons";
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
const edit = require('../../../assets/Edit.png');

export const DrawerModel: React.FC<visibleProp> = (props) => {
    const {data}=useSelector((state:any)=>state.auth);
    const { visible, onRequestClose, onPress } = props;
    // console.log(data?.user[0])
    const user=data?.user[0];
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
                    height: Dimensions.get('window').height*0.8,
                    width: Dimensions.get('window').width*0.9,
                    // position:'absolute'
                }}>
                    <View style={{ display: 'flex', flexDirection: 'row', left: 0 }}>
                        <Image source={{uri:user?.avatar}}
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
                                borderColor: '#FAED92'
                            }}>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Lemon Regular', left: -25 }}>{user?.nickname}</Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{                    
                            alignSelf: 'flex-end',
                            right: 10,
                            top: 30,                 
                            borderRadius: 100,                   
                            position: 'absolute',
                        }}>
                        <TouchableOpacity onPress={onPress}>
                            <Image source={require('../../../assets/Close.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        // alignSeft: 'flex-end',
                        alignSelf: 'flex-end',
                        left:60,
                        top: 70,
                        zIndex: 999,
                        // backgroundColor: 'red',
                        borderRadius: 100,
                        position: 'absolute',
                        // width:'100%'
                    }}>
                        <TouchableOpacity onPress={props.editAvata} >
                            <Image source={require('../../../assets/Restart.png')} style={{ width: 40, height: 40 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ 
                        alignSelf: 'flex-end', 
                        width: 'auto' ,
                        position:'absolute',
                        top:60,
                        right:10
                        }}>
                        <TouchableOpacity onPress={props.editInfo} >
                            <Image source={require('../../../assets/Edit.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        height: Dimensions.get('window').height*0.6,
                        justifyContent:'space-evenly',
                        top:-20
                        }} >

                        <LableInput canEdit={false} style={styles.input} placeholder={user.full_name}  Lable="Name"/>
                        <LableInput canEdit={false} style={styles.input} placeholder={user?.date_of_birth} Lable="Date of birth"/>
                        <LableInput canEdit={false} style={styles.input} placeholder={user?.nickname} Lable="Nickname"/>
                        <LableInput canEdit={false} style={[styles.input]} placeholder={user?.avatar} Lable="Link avatar"/>
                        <LableInput canEdit={false} style={styles.input} placeholder={user?.email} Lable="Email"/>
                        <LableInput canEdit={false} style={styles.input} placeholder={user?.phone_number}Lable="Phone number" />
                    </View>
                </View>
            </View>
        </Modal>


    </>)
}
export const DrawerModelEditAvatar = ({ visible, onRequestClose, onPress }: any) => {
    const [avata, setAvata] = useState(null);

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
            id: 1,
            title: 'MAM',
            src: require('../../../assets/MAM.png')
        },
        {
            id: 2,
            title: 'image1',
            src: require('../../../assets/image1.png')
        },
        {
            id: 3,
            title: 'Search',
            src: require('../../../assets/Search.png')
        },
        {
            id: 4,
            title: 'Rectangle71',
            src: require('../../../assets/Rectangle71.png')
        },
        {
            id: 5,
            title: 'Rectangle82',
            src: require('../../../assets/Rectangle82.png')
        },
        {
            id: 6,
            title: 'Edit    ',
            src: edit,
        }
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
                                icon.map((e, index) => {
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
                                onPress={onPress}
                            />
                        </View>
                    </View>

                </View>

            </View>
        </Modal>
    </>)
}


export const DrawerModelEditInfo: React.FC<visibleProp> = (props) => {
    const [name,setName]=useState<string>('');
    const [date_of_birth,setDateOfBirth]=useState<string>('');
    const [nickname,setNickname]=useState<string>('');
    const [password,setPassword]=useState<string>('');
    const [avatar,setAvatar]=useState<string>('');
    const [email,setEmail]=useState<string>('');
    const [phone_number,setPhonenumber]=useState<string>('');
    const { visible, onRequestClose, onPress } = props;
    console.log({name,date_of_birth,nickname,password,avatar,email,phone_number})
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
                    height: Dimensions.get('window').height*0.8,
                    width: Dimensions.get('window').width*0.9,
                    // position:'absolute'
                }}>


                    <View style={{
                        height: Dimensions.get('window').height*0.7,
                        justifyContent:'space-evenly',
                        top:Dimensions.get('window').height*-0.02
                        }} >
                        <LableInput style={styles.input} Lable="Name"  placeholder={name}  onChangeText={(text:React.SetStateAction<string>)=>setName(text)}/>
                        <LableInput style={styles.input} Lable="Date of birth" placeholder={date_of_birth}  onChangeText={(text:React.SetStateAction<string>)=>setDateOfBirth(text)}/>
                        <LableInput style={styles.input} Lable="Nickname" placeholder={nickname} onChangeText={(text:React.SetStateAction<string>)=>setNickname(text)} />
                        <LableInput style={styles.input} Lable="Password" placeholder={password} onChangeText={(text:React.SetStateAction<string>)=>setPassword(text)} />
                        <LableInput style={styles.input} Lable="Link avatar"  placeholder={avatar} onChangeText={(text:React.SetStateAction<string>)=>setAvatar(text)} />
                        <LableInput style={styles.input} Lable="Email" placeholder={email} onChangeText={(text:React.SetStateAction<string>)=>setEmail(text)} />
                        <LableInput style={styles.input} Lable="Phone Number" placeholder={phone_number} onChangeText={(text:React.SetStateAction<string>)=>setPhonenumber(text)} />
                    </View>
                    <View style={{
                        // backgroundColor: 'white',
                        // borderColor: 'black',
                        // borderWidth: 3,
                        // borderRadius: 20,
                        width: 320,
                        height: 'auto',
                        // gap: 20,
                        top: -10
                    }}>
                        <View style={{ width: 320, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

                            <Button title='Save'
                                styleButton={[styles.button, { backgroundColor: '#1B92FF', }]}
                                sytleText={[styles.text]}
                            />
                            <Button title='Cancel'
                                styleButton={[styles.button, { backgroundColor: '#B92323', }]}
                                sytleText={[styles.text]}
                                onPress={onPress}
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
        // top: 25,
        // left: 20,
        // fontSize: 20,
        // fontFamily: 'Cantarell',
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