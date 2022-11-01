import {
    Image,
    ImageBackground,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  
  import {Button,ListItem} from '@react-native-material/core';
  
  
  function WelcomeScreen(props) {
    return (
      //use different background
      <ImageBackground
        style={styles.background}
        source={{
          uri: 'https://picsum.photos/800/600',
        }}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              width: 300,
              height: 200,
              uri: 'https://picsum.photos/300/200',
            }}
          />
          <Text style={styles.title}>Eat good, live good 💪</Text>
        </View>
  
        <Button style={styles.loginButton} titleStyle={styles.loginText} title={'Login'}></Button>
        <Button style={styles.registerButton} titleStyle={styles.registerText} title={'Register'}></Button>
  
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    loginButton: {
      width: '100%',
      height: 50,
      backgroundColor: '#fc5c65',
    },
    loginText: {
      alignSelf: 'center',
      fontSize: 20,
      color: "white"
    },
    registerButton: {
      width: '100%',
      height: 50,
      backgroundColor: '#4ecdc4',
      
    },
    registerText: {
      alignSelf: 'center',
      fontSize: 20,
      color: "white"
    },
    logo: {
      width: 100,
      height: 100,
    },
    logoContainer: {
      position: 'absolute',
      top: 70,
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Helvetica Neue',
      lineHeight: 50,
    },
  });
  
  export default WelcomeScreen;