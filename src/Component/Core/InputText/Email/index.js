import {View, Text, TextInput} from 'react-native';
import React from 'react';
import en from '../../../../translations/en.json';
import {Colors} from '../../../../Assets/Theme/colors';
import style from './style';

const Email = () => {
  return (
    <View>
      <TextInput
        style={[style.input, {marginBottom: 10}]}
        placeholder={en.email_place_holder}
        placeholderTextColor={Colors.white}
        cursorColor={Colors.white}
      />
    </View>
  );
};

export default Email;
