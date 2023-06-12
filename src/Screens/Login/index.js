import {
  View,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Assets/Theme/colors';
import en from '../../translations/en.json';
import style from '../Login/style';
import {fontStyle} from '../../Assets/Theme/fontStyle';
import InputText from '../../Component/Core/InputText/Email';
import Email from '../../Component/Core/InputText/Email';
import Password from '../../Component/Core/InputText/Password';
import ButtonLogin from '../../Component/Core/Buttons/ButtonLogin';

const index = () => {
  return (
    <LinearGradient colors={Colors.splashColor} style={style.container}>
      <View style={style.headWrapper}>
        <Text style={[style.headTxt, {...fontStyle.headingBold28}]}>
          {en.welcome},
        </Text>
        <Text
          style={[
            style.headTxt,
            {...fontStyle.headingRegular28, fontWeight: 300},
          ]}>
          {en.greeting}
        </Text>
      </View>
      <View>
        <Email />
      </View>
      <View>
        <Password />
      </View>
      <View style={style.frgPassWrapper}>
        <TouchableOpacity>
          <Text style={style.frgPassTxt}>{en.forgot_pass}</Text>
        </TouchableOpacity>
      </View>
      <View style={style.buttonWrapper}>
        <ButtonLogin />
      </View>
    </LinearGradient>
  );
};

export default index;
