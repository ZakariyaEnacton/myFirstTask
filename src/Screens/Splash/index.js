import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import splashStyle from '../../Screens/Splash/style';
import {Colors} from '../../Assets/Theme/colors';
import {AppImages} from '../../Assets/Images';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 2000);
  });
  // console.log([Colors.purple, Colors.blue]);
  return (
    <LinearGradient style={splashStyle.container} colors={Colors.splashColor}>
      <StatusBar hidden={true} barStyle="light-content" />
      <Image style={{height: 100, width: 100}} source={AppImages.appLogo} />
    </LinearGradient>
  );
};

export default Splash;
