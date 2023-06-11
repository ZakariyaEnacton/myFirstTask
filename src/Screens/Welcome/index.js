import {
  View,
  Text,
  ScrollView,
  Image,
  ScrollViewBase,
  ScrollViewComponent,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Assets/Theme/colors';
import {AppImages} from '../../Assets/Images';
import style from './style';
import en from '../../translations/en.json';

const Welcome = () => {
  return (
    <LinearGradient style={style.container} colors={Colors.splashColor}>
      <View style={style.viewWrapper}>
        <View>
          <Image source={AppImages.appLogo} style={style.image} />
        </View>
        <View style={style.appTxtWrapper}>
          <Text style={style.appTxt}>PixelPro Digital</Text>
        </View>
        <View style={[style.buttonWrapper, {top: 10}]}>
          <TouchableOpacity style={[style.button, style.btnLogin]}>
            <Text style={[style.btnText, {color: Colors.black}]}>
              {en.login}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[style.buttonWrapper, {top: 30}]}>
          <TouchableOpacity style={[style.button, style.btnSignUp]}>
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
