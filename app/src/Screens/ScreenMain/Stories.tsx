import React, { useState } from 'react';
import { Dimensions, Image, Text, View, TouchableOpacity } from 'react-native';
import FormContainer from '../../Component/FormContainer';
import Content from '../../Component/Content';
import { StyleSheet } from 'react-native';
import Button from '../../Component/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Vocabulary({ navigation }: any) {
  const [isComponentVisible, setComponentVisible] = useState(true);

  const toggleComponentVisibility = () => {
    setComponentVisible(!isComponentVisible);
  };

  const buttonGroup = () => {
    return (
      <View style={styles.buttonGroup}>
        <Button
          onPress={() => navigation.navigate('Home')}
          icon={() => (
            <View style={styles.buttonIcon}>
              <Image source={require('../../../assets/Home.png')} style={styles.iconImage} />
            </View>
          )}
        />
        <Button
          onPress={() => navigation.navigate('Game')}
          title='Play Game'
          styleButton={styles.button}
          styleText={styles.text}
        />
        <Button
          icon={() => (
            <View style={styles.buttonIcon}>
              <Image source={require('../../../assets/Home.png')} style={styles.iconImage} />
            </View>
          )}
        />
      </View>
    );
  };

  return (
    <Content
      width={150}
      DescBackgroundColor='#FAB192'
      backgroundColor='#F7E5D7'
      contetnBackGroundColor='#80AA9B'
      desc='Stories'
      children2={buttonGroup}>
      <View>
        <TouchableOpacity onPress={toggleComponentVisibility}>
          <View style={styles.storyContainer}>
            <Image source={require('../../../assets/MAM.png')} style={styles.storyImage} />
            <Text style={styles.storyText}>The crow and the pitcher</Text>
          </View>
        </TouchableOpacity>
        {isComponentVisible && (
          <View style={styles.hiddenContent}>
            <Text>More details about the story...</Text>
          </View>
        )}
      </View>
    </Content>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    height: 70,
    flexDirection: 'row',
    gap: 50,
    top: 10,
  },
  buttonIcon: {
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 12.5,
    backgroundColor: '#1B92FF',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  button: {
    width: 130,
    height: 50,
    backgroundColor: '#F44',
    elevation: 8,
    borderRadius: 12.5,
    borderColor: 'white',
    borderWidth: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: 'white',
    textShadowColor: '#F15C56',
    textShadowOffset: { width: 5, height: 0 },
    textShadowRadius: 1,
    paddingBottom: 10,
    fontFamily: 'Lemon Regular',
    textAlign: 'center',
    bottom: -5,
  },
  storyContainer: {
    backgroundColor: '#E4E2E2',
    // width: 340,
    height: 100,
    marginTop: 7,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  storyImage: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  storyText: {
    fontFamily: 'Lemon Regular',
    fontSize: 30,
    color: 'black',
    flexWrap: 'wrap',
  },
  hiddenContent: {
    // Styling for the hidden content goes here
  },
});
