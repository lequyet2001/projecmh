import React, { useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Video from 'react-native-video';

export default function Home({ navigation }: any): JSX.Element {
  const Login = (): void => {
    navigation.navigate("Login");
  }
  const videoError = (error: any): void => {
    console.log(error);
  }

  return (
    <View style={{flex:1}}>

        <Video
          source={require('../acessts/lol3.mp4')}
          style={styles.backgroundVideo}
          onError={videoError}   
          repeat={true}
          resizeMode='cover'
        />
        
      <View style={styles.container} >

      <Button title="Login" onPress={Login} />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingRight: 20,
  },
  backgroundVideo: {
    // flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // zIndex:-1
  },
});
