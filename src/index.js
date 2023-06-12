import {StatusBar, Text, View} from 'react-native';
import SignUp from './Screens/SignUp';
import Splash from './Screens/Splash';
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import InputText from './Component/Core/InputText/Email';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Login />
      {/* <InputText /> */}
    </View>
  );
};

export default App;
