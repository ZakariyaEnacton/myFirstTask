import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Assets/Theme/colors';
import en from '../../translations/en.json';
import style from '../Login/style';
import {fontStyle} from '../../Assets/Theme/fontStyle';
import MediaButton from '../../Component/Core/MediaButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import InputText from '../../Component/Core/InputText';
import ButtonPrimary from '../../Component/Core/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginScheema = Yup.object().shape({
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
});

const Login = ({navigation}) => {
  const handleLogin = async val => {
    const userData = await AsyncStorage.getItem('user');
    const getUserData = JSON.parse(userData);

    let chkUser = [];

    chkUser = getUserData.filter(
      items => val.email == items.email && items.password == val.password,
    );

    if (chkUser.length != []) {
      await AsyncStorage.setItem('user_token', 'true');
      navigation.navigate('Home');
    } else {
      console.warn('User not found');
    }
  };
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={value => {
        handleLogin(value);
      }}
      validationSchema={loginScheema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isValid,
        setFieldTouched,
      }) => (
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
            <InputText
              placeholder={'Email Address'}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {touched.email && errors.email && (
              <Text style={style.errorTxt}>{errors.email}</Text>
            )}
          </View>
          <View>
            <InputText
              placeholder={'Password'}
              value={values.password}
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />
            {touched.password && errors.password && (
              <Text style={style.errorTxt}>{errors.password}</Text>
            )}
          </View>
          <View style={style.frgPassWrapper}>
            <TouchableOpacity>
              <Text style={style.frgPassTxt}>{en.forgot_pass}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.buttonWrapper}>
            <ButtonPrimary
              name={en.login}
              onPress={handleSubmit}
              disabled={!isValid}
              style={{
                backgroundColor: !isValid ? Colors.gray : Colors.white,
              }}
            />
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
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
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
