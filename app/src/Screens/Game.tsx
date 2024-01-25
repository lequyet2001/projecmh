import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Button from '../Component/Button';
import { Image } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { BackgroundImage } from '@rneui/themed/dist/config';
import axios from 'axios';
import { ip } from '../Component/ip';
import { dataLevel } from '../fetchAPI/Login';
// import {ref} from '@react-navigation/native';

const CelesteGame = ({navigation}) => {
  const {level,data}=useSelector((state:any)=>state.auth);
  const refView = useRef(null);
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 300 });
  const [levelData,setLevelData]=useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const x = async():Promise<any>=>{
    const data=await dataLevel(level);
    setLevelData(data);
    // return data.data;
  }
  // const a=x();
  console.log({levelData})

  

  // const ref=useRef(null);
  const [obstacles, setObstacles] = useState([
    { id: 1,...random(0.5,0.3), width: 50, height: 50,is_block:true },
    { id: 2,...random(0.6,0.4), width: 50, height: 50,is_block:false },
    { id: 3,...random(0.4,0.75), width: 50, height: 50,is_block:true },
  ]);
  
  function random(a:any,b:any) {
    const x = a * (Dimensions.get('window').width);
    const y = b * (Dimensions.get('window').height);
    return { x, y };
  }
  function tostring(a: number) {

    return a.toString();
  }
  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);


    }
  };

  const handleMoveRight = () => {
    setPlayerPosition((prev) => ({ ...prev, x: prev.x + 10 }));
  };

  const handleMoveLeft = () => {
    setPlayerPosition((prev) => ({ ...prev, x: prev.x - 10 }));
  };
  const handleMoveTop = () => {
    setPlayerPosition((prev) => ({ ...prev, y: prev.y + 10 }));
  }
  const handleMoveBot = () => {
    setPlayerPosition((prev) => ({ ...prev, y: prev.y - 10 }));
  }
  const handleObstacleDelete = (obstacleId: any) => {
    setObstacles((prev) => prev.filter((obstacle) => obstacle.id !== obstacleId));
  };


  const checkCollision =() => {
    
    obstacles.forEach((obstacle) => {
      if (
        playerPosition.x < obstacle.x + obstacle.width &&
        playerPosition.x + 50 > obstacle.x &&
        playerPosition.y < obstacle.y + obstacle.height &&
        playerPosition.y + 50 > obstacle.y 
      
      ) {
        // Collision detected with obstacle
        if(obstacle.is_block){
          Alert.alert(
            'Collision Alert',
            `tru 10s`,
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
              {
                text: 'Delete',
                onPress: () => handleObstacleDelete(obstacle.id),
                style: 'destructive',
              },
            ],
            { cancelable: false }
          );
        }
        Alert.alert(
          'Collision Alert',
          `Collision with obstacle ${obstacle.id}`,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
            {
              text: 'Delete',
              onPress: () => handleObstacleDelete(obstacle.id),
              style: 'destructive',
            },
          ],
          { cancelable: false }
        );
      }
    });
  };

  useEffect( () => {
    x();
  
  // console.log({x})
    // console.log({level})
  // const app=data?.gameProgress?.all_level?.[level-1];
  // console.log({app})
    checkCollision();
    
  }, [playerPosition,refView]);
  const width=Dimensions.get('window').width;
  const height=Dimensions.get('window').height;
  // console.log({width,height})
  return (
    <View style={styles.container} >
      <View style={{
        width: '100%',
        height: height>708?height*0.65:height*0.55,
        backgroundColor:'yellow',
        // top:-200,
        borderColor: 'yellow',
        borderWidth: 5,
        borderStyle: 'solid',
      }}
      ref={refView}
      >
      </View>
      
      <View style={styles.buttonsContainer} >
        <Button
          styleButton={[{zindex:999,left:-50,top:50}]}
          // sytleText={styles.buttonText}
          onPress={() => navigation.goBack()}
          icon={()=>{
            return (<>
            <View style={{
              borderColor: 'white',
              borderWidth: 5,
              borderRadius: 12.5,
              backgroundColor: '#1B92FF',
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}>

              <Image source={require('../../assets/Close.png')}  style={{ width: 30, height: 30 }}/>
            </View>
            </>)
          }}
          />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Button styleButton={[styles.button, { top: -0, left: 20, borderTopLeftRadius: 50, borderBottomLeftRadius: 50, height: 100 }]} sytleText={styles.buttonText} title="Left" onPress={handleMoveLeft} />
          <Button styleButton={[styles.button, { top: -20, left: 20 }]} sytleText={styles.buttonText} title="Top" onPress={handleMoveTop} />
          <Button styleButton={[styles.button, { left: -40, top: 20 }]} sytleText={styles.buttonText} title="Bot" onPress={handleMoveBot} />
          <Button styleButton={[styles.button, { top: -0, left: -41, borderTopRightRadius: 50, borderBottomRightRadius: 50, height: 100 }]} sytleText={styles.buttonText} title="Right" onPress={handleMoveRight} />
        </View>
      </View>
      {obstacles.map((obstacle) => (
        <View
        
          key={obstacle.id}
          style={[styles.obstacle, { left: obstacle?.x, bottom: obstacle?.y, width: obstacle?.width, height: obstacle?.height,
            backgroundColor: obstacle.is_block?'red':'green',
          }]}
        />
      ))}
      <View style={[styles.player, { left: playerPosition.x, bottom: playerPosition.y }]}>
        <Text style={styles.playerText}>🐶</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: '#87CEEB', // Sky Blue
    alignItems: 'center',


  },
  player: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  obstacle: {
    position: 'absolute',
    backgroundColor: 'red',
  },
  playerText: {
    fontSize: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0, // Adjust as needed
    width: '100%',
    backgroundColor: '#fff',
    height: 150,

  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    // position: 'absolute',
    // borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CelesteGame;
