import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import en from '../../translations/en.json';
import signupStyle from './style';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Assets/Theme/colors';
import {AppImages} from '../../Assets/Images';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Login from '../Login';

const SignUpSchema = Yup.object().shape({
  email: Yup.string(`- /\S+@\S+\. \S+/`)
    .email('Invalid email')
    .required('Please enter email address'),
  password: Yup.string()
    .min(8)
    .required('Please enter password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must contain eight characters, at least 1 uppercase alphabetical character, The string must contain at least 1 lowercase alphabetical character, must contain at least one special character',
    ),
  confirmPassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref('password')], `Password don't matched`)
    .required(`Field can't be empty`),
});

const SignUp = ({navigation}) => {
  // console.log('Nav--------', props);
  const sendUser = () => {
    console.log('pressed');
    navigation.navigate('Login');
  };
  return (
    <Formik
      initialValues={{email: '', password: '', confirmPassword: ''}}
      onSubmit={() => {
        sendUser();
      }}
      validationSchema={SignUpSchema}>
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isValid,
        setFieldTouched,
      }) => (
        <LinearGradient
          style={signupStyle.container}
          colors={Colors.splashColor}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={Colors.purple}
          />
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
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
                {touched.email && errors.email && (
                  <Text style={style.errorTxt}>{errors.email}</Text>
                )}
              </View>
              <View>
                <TextInput
                  placeholderTextColor={Colors.white}
                  style={signupStyle.input}
                  placeholder={en.pass_place_holder}
                  cursorColor={Colors.white}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
                {touched.password && errors.password && (
                  <Text style={style.errorTxt}>{errors.password}</Text>
                )}
              </View>
              <View>
                <TextInput
                  placeholderTextColor={Colors.white}
                  style={signupStyle.input}
                  placeholder={en.confirm_pass_place_holder}
                  cursorColor={Colors.white}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => setFieldTouched('confirmPassword')}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={style.errorTxt}>{errors.confirmPassword}</Text>
                )}
              </View>
              <View style={style.buttonWrapper}>
                <TouchableOpacity onPress={handleSubmit} style={style.button}>
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
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={style.navLinkBtn}>{en.login_Now}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </Formik>
  );
};

export default SignUp;
