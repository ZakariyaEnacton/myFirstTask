import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import style from './style';
import {AppImages} from '../../../Assets/Images';

const MediaButton = () => {
  return (
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
  );
};

export default MediaButton;
