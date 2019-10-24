import { withNavigation } from 'react-navigation';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Content, Button, ListItem, Left, Right,Thumbnail,Body, Icon,List} from 'native-base';

class UserSideBar extends Component {

  constructor(props){
    super(props);
    

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
                <Text>Majid</Text>
            </Body>
            
            </ListItem>

            <Text>{"\n"}</Text>


            <ListItem thumbnail>
              <Left>
                <Thumbnail square tyle={{width: 30, height: 30}}  source={require('../images/dashboard.png')} />
              </Left>
              <Body>
                <Text>Dashboard</Text>
              </Body>
            </ListItem>


          <ListItem thumbnail onPress={() => this.props.navigation.navigate('ContactList')}>
          <Left>
            <Thumbnail square tyle={{width: 30, height: 30}}  source={require('../images/message.png')} />
          </Left>
          <Body>
            <Text>Messages</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => this.props.navigation.navigate('Settings')}>
        <Left>
          <Thumbnail square tyle={{width: 30, height: 30}}  source={require('../images/settings.png')} />
        </Left>
        <Body>
          <Text>Settings</Text>
        </Body>
      </ListItem>

      <ListItem thumbnail onPress={() => this.props.navigation.navigate('PrivacyPolicy')}>
      <Left>
        <Thumbnail square tyle={{width: 30, height: 30}}  source={require('../images/privacyPolicy.jpg')} />
      </Left>
      <Body>
        <Text>Privacy Policy</Text>
      </Body>
    </ListItem>

    <ListItem thumbnail onPress={() => this.props.navigation.navigate('Aboutus')}>
    <Left>
      <Thumbnail square tyle={{width: 30, height: 30}}  source={require('../images/aboutus.png')} />
    </Left>
    <Body>
      <Text>About Us</Text>
    </Body>
  </ListItem>

  <ListItem thumbnail onPress={() => this.props.navigation.navigate('Contactus')}>
    <Left>
      <Thumbnail square tyle={{width: 30, height: 30}}  source={require('../images/contactus.png')} />
    </Left>
    <Body>
      <Text>Contact Us</Text>
    </Body>
  </ListItem>

      <ListItem thumbnail>
      <Left>
        <Thumbnail square tyle={{width: 30, height: 30}}  source={require('../images/logout.png')} />
      </Left>
      <Body>
        <Text>Logout</Text>
      </Body>
    </ListItem>


      </List>

        



            </Content>

    )};
}

export default withNavigation(UserSideBar);