import React, {Component} from 'react';
import {Image} from 'react-native';
import {List, ListItem, Drawer, Container, Header, Title, Right, Left, Body, Root, Icon, Text, Button } from 'native-base';
import OwnerSideBar from '../components/ownerSideBar.js';

class OwnerHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      topDealsArray : []
    }
  }

  closeDrawer () {

    this._drawer._root.close()
  };
  openDrawer () { 
    this._drawer._root.open() 
  };

  displayTopDeals() {
    const {topDealsArray} = this.state;
    topDealsArray.push({hallName : 'Lovely Hall' , address : 'Gulshan e ismail', offer : '50% OFF' , image : require('../images/hall1.jpg')});
    topDealsArray.push({hallName : 'Rajjo Hall' , address : 'Gulshan e iqbal', offer : '40% OFF' , image : require('../images/hall2.jpg')});
    topDealsArray.push({hallName : 'Madni Hall' , address : 'Gulshan e maymar', offer : '69% OFF' , image : require('../images/hall3.jpg')});
}

  render(){

    const {topDealsArray} = this.state;
    this.displayTopDeals();

    return(
<Root>

<Drawer 
        ref={(ref) => { this._drawer = ref; }} 
        content={<OwnerSideBar navigator={this._navigator} />} 
        onClose={() => this.closeDrawer()} >

      <Container>

        <Header style={{backgroundColor:"#28A745"}}>
        <Left>
        <Button transparent onPress={() => this.openDrawer()}>
              <Icon name='menu' />
            </Button>
        </Left>
        
        
        <Body><Title>Venue Club</Title></Body>
        <Right>
        
        <Button transparent><Text >Logout</Text></Button>
        
        </Right>
        
        
        </Header>


       
        <Button  onPress={() => this.props.navigation.navigate('OwnerRegistration')} block style={{width: 200 , backgroundColor: '#28A745', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text>Add Venue</Text></Button>

          <Text style={{alignSelf:'center',fontWeight:'bold'}}>Recent Bookings</Text>
          <List>
            <ListItem selected>
              <Left>
                <Text style={{fontWeight:'bold',fontSize:14}}>Hall Name</Text>
              </Left>
              <Body>
              <Text style={{fontWeight:'bold',fontSize:14}}>Date</Text>
              </Body>
              <Right>
                <Text style={{fontWeight:'bold',fontSize:14}}>Status</Text>
              </Right>
            </ListItem>
            </List>

            <List>
            <ListItem>
              <Left>
                <Text style={{fontSize:14}}>ABC LAWN</Text>
              </Left>
              <Body>
              <Text style={{fontSize:14}}>12-10-2019</Text>
              </Body>
              <Right>
                <Text style={{fontSize:14}}>A</Text>
              </Right>
            </ListItem>
            </List>

            <List>
            <ListItem>
              <Left>
                <Text style={{fontSize:14}}>MADNI LAWN</Text>
              </Left>
              <Body>
              <Text style={{fontSize:14}}>12-10-2019</Text>
              </Body>
              <Right>
                <Text style={{fontSize:14}}>NA</Text>
              </Right>
            </ListItem>
            </List>

            <List>
            <ListItem>
              <Left>
                <Text style={{fontSize:14}}>LOVELY LAWN</Text>
              </Left>
              <Body>
              <Text style={{fontSize:14}}>12-10-2019</Text>
              </Body>
              <Right>
                <Text style={{fontSize:14}}>A</Text>
              </Right>
            </ListItem>
            </List>

          
          {/*<Tab tabStyle={{backgroundColor: '#28A745'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#28A745'}} heading="Tab3">
          <Text>abc</Text>
          </Tab>
          <Tab tabStyle={{backgroundColor: '#28A745'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#28A745'}} heading="Tab4">
          <Text>abc</Text>
          </Tab>
          <Tab tabStyle={{backgroundColor: '#28A745'}} textStyle={{color: '#28A745'}} activeTextStyle={{color: '#28A745'}} activeTabStyle={{backgroundColor: '#28A745'}} heading="Tab5">
          <Text>abc</Text>
                </Tab> */}
        

      

      
      </Container>

      </Drawer>
      </Root>
      

    );
}

}

export default OwnerHome;
