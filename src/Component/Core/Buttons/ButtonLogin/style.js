import {StyleSheet} from 'react-native';
import {Colors} from '../../../../Assets/Theme/colors';
import {fontStyle} from '../../../../Assets/Theme/fontStyle';

export default style = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 15,
    width: 350,
    borderRadius: 10,
    shadowColor: Colors.black,
    elevation: 2,
    color: Colors.black,
  },
  btnText: {
    ...fontStyle.h3Bold,
    color: Colors.black,
  },
});
