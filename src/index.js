import {View} from 'react-native';
<<<<<<< HEAD

=======
>>>>>>> 6628341aeb3cd7cd0a54bbc07c5eee9d15bbcbcc
import RNBootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';
import AppNavigator from './Navigation/appNavigator';

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
