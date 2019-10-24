import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from '../pages/splashScreen.js';
import Login from '../pages/login.js';
import Signup from '../pages/signup.js';
import Home from '../pages/home.js';
import UserViewTopDeals from '../pages/userViewTopDeals.js';
import Settings from '../pages/settings.js';
import PrivacyPolicy from '../pages/privacyPolicy.js';
import Aboutus from '../pages/aboutus.js';
import Contactus from '../pages/contactus.js';
import ContactList from '../pages/contactList.js';
import Messenger from '../pages/messenger.js';


const AppStackNavigator = createStackNavigator({
    SplashScreen : {screen : SplashScreen},
    Login : {screen : Login},
    Signup : {screen : Signup},
    Home : {screen : Home},
    UserViewTopDeals: {screen : UserViewTopDeals},
    Settings : {screen : Settings},
    PrivacyPolicy : {screen: PrivacyPolicy},
    Aboutus : { screen: Aboutus},
    Contactus : {screen: Contactus},
    ContactList : {screen : ContactList},
    Messenger : {screen : Messenger}
},
{
    defaultNavigationOptions:{header:null}
});

const Navigator = createAppContainer(AppStackNavigator);

export default Navigator;