import {StyleSheet} from 'react-native';
import {Colors} from '../../../Assets/Theme/colors';

export const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.midnight_Blue,
    height: 100,
    flex: 1,
    padding: 10,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt: {
    color: Colors.white,
  },
  txtWrapper: {
    justifyContent: 'center',
  },
  txtInp: {
    flex: 1,
    backgroundColor: Colors.white,
    height: 35,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    fontSize: 12,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: Colors.silver,
  },
});
