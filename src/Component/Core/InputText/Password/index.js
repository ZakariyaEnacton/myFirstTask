import {View, Text, TextInput} from 'react-native';
import React from 'react';
import style from './style';
import en from '../../../../translations/en.json';
import {Colors} from '../../../../Assets/Theme/colors';

const Password = () => {
  return (
    <View>
      <TextInput
        style={style.input}
        placeholder={en.pass_place_holder}
        placeholderTextColor={Colors.white}
        cursorColor={Colors.white}
      />
    </View>
  );
};

export default Password;
