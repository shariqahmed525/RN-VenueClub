import { withNavigation } from 'react-navigation';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Content, Button, ListItem, Left, Right,Thumbnail,Body, Icon,List} from 'native-base';
import firebase from '../config/firebase.js';

class OwnerSideBar extends Component {

  constructor(props){
    super(props);
    

    }
    logOff() {
      firebase.auth().signOut().then(()=> {
        this.props.navigation.navigate('Login');
      }).catch(function(error) {
        alert(''+error);
      });
    }

    render() {

   
        return(
    
            <Content style={{backgroundColor:'#ffffff'}}>


            <List>

            <ListItem avatar >

            <Left>
                <Thumbnail source={require('../images/billgates.jpg')} />
            </Left>
                
            <Body>
                <Text>Owner</Text>
            </Body>
            
            </ListItem>

            <Text>{"\n"}</Text>

          <ListItem thumbnail onPress={() => this.props.navigation.navigate('BookingRequest')}>
          <Left>
            <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/booking.png')} />
          </Left>
          <Body>
            <Text>Bookings</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => this.props.navigation.navigate('OwnerContactList')}>
        <Left>
          <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/message.png')} />
        </Left>
        <Body>
          <Text>Messages</Text>
        </Body>
      </ListItem>

    <ListItem thumbnail onPress={() => this.props.navigation.navigate('OwnerContact')}>
  <Left>
    <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/contactus.png')} />
  </Left>
  <Body>
    <Text>Contact Us</Text>
  </Body>
</ListItem>

      <ListItem thumbnail onPress={() => this.props.navigation.navigate('OwnerSettings')}>
      <Left>
        <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/settings.png')} />
      </Left>
      <Body>
        <Text>Settings</Text>
      </Body>
    </ListItem>

    <ListItem thumbnail onPress={()=> this.logOff()}>
    <Left>
      <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/logout.png')} />
    </Left>
    <Body>
      <Text>Log Out</Text>
    </Body>
  </ListItem>



      </List>

        



            </Content>

    )};
}

export default withNavigation(OwnerSideBar);