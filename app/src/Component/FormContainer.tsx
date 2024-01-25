import React from 'react';
import { Dimensions, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }: FormContainerProps) => {
  return (
    <ImageBackground
      source={require('../../assets/image1.png')}
      style={{
        flex: 1,
        // resizeMode: 'cover',
      }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
      >
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    // paddingHorizontal: 20,
  },
});

export default FormContainer;
