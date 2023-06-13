import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Assets/Theme/colors';
import {AppImages} from '../../Assets/Images';
import style from './style';
import en from '../../translations/en.json';
import ButtonPrimary from '../../Component/Core/Button';

const Welcome = ({navigation}) => {
  return (
    <LinearGradient style={style.container} colors={Colors.splashColor}>
      <StatusBar hidden={true} />
      <View style={style.viewWrapper}>
        <View>
          <Image source={AppImages.appLogo} style={style.image} />
        </View>
        <View style={style.appTxtWrapper}>
          <Text style={style.appTxt}>{en.app_name}</Text>
        </View>
        <View style={[style.buttonWrapper, {top: 10}]}>
          <ButtonPrimary
            name={en.login}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View style={[style.buttonWrapper, {top: 30}]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={[style.button, style.btnSignUp]}>
            <Text
              style={[style.btnText, {color: Colors.white, fontWeight: 400}]}>
              {en.sign_up}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.txtWrapper}>
          <TouchableOpacity>
            <Text style={style.text}>{en.guest}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
