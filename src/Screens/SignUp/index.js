import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import en from '../../translations/en.json';
import signupStyle from './style';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Assets/Theme/colors';
import {AppImages} from '../../Assets/Images';

const SignUp = () => {
  return (
    <LinearGradient style={signupStyle.container} colors={Colors.splashColor}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.purple} />
      <ScrollView StickyHeaderComponent={true}>
        <View>
          <View style={signupStyle.wrapper}>
            <View style={signupStyle.headWrapper}>
              <Text style={style.title}>{en.create_acc}</Text>
              <Text style={style.titleStart}>{en.start_now}</Text>
            </View>
            <View style={signupStyle.inputWrapper}>
              <TextInput
                placeholderTextColor={Colors.white}
                style={signupStyle.input}
                placeholder={en.email_place_holder}
                cursorColor={Colors.white}
              />
            </View>
            <View>
              <TextInput
                placeholderTextColor={Colors.white}
                style={signupStyle.input}
                placeholder={en.pass_place_holder}
                cursorColor={Colors.white}
              />
            </View>
            <View>
              <TextInput
                placeholderTextColor={Colors.white}
                style={signupStyle.input}
                placeholder={en.confirm_pass_place_holder}
                cursorColor={Colors.white}
              />
            </View>
            <View style={style.buttonWrapper}>
              <TouchableOpacity style={style.button}>
                <Text style={style.btnText}>{en.sign_up}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.navViewWrapper}>
            <View style={style.horizontalView} />
            <View>
              <Text style={style.navTxt}>{en.navText}</Text>
            </View>
            <View style={style.horizontalView} />
          </View>
          <View style={style.mediaBtnWrapper}>
            <View>
              <TouchableOpacity style={[style.btnMedia, {marginLeft: 25}]}>
                <Image source={AppImages.googleImg} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={[style.btnMedia, {marginRight: 25}]}>
                <Image source={AppImages.facebookImg} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.navLinkTxtWrapper}>
          <View>
            <Text style={style.navLinkTxt}>{en.navLinkTxt}</Text>
          </View>
          <View style={{marginLeft: 2}}>
            <TouchableOpacity>
              <Text style={style.navLinkBtn}>{en.login_Now}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SignUp;
