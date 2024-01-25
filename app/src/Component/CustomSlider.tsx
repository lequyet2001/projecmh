import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, Text, PanResponder, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomSlider = (props:any) => {
    
  const [sliderValue, setSliderValue] = useState(props.value);
  const calculateSliderValue = (gestureState:any) => {
    const containerWidth = 200; // Độ rộng của thanh trượt
    const minSliderValue = 0;
    const maxSliderValue = 100;

    // Tính toán giá trị dựa trên sự thay đổi vị trí (dx) và giới hạn giá trị
    let newValue = (sliderValue + gestureState.dx / containerWidth * 100);
    
    // Đảm bảo giá trị nằm trong khoảng min và max
    newValue = Math.max(minSliderValue, Math.min(maxSliderValue, newValue));

    return newValue;
  };
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {},
    onPanResponderMove: (event, gestureState) => {
      // Tính toán giá trị của thanh trượt dựa trên vị trí ngón tay
      const newValue = calculateSliderValue(gestureState);
      setSliderValue(newValue);
    },
    onPanResponderRelease: () => {},
  });

  return (
     <View 
    style={styles.container}>
      
      <View
        // colors={['#065996', '#3EB88C']}
        style={styles.sliderContainer}
        
        {...panResponder.panHandlers}
        >
       <LinearGradient
          colors={['#065996', '#3EB88C', '#42F525']}
          style={[styles.sliderTrack, { width: `${sliderValue}%` }]}
        />
        
            <Image
              source={require('../../assets/soundfull.png')}
              style={[{left:`${sliderValue>10?sliderValue-10:sliderValue}%`},styles.sliderThumb]}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContainer: {
    width: 200,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  sliderTrack: {
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  sliderThumb: {
    position: 'absolute',
    width: 20,
    height: 20,

    // borderRadius: 10,
    // backgroundColor: 'black',
    // borderColor: 'b',
    // borderWidth: 2,
  },
});

export default CustomSlider;
