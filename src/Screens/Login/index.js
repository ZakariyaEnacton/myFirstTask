import {
  View,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TextInput,
  Touchable,
  TouchableOpacity,
  Image,
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
import {AppImages} from '../../Assets/Images';
import MediaButton from '../../Component/Core/Buttons/MediaButton';
import {Formik} from 'formik';
import * as Yup from 'yup';

const loginScheema = Yup.object().shape({
  email: Yup.string().required('Please enter eamil'),
  password: Yup.string().required('Please enter password'),
});

const Login = ({navigation, value}) => {
  console.log('-------', value);
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={loginScheema}>
      {({}) => (
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
          <View style={style.navViewWrapper}>
            <View style={style.horizontalView} />
            <View>
              <Text style={style.navTxt}>{en.navText}</Text>
            </View>
            <View style={style.horizontalView} />
          </View>
          <MediaButton />
          <View style={style.navLinkTxtWrapper}>
            <View>
              <Text style={style.navLinkTxt}>{en.navLinkTxt}</Text>
            </View>
            <View style={{marginLeft: 2}}>
              <TouchableOpacity onPressIn={() => navigation.navigate('SignUp')}>
                <Text style={style.navLinkBtn}>{en.sign_up_now}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </Formik>
  );
};

export default Login;
