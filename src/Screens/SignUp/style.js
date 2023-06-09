import {StyleSheet} from 'react-native';
import {Colors} from '../../Assets/Theme/colors';
import {fontStyle} from '../../Assets/Theme/fontStyle';

export default signupStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.splashColor,
  },
  wrapper: {
    alignItems: 'center',
  },
  headWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    ...fontStyle.headingBold,
    color: Colors.white,
  },
  titleStart: {
    ...fontStyle.headingRegular,
    fontWeight: 300,
    color: Colors.white,
  },
  inputWrapper: {
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.white,
    margin: 5,
    width: 350,
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.lightViolet,
    shadowColor: Colors.black,
    elevation: 2,
    color: Colors.white,
  },
  buttonWrapper: {
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 15,
    width: 350,
    borderRadius: 10,
    shadowColor: Colors.black,
    elevation: 2,
    color: Colors.black,
  },
  btnText: {
    ...fontStyle.h3Bold,
    color: Colors.black,
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
  navLinkTxtWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 90,
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
});
