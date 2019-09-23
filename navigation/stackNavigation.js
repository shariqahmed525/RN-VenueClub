import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from '../pages/splashScreen.js';
import Login from '../pages/login.js';
import Signup from '../pages/signup.js';

const AppStackNavigator = createStackNavigator({
    SplashScreen : {screen : SplashScreen},
    Login : {screen : Login},
    Signup : {screen : Signup}
},
{
    defaultNavigationOptions:{header:null}
});

const Navigator = createAppContainer(AppStackNavigator);

export default Navigator;