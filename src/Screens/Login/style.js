import {StyleSheet} from 'react-native';
import {Colors} from '../../Assets/Theme/colors';
import {fontStyle} from '../../Assets/Theme/fontStyle';

export default style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headTxt: {
    color: Colors.white,
  },
  input: {
    borderWidth: 1,
    width: 350,
    alignSelf: 'center',
    backgroundColor: Colors.lightViolet,
    borderColor: Colors.white,
    borderRadius: 10,
    shadowColor: Colors.black,
    elevation: 2,
    padding: 10,
  },
  frgPassWrapper: {
    alignItems: 'flex-end',
    width: 370,
    marginTop: 10,
  },
  frgPassTxt: {
    ...fontStyle.h3Ragular,
    textDecorationLine: 'underline',
    color: Colors.white,
  },
  buttonWrapper: {
    alignSelf: 'center',
    marginTop: 30,
  },
});
