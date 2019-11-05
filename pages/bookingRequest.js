import React, {Component} from 'react';
import { Image } from 'react-native';
import {Button, Container, Header, Content,ListItem,List,Label,Thumbnail,Picker,Icon,Text,Form,Body, Title, Left, Right} from 'native-base';

class BookingRequest extends Component {
    render() {
        return(

            <Container>

            <Header style={{backgroundColor:'#28A745'}}>
 
            <Left>
            <Button iconLeft transparent onPress={() => this.props.navigation.navigate('OwnerHome')}>
            <Icon name='arrow-back' />
            
          </Button>
            </Left>
            <Body>
            <Title>Venue Club</Title>
            </Body>
            <Right/>
            </Header>
            <Content>
            
            <Text style={{alignSelf:'center', fontFamily:'cursive',fontSize:40, margin:10, fontWeight:'bold'}}>Customer Requests</Text>

            <List>
                <ListItem avatar>
                <Body>
                        <Text style={{fontWeight:'bold'}}>Customer Name: <Text style={{fontWeight:'normal'}}>Majid</Text></Text>
                        <Text style={{fontWeight:'bold'}}>Hall Name: <Text style={{fontWeight:'normal'}}>Lovely Hall</Text></Text>
                        <Text style={{fontWeight:'bold'}}>Date: <Text style={{fontWeight:'normal'}}>21-12-19</Text></Text>
                        <Text style={{color: '#28A745'}}>Accept  <Text style={{color : '#f60606'}}>Reject</Text></Text>
                    
                    </Body>
                    <Right>
                    <Thumbnail style={{width: 30, height: 30, marginTop:25}} source={require('../images/customerMessage.png')} />
                    </Right>
                </ListItem>
            </List>


            <List>
            <ListItem avatar>
            <Body>
                    <Text style={{fontWeight:'bold'}}>Customer Name: <Text style={{fontWeight:'normal'}}>Majid</Text></Text>
                    <Text style={{fontWeight:'bold'}}>Hall Name: <Text style={{fontWeight:'normal'}}>Lovely Hall</Text></Text>
                    <Text style={{fontWeight:'bold'}}>Date: <Text style={{fontWeight:'normal'}}>21-12-19</Text></Text>
                    <Text style={{color: '#28A745'}}>Accept  <Text style={{color : '#f60606'}}>Reject</Text></Text>
                
                </Body>
                <Right>
                    <Thumbnail style={{width: 30, height: 30, marginTop:25}} source={require('../images/customerMessage.png')} />
                </Right>
                  
            </ListItem>
        </List>


        <List>
        <ListItem avatar>
        <Body>
                <Text style={{fontWeight:'bold'}}>Customer Name: <Text style={{fontWeight:'normal'}}>Majid</Text></Text>
                <Text style={{fontWeight:'bold'}}>Hall Name: <Text style={{fontWeight:'normal'}}>Lovely Hall</Text></Text>
                <Text style={{fontWeight:'bold'}}>Date: <Text style={{fontWeight:'normal'}}>21-12-19</Text></Text>
                <Text style={{color: '#28A745'}}>Accept  <Text style={{color : '#f60606'}}>Reject</Text></Text>
            
            </Body>
            <Right>
                <Thumbnail style={{width: 30, height: 30, marginTop:25}} source={require('../images/customerMessage.png')} />
            </Right>
              
        </ListItem>
    </List>
            
            </Content>
            
            </Container>
        )
    }
}

export default BookingRequest;