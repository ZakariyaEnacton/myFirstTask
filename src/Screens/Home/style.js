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
    textAlign: 'center',
  },
  flatList: {
    marginTop: StatusBar.currentHeight || 0,
    height: '95%',
  },
  view: {
    backgroundColor: Colors.lightViolet,
    margin: 2,
    height: 50,
  },
  imgView: {
    height: 150,
    margin: 10,
  },
  // lgBtn: {
  //   height: '4%',
  // },
});
