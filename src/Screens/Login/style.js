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
  navViewWrapper: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
  },
  navView: {
    height: 0.5,
    backgroundColor: Colors.white,
    flex: 1,
  },
  horizontalView: {
    flex: 1,
    height: 0.5,
    backgroundColor: Colors.white,
  },
  navTxt: {
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    color: Colors.white,
  },
  navLinkTxtWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  navLinkTxt: {
    color: Colors.white,
    fontWeight: 300,
  },
  navLinkBtn: {
    textDecorationLine: 'underline',
    color: Colors.white,
    fontWeight: 500,
  },
  errorTxt: {
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 5,
  },
});
