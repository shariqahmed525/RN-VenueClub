import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
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
import MyVenues from './screens/MyVenues';
import ForgetPassword from './screens/forgetPassword.js';
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
    MyVenues: {
        screen: MyVenues,
        navigationOptions: {
            ...headerObject,
            title: "MY VENUES",
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null,
        }
    },
    ForgetPassword: {
        screen: ForgetPassword,
        navigationOptions: {
            header: null,
        }
    },
}, {
    initialRouteName: "Login",
});

export default Navigator = createAppContainer(AppStackNavigator);