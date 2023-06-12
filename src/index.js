import {StatusBar, Text, View} from 'react-native';
import SignUp from './Screens/SignUp';
import Splash from './Screens/Splash';
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import InputText from './Component/Core/InputText/Email';
import ButtonLogin from './Component/Core/Buttons/ButtonLogin';
import RNBootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  return (
    <View style={{flex: 1}}>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Splash />
      {/* <Welcome /> */}
    </View>
  );
};

export default App;
