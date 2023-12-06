
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CustomAlert from './CustomAlert';

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
    const [isAlertVisible, setAlertVisible] = useState(false);

    const [data, setData] = useState<users>();
    const [msg, setMsg] = useState<string>('');
    const [bt, setbt] = useState<array[]>([]);

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ ':hover':{backgroundColor:'back'}}}>
            <View style={{ height: 200, backgroundColor: '#561735', paddingTop: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', }}>

                    <Image source={require('../../assets/avata.jpg')} style={{ left: 5, width: 80, height: 80, borderRadius: 40, marginBottom: 10, zIndex: 999, borderColor: '#fff', borderWidth: 5 }} />
                    <View style={{ top: 15, backgroundColor: '#ccc', height: 50, justifyContent: 'center', alignItems: 'flex-end', borderRadius: 60, width: 300, left: -100, borderWidth: 4, borderColor: '#FAED92' }}>
                        <View style={{ width: 150, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Lemon Regular', left: -25 }}>Le Thuy</Text>
                        </View>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: 300, paddingLeft: 10, paddingTop: 20, justifyContent: 'space-around' }}>
                    <Text style={{ color: '#5997F1', fontFamily: 'Lemon Regular', fontSize: 10 }}>Score:
                        <Text style={{ color: 'blue' }}>
                            12as345
                        </Text>
                    </Text>
                    <Text style={{ color: '#7FB73D', fontFamily: 'Lemon Regular', fontSize: 10 }}>Level:
                        <Text style={{ color: 'blue' }}>
                            12as345
                        </Text>
                    </Text>
                    <Text style={{ color: 'green', fontFamily: 'Lemon Regular', fontSize: 10 }}>Coins:
                        <Text style={{ color: 'blue' }}>
                            12as345
                        </Text>
                    </Text>
                </View>
            </View>
            <DrawerItemList {...props} />


            
            <DrawerItem
                label="Favorite"
                onPress={() => setAlertVisible(true)}
                
                pressColor='#fff1'
                labelStyle={{
                    fontSize: 20,
                    color: 'white',
                    fontFamily: 'Lemon Regular',
                    left: 15,
                }}
                style={{
                    backgroundColor: '#561735',
                    width: '100%',
                    left: -15,
                }}
                icon={() => {
                    return (<>
                        <MaterialIcons name="bookmark" size={30} color="black" style={{ left: 15,color:'white' }} />
                    </>)
                }} />
            <DrawerItem
                label="Achievements"
                onPress={() => setAlertVisible(true)}
                pressColor='#0010'
                labelStyle={{
                    fontSize: 20,
                    color: 'white',
                    fontFamily: 'Lemon Regular',
                    left: 15,
                    // backgroundColor:'#111'
                }}
                style={{
                    backgroundColor: '#561735',
                    width: '100%',
                    left: -15,
                }}
                icon={() => {
                    return (<>
                        <MaterialIcons name="school" size={30} color="black" style={{ left: 15,color:'white' }} />
                    </>)
                }} />
            <DrawerItem
                label="Information"
                onPress={() => setAlertVisible(true)}
                pressColor='#0010'
                labelStyle={{
                    fontSize: 20,
                    color: 'white',
                    fontFamily: 'Lemon Regular',
                    left: 15,
                }}
                style={{
                    backgroundColor: '#561735',
                    width: '100%',
                    left: -15,
                }}
                icon={() => {
                    return (<>
                        <MaterialIcons name="info" size={30} color="black" style={{ left: 15,color:'white' }} />
                    </>)
                }} />
            <DrawerItem
                label="Setting"
                onPress={() => setAlertVisible(true)}
                pressColor='#0010'
                labelStyle={{
                    fontSize: 20,
                    color: 'white',
                    fontFamily: 'Lemon Regular',
                    left: 15,
                }}
                style={{
                    backgroundColor: '#561735',
                    width: '100%',
                    left: -15,
                }}
                icon={() => {
                    return (<>
                        <MaterialIcons name="settings" size={30} color="black" style={{left: 15,color:'white' }} />
                    </>)
                }} />


            <CustomAlert
                visible={isAlertVisible}
                onClose={() => setAlertVisible(false)}
                title="Thông báo"
                msg={msg}
                onConfirm={() => { setAlertVisible(false) }}
                key={Math.random()}
                array={[{
                    text: 'Ok',
                    onPress() {
                      setAlertVisible(false)
                    }
                  }]}/>
        </DrawerContentScrollView>
    );
}