import { createStackNavigator } from 'react-navigation'
import LoginScreen from './components/login'
import HomeScreen from './components/home'

const App = createStackNavigator({
  Login : {screen : LoginScreen},
  Home : {screen : HomeScreen},
});

export default App;
