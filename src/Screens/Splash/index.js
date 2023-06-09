import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import splashStyle from '../../Screens/Splash/style';

const Splash = () => {
  return (
    <LinearGradient
      style={splashStyle.container}
      colors={['#c8a1ff', '#8eadff']}>
      <StatusBar backgroundColor="#c8a1ff" barStyle="light-content" />
      <Image
        style={{height: 100, width: 100}}
        source={require('../../Assets/Images/logo.png')}
      />
    </LinearGradient>
  );
};

export default Splash;
