import {StatusBar, Text, View} from 'react-native';
import SignUp from './Screens/SignUp';
import Splash from './Screens/Splash';
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Login />
    </View>
  );
};

export default App;
