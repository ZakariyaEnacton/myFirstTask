import {StyleSheet, Dimensions} from 'react-native';
import {fontStyle} from '../../Assets/Theme/fontStyle';

const {height, width} = Dimensions.get('screen');
export default style = StyleSheet.create({
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width - 80,
    height: 400,
    resizeMode: 'contain',
  },
  title: {
    ...fontStyle.h1Bold,
  },
  description: {
    width: width * 0.85,
    textAlign: 'center',
  },
});
