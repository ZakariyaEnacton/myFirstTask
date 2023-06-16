import {View, Text, TextInput} from 'react-native';
import React from 'react';
import style from './style';
import {Colors} from '../../../Assets/Theme/colors';

const InputText = props => {
  return (
    <View style={style.container}>
      <TextInput
        // placeholder={props.placeholder}
        // value={props.value}
        // onChangeText={props.onChangeText}
        // onBlur={props.onBlur}
        // secureTextEntry={props.secureTextEntry}
        {...props}
        style={style.input}
        placeholderTextColor={Colors.white}
        cursorColor={Colors.white}
      />
    </View>
  );
};

export default InputText;
