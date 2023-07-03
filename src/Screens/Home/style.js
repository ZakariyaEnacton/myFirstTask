import {StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../../Assets/Theme/colors';

export const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    color: Colors.white,
    height: 200,
    top: 25,
    borderRadius: 20,
    textAlign: 'center',
  },
  text: {
    marginTop: 20,
    backgroundColor: Colors.black,
    color: Colors.white,
    textAlign: 'center',
    height: 120,
  },
  flatList: {
    backgroundColor: Colors.red,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
