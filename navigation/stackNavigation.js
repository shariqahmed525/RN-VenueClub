import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../pages/login.js';
import Signup from '../pages/signup.js';

const AppStackNavigator = createStackNavigator({
    Login : {screen : Login},
    Signup : {screen : Signup}
},
{
    defaultNavigationOptions:{header:null}
});

const Navigator = createAppContainer(AppStackNavigator);

export default Navigator;