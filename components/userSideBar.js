import { withNavigation } from 'react-navigation';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Content, Button, ListItem, Left, Right,Thumbnail,Body, Icon,List} from 'native-base';
import firebase from '../config/firebase.js';
import AsyncStorage from '@react-native-community/async-storage';

class UserSideBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
    

    }
    componentDidMount() {
      this.getData();
    }
    async getData(user){
      try {
        const value = await AsyncStorage.getItem('user')
        console.log(value)
      } catch(e) {
        console.log(e)
      }
    }
    
    logOff() {
      firebase.auth().signOut().then(()=> {
        this.props.navigation.navigate('Login');
      }).catch(function(error) {
        alert(''+error);
      });
    }
    check(){
      const {user}=this.state;
      console.log(user)
    }

    render() {
      const {user}=this.state;
  
        return(
    
            <Content style={{backgroundColor:'#ffffff'}}>


            <List>

            <ListItem avatar >

            <Left>
                <Thumbnail source={require('../images/billgates.jpg')} />
            </Left>
                
            <Body>
                <Text  onPress={()=> this.check()}>Majid</Text>
            </Body>
            
            </ListItem>

            <Text>{"\n"}</Text>

          <ListItem thumbnail onPress={() => this.props.navigation.navigate('ContactList')}>
          <Left>
            <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/message.png')} />
          </Left>
          <Body>
            <Text>Messages</Text>
          </Body>
        </ListItem>

        <ListItem thumbnail onPress={() => this.props.navigation.navigate('Search')}>
        <Left>
          <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/search.png')} />
        </Left>
        <Body>
          <Text>Search</Text>
        </Body>
      </ListItem>

      <ListItem thumbnail onPress={() => this.props.navigation.navigate('Aboutus')}>
    <Left>
      <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/aboutus.png')} />
    </Left>
    <Body>
      <Text>About Us</Text>
    </Body>
  </ListItem>

  <ListItem thumbnail onPress={() => this.props.navigation.navigate('Contactus')}>
  <Left>
    <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/contactus.png')} />
  </Left>
  <Body>
    <Text>Contact Us</Text>
  </Body>
</ListItem>

<ListItem thumbnail onPress={() => this.props.navigation.navigate('PrivacyPolicy')}>
      <Left>
        <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/privacyPolicy.jpg')} />
      </Left>
      <Body>
        <Text>Privacy Policy</Text>
      </Body>
    </ListItem>

    <ListItem thumbnail onPress={() => this.props.navigation.navigate('TermsAndCondition')}>
      <Left>
        <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/terms.jpg')} />
      </Left>
      <Body>
        <Text>Terms and Condition</Text>
      </Body>
    </ListItem>

        <ListItem thumbnail onPress={() => this.props.navigation.navigate('Settings')}>
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
        <Text>Logout</Text>
      </Body>
    </ListItem>


      </List>

        



            </Content>

    )};
}

export default withNavigation(UserSideBar);