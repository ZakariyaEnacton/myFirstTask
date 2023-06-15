import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import splashStyle from '../../Screens/Splash/style';
import {Colors} from '../../Assets/Theme/colors';
import {AppImages} from '../../Assets/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    const loggedInUser = AsyncStorage.getItem('user_token');
    const user = loggedInUser;
    if (!user) {
      setTimeout(() => {
        navigation.navigate('OnBoarding');
      }, 2000);
    } else {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 2000);
    }
  });

  return (
    <LinearGradient style={splashStyle.container} colors={Colors.splashColor}>
      <StatusBar hidden={true} barStyle="light-content" />
      <Image style={{height: 100, width: 100}} source={AppImages.appLogo} />
    </LinearGradient>
  );
};

export default Splash;
