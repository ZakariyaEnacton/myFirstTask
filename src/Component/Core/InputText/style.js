import {StyleSheet} from 'react-native';
import {Colors} from '../../../Assets/Theme/colors';

export default style = StyleSheet.create({
  container: {
    marginTop: 10,
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
    color: Colors.white,
  },
  errorTxt: {
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
});
