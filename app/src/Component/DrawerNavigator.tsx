
import { Dimensions, ScrollView, Text, View, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CustomAlert from './CustomAlert';
import LableInput from './LableInput';
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import { DrawerModel } from './ModelScreens/ModelInformation';

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
    const [isModelVisible, setModelVisible] = useState({
        visible: false,
        editVisible: false

    });

    const [data, setData] = useState<users>();
    const [msg, setMsg] = useState<string>('');
    const [bt, setbt] = useState<array[]>([]);
    const DrawerGroup = [
        {
            lable: 'Favorite',
            // onPress: () => setModelVisible(true),
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
            // onPress: () => setModelVisible(true),
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
            onPress: () => setModelVisible(true),
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
            // onPress: () => setModelVisible(true),
            pressColor: '#fff1',
            labelStyle: styles.labelStyle,
            style: styles.style,
            icon: () => {
                return (<>
                    <MaterialIcons name="settings" size={30} color="black" style={{ left: 15, color: 'white' }} />
                </>)
            }
        }
    ]


    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ ':hover': { backgroundColor: 'back' } }}>
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
                editOnPress={() => setModelVisible({visible:false,editVisible:true})}
                editVisible={isModelVisible.editVisible}
                editOnRequestClose={() => setModelVisible((prev) => ({ ...prev, editVisible: false }))}

                onPress={() => setModelVisible((prev) => ({ ...prev, visible: false }))}
                visible={isModelVisible.visible}
                onRequestClose={() => setModelVisible((prev) => ({ ...prev, visible: false }))} 
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