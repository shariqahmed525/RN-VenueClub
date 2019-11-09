import { withNavigation } from 'react-navigation';
import React, {
  useState,
  useEffect
} from 'react';
import {
  Text
} from 'react-native';
import {
  useNavigation
} from 'react-navigation-hooks';
import { Content, ListItem, Left, Thumbnail, Body, List } from 'native-base';
import { AUTH } from '../config/firebase.js';
import store from '../store/index.js';

const UserSideBar = () => {


  const { navigate } = useNavigation();
  const [userD, setUser] = useState(null);

  const logOff = () => {
    AUTH.signOut().then(() => {
      navigate('Login')
    }).catch(function (error) {
      console.log(error, " error in signout");
    });
  }

  useEffect(() => {
    getStateFromStore();
    store.subscribe(getStateFromStore);
  }, []);

  const getStateFromStore = () => {
    const { reducer } = store.getState();
    const { user } = reducer;
    setUser(user);
  }


  return (
    <Content style={{ backgroundColor: '#ffffff' }}>


      <List>

        <ListItem avatar >

          <Left>
            <Thumbnail source={require('../images/user.png')} />
          </Left>

          <Body>
            <Text>{userD && (`${userD.fName.trim()} ${userD.lName.trim()}`)}</Text>
          </Body>

        </ListItem>

        <Text>{"\n"}</Text>

        <ListItem thumbnail onPress={() => navigate('ContactList')}>
          <Left>
            <Thumbnail square style={{ width: 30, height: 30 }} source={require('../images/message.png')} />
          </Left>
          <Body>
            <Text>Messages</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => navigate('Search')}>
          <Left>
            <Thumbnail square style={{ width: 30, height: 30 }} source={require('../images/search.png')} />
          </Left>
          <Body>
            <Text>Search</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => navigate('Aboutus')}>
          <Left>
            <Thumbnail square style={{ width: 30, height: 30 }} source={require('../images/aboutus.png')} />
          </Left>
          <Body>
            <Text>About Us</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => navigate('Contactus')}>
          <Left>
            <Thumbnail square style={{ width: 30, height: 30 }} source={require('../images/contactus.png')} />
          </Left>
          <Body>
            <Text>Contact Us</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => navigate('PrivacyPolicy')}>
          <Left>
            <Thumbnail square style={{ width: 30, height: 30 }} source={require('../images/privacyPolicy.jpg')} />
          </Left>
          <Body>
            <Text>Privacy Policy</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => navigate('TermsAndCondition')}>
          <Left>
            <Thumbnail square style={{ width: 30, height: 30 }} source={require('../images/terms.jpg')} />
          </Left>
          <Body>
            <Text>Terms and Condition</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => navigate('Settings')}>
          <Left>
            <Thumbnail square style={{ width: 30, height: 30 }} source={require('../images/settings.png')} />
          </Left>
          <Body>
            <Text>Settings</Text>
          </Body>
        </ListItem>
        <ListItem thumbnail onPress={logOff}>
          <Left>
            <Thumbnail square style={{ width: 30, height: 30 }} source={require('../images/logout.png')} />
          </Left>
          <Body>
            <Text>Logout</Text>
          </Body>
        </ListItem>
      </List>
    </Content>
  )
}

export default withNavigation(UserSideBar);