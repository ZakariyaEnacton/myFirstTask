import {View, Text, TextInput} from 'react-native';
import React from 'react';
import style from './style';
import {Colors} from '../../../Assets/Theme/colors';

const InputText = props => {
  console.log(props);
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholderTextColor={Colors.white}
        cursorColor={Colors.white}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default InputText;
