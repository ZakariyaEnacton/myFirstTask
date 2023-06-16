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
    const loggedUser = await AsyncStorage.getItem('user_token');
    const signUser = await AsyncStorage.getItem('signUp_token');
    const onBoard = await AsyncStorage.getItem('onboard_token');
    console.log(onBoard);

    if (loggedUser == 'true' || signUser == 'true') {
      navigation.navigate('Home');
    } else if (onBoard == 'true') {
      navigation.navigate('Welcome');
    } else {
      navigation.navigate('OnBoarding');
    }
  };

  return (
    <LinearGradient style={splashStyle.container} colors={Colors.splashColor}>
      <StatusBar hidden={true} />
      <Image style={{height: 100, width: 100}} source={AppImages.appLogo} />
    </LinearGradient>
  );
};

export default Splash;
