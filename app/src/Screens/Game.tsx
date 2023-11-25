import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Button from '../Component/Button';

const CelesteGame = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState([
    { id: 1, x: 150, y: 100, width: 50, height: 50 },
    { id: 2, x: 250, y: 150, width: 50, height: 50 },
  ]);

  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      // Simulate a jump by updating player's y position
      setTimeout(() => {
        // setPlayerPosition((prev) => ({ ...prev, y: prev.y + 50 }));
        // setTimeout(() => {
        //   setPlayerPosition((prev) => ({ ...prev, y: prev.y - 50 }));
        //   setIsJumping(false);
        // }, 200);
      }, 200);
    }
  };

  const handleMoveRight = () => {
    setPlayerPosition((prev) => ({ ...prev, x: prev.x + 10 }));
  };

  const handleMoveLeft = () => {
    setPlayerPosition((prev) => ({ ...prev, x: prev.x - 10 }));
  };
  const handleMoveTop=()=>{
    setPlayerPosition((prev)=>({...prev,y:prev.y+10}));
  }
  const handleMoveBot=()=>{
    setPlayerPosition((prev)=>({...prev,y:prev.y-10}));
  }
  const handleObstacleDelete = (obstacleId:any) => {
    setObstacles((prev) => prev.filter((obstacle) => obstacle.id !== obstacleId));
  };

  const checkCollision = () => {
    obstacles.forEach((obstacle) => {
      if (
        playerPosition.x < obstacle.x + obstacle.width &&
        playerPosition.x + 50 > obstacle.x &&
        playerPosition.y < obstacle.y + obstacle.height &&
        playerPosition.y + 50 > obstacle.y
      ) {
        // Collision detected with obstacle
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

  useEffect(() => {
    checkCollision();
  }, [playerPosition]);

  return (
    <View style={styles.container} >
      <View style={styles.buttonsContainer}>
        <Button styleButton={styles.button} sytleText={styles.buttonText} title="Bot" onPress={handleMoveBot} />
        <Button styleButton={styles.button} sytleText={styles.buttonText} title="Left" onPress={handleMoveLeft} />
        <Button styleButton={styles.button} sytleText={styles.buttonText} title="Right" onPress={handleMoveRight} />
        <Button styleButton={styles.button} sytleText={styles.buttonText} title="Top" onPress={handleMoveTop} />
      </View>
      {obstacles.map((obstacle) => (
        <View
          key={obstacle.id}
          style={[styles.obstacle, { left: obstacle.x, bottom: obstacle.y, width: obstacle.width, height: obstacle.height }]}
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
    backgroundColor: '#87CEEB', // Sky Blue
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
    position: 'absolute',
    bottom: 20, // Adjust as needed
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CelesteGame;
