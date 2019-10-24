import React, {Component} from 'react';
import {Image} from 'react-native';
import { Drawer,Container, Header,Title,Right, Left, Body, Content,Root,Icon,Toast,Card,Tabs,Tab,ScrollableTab, Text,Thumbnail,Button,CardItem } from 'native-base';
import UserSideBar from '../components/userSideBar.js';
class Home extends Component {

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
        content={<UserSideBar navigator={this._navigator} />} 
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


        <Tabs tabBarBackgroundColor="#28A745" renderTabBar={()=> <ScrollableTab />}>
          <Tab tabStyle={{backgroundColor: '#28A745'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#28A745'}} heading="Top Deal">
            <Content >
            
            { topDealsArray.map((val , ind) => {
              return(

              

            <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{}}>{val.hallName}</Text>
                  <Text note>{val.address}</Text>
                </Body>
              </Left>
              <Right>
              <Text style={{color:'#f60606'}}>{val.offer}</Text>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={val.image} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button onPress={() => this.props.navigation.navigate('UserViewTopDeals')} block style={{backgroundColor:'#28A745', width:170}} 
                  
                   >
                  <Text>View Lawn</Text>
                </Button>
              </Left>
              <Body>
                <Button block style={{backgroundColor:'#28A745', width:170}}>
                  <Text>Register Hall</Text>
                </Button>
                
              </Body>
              
            </CardItem>
           
          </Card>) } )}

          

            </Content>
          </Tab>
          <Tab tabStyle={{backgroundColor: '#28A745'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#28A745'}} heading="Recent Bookings">
          
          <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../images/final_logo.png')} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('../images/final_logo.png')} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>

          </Tab>
          {/*<Tab tabStyle={{backgroundColor: '#28A745'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#28A745'}} heading="Tab3">
          <Text>abc</Text>
          </Tab>
          <Tab tabStyle={{backgroundColor: '#28A745'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#28A745'}} heading="Tab4">
          <Text>abc</Text>
          </Tab>
          <Tab tabStyle={{backgroundColor: '#28A745'}} textStyle={{color: '#28A745'}} activeTextStyle={{color: '#28A745'}} activeTabStyle={{backgroundColor: '#28A745'}} heading="Tab5">
          <Text>abc</Text>
                </Tab> */}
        </Tabs> 

      

      
      </Container>

      </Drawer>
      </Root>
      

    );
}

}

export default Home;
