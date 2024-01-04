import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from './Button';

interface CustomAlertProps {
    visible: boolean;
    onClose: () => void;
    title: string;
    msg: string;
    onConfirm: () => void;
    // navigation: any;
    array:array[]
    // backgroundcolor:string;
    // color:string;
    // key:number;
}
interface array{
    text:string;
    onPress:()=> void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ visible, onClose, title, msg, onConfirm ,array}) => {
   
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                onClose();
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <Text style={styles.modalText}>{msg}</Text>
                    <View style={styles.buttonContainer}>
                        {
                            array.map((e,index) => {
                                return <>
                                   <Button title={e.text} key={e.text} onPress={e.onPress} styleButton={styles.button} sytleText={styles.buttonText}/>
                                </>
                            })

                        }

                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        // right:180,
        color:'red',
    },
    modalText: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        // right:175
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        // backgroundColor: '#007bff',
    },
    buttonText: {
        color: '#00CC00',
        fontSize: 20,
    },
});

export default CustomAlert;
