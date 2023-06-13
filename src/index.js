import {StatusBar, Text, View} from 'react-native';
import SignUp from './Screens/SignUp';
import Splash from './Screens/Splash';
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import InputText from './Component/Core/InputText/Email';
import ButtonLogin from './Component/Core/Buttons/ButtonLogin';
import RNBootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';
import AppNavigator from './Navigation/appNavigator';
import OnBoarding from './Screens/OnBoarding';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  // useEffect(() => {
  //   const init = async () => {
  //     // …do multiple sync or async tasks
  //   };

  //   init().finally(async () => {
  //     await RNBootSplash.hide({fade: true, duration: 500});
  //     console.log('BootSplash has been hidden successfully');
  //   });
  // }, []);

  return (
    <View style={{flex: 1}}>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Splash /> */}
      {/* <Welcome /> */}
      <AppNavigator />
      {/* <OnBoarding /> */}
    </View>
  );
};

export default App;
