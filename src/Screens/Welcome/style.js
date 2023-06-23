import {StyleSheet} from 'react-native';
import {Colors} from '../../Assets/Theme/colors';
import {fontStyle} from '../../Assets/Theme/fontStyle';

export default style = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    position: 'relative',
    bottom: 50,
  },
  appTxtWrapper: {
    position: 'relative',
    bottom: 50,
  },
  appTxt: {
    ...fontStyle.headingBold,
    color: Colors.white,
    fontSize: 24,
  },
  buttonWrapper: {
    position: 'relative',
  },
  button: {
    width: 350,
    borderRadius: 10,
    borderColor: Colors.white,
    alignItems: 'center',
    padding: 12,
    // borderWidth: 1,
  },
  btnLogin: {
    backgroundColor: Colors.white,
  },
  btnSignUp: {
    borderWidth: 1,
  },
  btnText: {
    ...fontStyle.h2Ragular,
    fontWeight: '500',
  },
  txtWrapper: {
    position: 'absolute',
    bottom: 40,
  },
  text: {
    color: Colors.white,
    textDecorationLine: 'underline',
  },
});
