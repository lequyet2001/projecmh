
import { Dimensions, ScrollView, Text, View, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CustomAlert from './CustomAlert';
import LableInput from './LableInput';
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import { DrawerModel, DrawerModelEditAvatar, DrawerModelEditInfo } from './ModelScreens/ModelInformation';
import DrawerModelSetting from './ModelScreens/ModelSetting';
import DrawerMoaelAchievements from './ModelScreens/ModelAchievements';
import DrawerModelFavorite from './ModelScreens/ModelFavorite';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../redux/ActionsType';
import * as auth from '../redux/Actions/authActions';
interface users {
    username: String;
    password: String;
}
interface array {
    text: string;
    onPress: () => void;
}





export default function CustomDrawerContent(props: any) {
    const navigation = useNavigation();
    const [hover, setHover] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [editAvata, setEditAvata] = useState(false);
    const [editInfo,setEditInfor] = useState(false);
    const [editSetting,setEditSetting] = useState(false);
    const [Achievements, setAchievements] = useState(false)
    const [favorite, setFavorite] = useState(false);

    const [msg, setMsg] = useState<string>('');
    const [bt, setbt] = useState<array[]>([]);
    const dispatch = useDispatch();
    const {data}=useSelector((state:any)=>state.auth);
    const DrawerGroup = [
        {
            lable: 'Favorite',
            onPress: () => setFavorite(true),
            pressColor: '#fff1',
            labelStyle: styles.labelStyle,
            style: styles.style,
            icon: () => {
                return (<>
                    <MaterialIcons name="bookmark" size={30} color="black" style={{ left: 15, color: 'white' }} />
                </>)
            }
        },
        {
            lable: 'Achievements',
            onPress: () => setAchievements(true),
            pressColor: '#fff1',
            labelStyle: styles.labelStyle,
            style: styles.style,
            icon: () => {
                return (<>
                    <MaterialIcons name="school" size={30} color="black" style={{ left: 15, color: 'white' }} />
                </>)
            }
        },
        {
            lable: 'Information',
            onPress: () => setDrawer(true),
            pressColor: '#fff1',
            labelStyle: styles.labelStyle,
            style: styles.style,
            icon: () => {
                return (<>
                    <MaterialIcons name="info" size={30} color="black" style={{ left: 15, color: 'white' }} />
                </>)
            }
        },
        {
            lable: 'Setting',
            onPress: () => setEditSetting(true),
            pressColor: '#fff1',
            labelStyle: styles.labelStyle,
            style: styles.style,
            icon: () => {
                return (<>
                    <MaterialIcons name="settings" size={30} color="black" style={{ left: 15, color: 'white' }} />
                </>)
            }
        }, 
        {
            lable: 'Logout',
            onPress: () =>dispatch(auth.logout()),
            pressColor: '#fff1',
            labelStyle: styles.labelStyle,
            style: styles.style,
            icon: () => {
                return (<>
                    <MaterialIcons name="info" size={30} color="black" style={{ left: 15, color: 'white' }} />
                </>)
            }
        },
    ]
    const user=data?.user[0];
    const level=data?.gameProgress?.true_new[0]?.level
    // console.log(level)
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ ':hover': { backgroundColor: 'back' } }}>
            <View style={{ height: 200, backgroundColor: '#561735', paddingTop: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', }}>

                    <Image  source={{uri:user?.avatar}}
                     style={{ left: 5, width: 80, height: 80, borderRadius: 40, marginBottom: 10, zIndex: 999, borderColor: '#fff', borderWidth: 5 }} />
                    <View style={{ top: 15, backgroundColor: '#ccc', height: 50, justifyContent: 'center', alignItems: 'flex-end', borderRadius: 60, width: 300, left: -100, borderWidth: 4, borderColor: '#FAED92' }}>
                        <View style={{ width: 150, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Lemon Regular', left: -25 }}>{user?.nickname}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: 300, paddingLeft: 10, paddingTop: 20, justifyContent: 'space-around' }}>
                    
                    <Text style={{ color: '#7FB73D', fontFamily: 'Lemon Regular', fontSize: 15 }}>Level: 
                        <Text style={{ color: 'blue' }}>
                            {level}
                        </Text>
                    </Text>
                    <Text style={{ color: 'green', fontFamily: 'Lemon Regular', fontSize: 15 }}>Coins: 
                        <Text style={{ color: 'blue' }}>
                            {user?.coins}
                        </Text>
                    </Text>
                </View>
            </View>
            <DrawerItemList {...props} />
            {
                DrawerGroup.map((item, index) => {
                    return (
                        <DrawerItem
                            key={index}
                            label={item.lable}
                            onPress={item.onPress}
                            pressColor={item.pressColor}
                            labelStyle={item.labelStyle}
                            style={item.style}
                            icon={item.icon}
                        />
                    )
                })
            }
            <DrawerModel
                onPress={() => setDrawer(false)}
                visible={drawer}
                onRequestClose={() => setDrawer(false)}
                editAvata={() => setEditAvata(true)}
                editInfo={() => setEditInfor(true)}
            />
            <DrawerModelEditAvatar
                onPress={() => setEditAvata(false)}
                visible={editAvata}
                onRequestClose={() => setEditAvata(false)} />
            <DrawerModelEditInfo
                onPress={() => setEditInfor(false)}
                visible={editInfo}
                onRequestClose={() => setEditInfor(false)} />
            <DrawerModelSetting
                onPress={() => setEditSetting(false)}
                visible={editSetting}
                onRequestClose={() => setEditSetting(false)}
            />
            <DrawerMoaelAchievements
                onPress={() => setAchievements(false)}
                visible={Achievements}
                onRequestClose={() => setAchievements(false)}/>
            <DrawerModelFavorite
                onPress={() => setFavorite(false)}
                visible={favorite}
                onRequestClose={() => setFavorite(false)}
            />
        </DrawerContentScrollView>
    );
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
})