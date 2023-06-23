import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import {AppImages} from '../../../Assets/Images';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const MediaButton = ({navigation}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '667299390762-2ubnmt2ruskk3b6t379t2tq1kcfc2i5d.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('email -- >', userInfo.user.email);
      console.log('name -- >', userInfo.user.name);
      setUser({userInfo});
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <View style={style.mediaBtnWrapper}>
      <View>
        <TouchableOpacity
          onPress={() => {
            signIn();
          }}
          style={[style.btnMedia, {marginLeft: 25}]}>
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
