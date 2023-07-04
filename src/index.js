import {View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';
import AppNavigator from './Navigation/appNavigator';
import Cards from './Component/Generic/Card';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};

export default App;
