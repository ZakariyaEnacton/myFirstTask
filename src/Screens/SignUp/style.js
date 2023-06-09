import {StyleSheet} from 'react-native';
import colors from '../../Assets/Theme/colors';

export default signupStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8eadff',
  },
  wrapper: {
    alignItems: 'center',
  },
  headWrapper: {
    alignItems: 'center',
  },
  inputWrapper: {
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    margin: 5,
    width: 350,
    borderRadius: 10,
  },
  buttonWrapper: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    width: 350,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 10,
  },
});
