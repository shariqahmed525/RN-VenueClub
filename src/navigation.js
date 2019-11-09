import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import Login from './screens/login.js';
import Signup from './screens/signup.js';
import Register from './screens/register';
import UserViewTopDeals from './screens/userViewTopDeals.js';
import Settings from './screens/settings.js';
import PrivacyPolicy from './screens/privacyPolicy.js';
import Aboutus from './screens/aboutus.js';
import Contactus from './screens/contactus.js';
import ContactList from './screens/contactList.js';
import Messenger from './screens/messenger.js';
import ForgetPassword from './screens/forgetPassword.js';
import OwnerHome from './screens/ownerHome.js';
import OwnerRegistration from './screens/ownerRegistration.js';
import BookingRequest from './screens/bookingRequest.js';
import OwnerMessenger from './screens/ownerMessenger.js';
import OwnerSettings from './screens/ownerSettings.js';
import OwnerContactList from './screens/ownerContactList.js';
import TermsAndCondition from './screens/termsAndCondition.js';
import Search from './screens/search.js';
import OwnerContact from './screens/ownerContact.js';
import { OfficialColor } from './constants/colors.js';
import Main from './screens/Main.js';

const headerObject = {
    headerTitleStyle: {
        textAlign: 'center',
        color: "#fff",
    },
    headerTitleContainerStyle: {
        justifyContent: 'center',
    },
    headerTintColor: "#fff",
    headerStyle: {
        backgroundColor: OfficialColor,
    },
    headerRight: <></>,
};

const AppStackNavigator = createStackNavigator({
    Main: {
        screen: Main,
    },
    UserViewTopDeals: {
        screen: UserViewTopDeals,
        navigationOptions: {
            ...headerObject,
            title: "VENUE VIEW",
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            ...headerObject,
            title: "REGISTER VENUE",
        }
    },
    Settings: { screen: Settings },
    PrivacyPolicy: {
        screen: PrivacyPolicy,
        navigationOptions: {
            ...headerObject,
            title: "VENUE CLUB",
        }
    },
    Aboutus: {
        screen: Aboutus,
        navigationOptions: {
            ...headerObject,
            title: "ABOUT US",
        }
    },
    Contactus: {
        screen: Contactus,
        navigationOptions: {
            ...headerObject,
            title: "VENUE CLUB",
        }
    },
    ContactList: {
        screen: ContactList,
        navigationOptions: {
            ...headerObject,
            title: "MESSAGES",
        }
    },
    Messenger: { screen: Messenger },
    // ForgetPassword: { screen: ForgetPassword },
    OwnerRegistration: { screen: OwnerRegistration },
    BookingRequest: {
        screen: BookingRequest,
        navigationOptions: {
            ...headerObject,
            title: "BOOKINGS",
        }
    },
    OwnerMessenger: { screen: OwnerMessenger },
    OwnerSettings: { screen: OwnerSettings },
    OwnerContactList: {
        screen: OwnerContactList,
        navigationOptions: {
            ...headerObject,
            title: "MESSAGES",
        }
    },
    TermsAndCondition: {
        screen: TermsAndCondition,
        navigationOptions: {
            ...headerObject,
            title: "VENUE CLUB",
        }
    },
    Search: { screen: Search },
    OwnerContact: {
        screen: OwnerContact,
        navigationOptions: {
            ...headerObject,
            title: "VENUE CLUB",
        }
    },
}, {
    initialRouteName: "Main",
    // defaultNavigationOptions: { header: null }
});

const MainStack = createSwitchNavigator({
    Login: {
        screen: Login,
    },
    MainScreen: {
        screen: AppStackNavigator,
    },
    Signup: {
        screen: Signup,
    },
    ForgetPassword: {
        screen: ForgetPassword,
    },
}, {
    initialRouteName: "Login"
})

export default Navigator = createAppContainer(MainStack);