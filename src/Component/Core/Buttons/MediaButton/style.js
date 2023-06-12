import {StyleSheet} from 'react-native';
import {Colors} from '../../../../Assets/Theme/colors';

export default style = StyleSheet.create({
  mediaBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  btnMedia: {
    backgroundColor: Colors.white,
    padding: 12,
    width: 165,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: Colors.black,
    elevation: 2,
  },
});
