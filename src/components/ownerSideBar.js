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
import store from '../store';
import { Content, ListItem, Left, Thumbnail, Body, List } from 'native-base';
import { AUTH } from '../config/firebase.js';

const OwnerSideBar = () => {

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
            <Thumbnail source={require('../images/ceo.png')} />
          </Left>
          <Body>
            <Text>{userD && (`${userD.fName.trim()} ${userD.lName.trim()}`)}</Text>
          </Body>
        </ListItem>

        <Text>{"\n"}</Text>

        <ListItem thumbnail onPress={() => navigate('BookingRequest')}>
          <Left>
            <Thumbnail square style={{ width: 30, height: 30 }} source={require('../images/booking.png')} />
          </Left>
          <Body>
            <Text>Bookings</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => navigate('OwnerContactList')}>
          <Left>
            <Thumbnail square style={{ width: 30, height: 30 }} source={require('../images/comment.png')} />
          </Left>
          <Body>
            <Text>Messages</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => navigate('MyVenues')}>
          <Left>
            <Thumbnail square style={{ width: 30, height: 30 }} source={require('../images/city-hall.png')} />
          </Left>
          <Body>
            <Text>My Venues</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => navigate('OwnerContact')}>
          <Left>
            <Thumbnail square style={{ width: 30, height: 30 }} source={require('../images/telephone.png')} />
          </Left>
          <Body>
            <Text>Contact Us</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => navigate('OwnerSettings')}>
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
            <Text>Log Out</Text>
          </Body>
        </ListItem>
      </List>
    </Content>
  )
};

export default withNavigation(OwnerSideBar);