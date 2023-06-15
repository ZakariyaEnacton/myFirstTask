import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import splashStyle from '../../Screens/Splash/style';
import {Colors} from '../../Assets/Theme/colors';
import {AppImages} from '../../Assets/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    checkUserToken();
  });

  const checkUserToken = async () => {
    const signUpUser = await AsyncStorage.getItem('user');
    const signUpToken = JSON.parse(signUpUser);

    const signUser = signUpToken.filter(item => item.token == 'true');
    console.log(signUser);

    const loggedUser = await AsyncStorage.getItem('user_token');

    if (loggedUser == 'true' || signUser == 'true') {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 2000);
    } else {
      setTimeout(() => {
        navigation.navigate('OnBoarding');
      }, 2000);
    }
  };

  return (
    <LinearGradient style={splashStyle.container} colors={Colors.splashColor}>
      <StatusBar hidden={true} barStyle="light-content" />
      <Image style={{height: 100, width: 100}} source={AppImages.appLogo} />
    </LinearGradient>
  );
};

export default Splash;
