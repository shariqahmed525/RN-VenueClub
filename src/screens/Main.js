import React, {
  useRef,
  useState,
  useEffect,
} from 'react'
import {
  Image,
  StatusBar,
} from 'react-native';

import {
  Root,
  Icon,
  Text,
  Button,
  Drawer,
  Thumbnail,
} from 'native-base';
import {
  useNavigation,
} from 'react-navigation-hooks'

import Home from './home';
import OwnerHome from './ownerHome';
import store from '../store';
import { OfficialColor } from '../constants/colors';
import UserSideBar from '../components/userSideBar';
import OwnerSideBar from '../components/ownerSideBar';
import { AUTH } from '../config/firebase';
import { RESET_ROUTE } from '../constants/functions';

let _drawerRef;
let logout;

let Main = props => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const [accountType, setAccountType] = useState(0);
  _drawerRef = useRef(null);

  useEffect(() => {
    const { reducer } = store.getState();
    const { user } = reducer;
    setAccountType(user.accountType);
    props.navigation.setParams({
      accType: user.accountType
    })
    setLoading(false);
  }, []);

  const onClose = () => {
    props.navigation.setParams({
      open: false
    })
  }

  const onOpen = () => {
    props.navigation.setParams({
      open: true
    })
  }

  logout = () => {
    AUTH.signOut()
      .then(() => props.navigation.dispatch(RESET_ROUTE('Login')))
      .catch(e => console.log(e, " error in logout"));
  }

  return (
    <>
      <StatusBar
        backgroundColor={loading ? "#000" : OfficialColor}
        barStyle="light-content"
      />
      {loading ? (
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          source={require('../images/launch_screen.png')}
        />
      ) : accountType == 2 ?
          <Root>
            <Drawer
              ref={(ref) => _drawerRef = ref}
              content={<OwnerSideBar />}
              onClose={onClose}
              onOpen={onOpen}
            >
              <OwnerHome {...props} />
            </Drawer>
          </Root>
          :
          <Root>
            <Drawer
              ref={(ref) => _drawerRef = ref}
              content={<UserSideBar />}
              onClose={onClose}
              onOpen={onOpen}
            >
              <Home {...props} />
            </Drawer>
          </Root>
      }
    </>
  )
}

Main.navigationOptions = ({ navigation }) => {
  let open = navigation.getParam('open');
  let accType = navigation.getParam('accType');
  return {
    title: "VENUE CLUB",
    headerTitleStyle: {
      textAlign: 'center',
      color: "#fff",
    },
    headerTitleContainerStyle: {
      justifyContent: 'center',
    },
    headerStyle: {
      backgroundColor: OfficialColor,
    },
    headerRight: (
      accType === "1" ?
        <Button
          transparent
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate('Search')}
        >
          <Thumbnail
            style={{ height: 30, width: 30, marginLeft: 20 }}
            source={require('../images/search1.jpg')}
          />
        </Button>
        :
        <Button transparent onPress={() => logout()}>
          <Text style={{ color: "#fff" }}>Logout</Text>
        </Button>
    ),
    headerLeft: (
      <Button
        transparent
        onPress={() => {
          open ?
            _drawerRef._root.close() :
            _drawerRef._root.open()
        }}
      >
        <Icon
          name={open ? 'ios-arrow-round-back' : 'menu'}
          style={{ fontSize: 25, color: '#fff' }}
        />
      </Button>
    ),
  }
};

export default Main;