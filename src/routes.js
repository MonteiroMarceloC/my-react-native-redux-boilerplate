//Navigators
import { createStackNavigator, 
        createBottomTabNavigator,
        createSwitchNavigator,
        createAppContainer } from 'react-navigation';

//Pages
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Settings from './pages/Settings'


//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const StackNav = createStackNavigator({
  Home:{screen: Home},
  Settings:{screen: Settings},
})

const TabNav = createBottomTabNavigator(
{
  Welcome: Welcome,
  Home: StackNav,
});

const SwitchNav = createSwitchNavigator(
  {
    Login: Login,
    Signup: Signup,
    Welcome: TabNav,
  });
  
export default createAppContainer(SwitchNav);