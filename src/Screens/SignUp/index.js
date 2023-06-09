import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import en from '../../translations/en.json';
import signupStyle from './style';
import style from './style';

const SignUp = () => {
  return (
    <View style={signupStyle.container}>
      <View style={signupStyle.wrapper}>
        <View style={signupStyle.headWrapper}>
          <Text>{en.create_acc}</Text>
          <Text>{en.start_now}</Text>
        </View>
        <View style={signupStyle.inputWrapper}>
          <TextInput
            style={signupStyle.input}
            placeholder={en.email_place_holder}
          />
        </View>
        <View>
          <TextInput
            style={signupStyle.input}
            placeholder={en.pass_place_holder}
          />
        </View>
        <View>
          <TextInput
            style={signupStyle.input}
            placeholder={en.confirm_pass_place_holder}
          />
        </View>
        <View style={style.buttonWrapper}>
          <TouchableOpacity>
            <Text>{en.sign_up}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
