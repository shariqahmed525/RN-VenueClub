import React, {Component} from 'react';
import { Image } from 'react-native';
import {Button, Container, Header, Content,Card,CardItem,Input,Thumbnail,Icon,Text,Form,Body, Title, Left, Right} from 'native-base';
import { validate } from '@babel/types';

class Search extends Component {
   
    render() {
        return(
            <Container>
            <Header style={{backgroundColor:'#28A745'}}>
 
            <Left>
            <Button iconLeft transparent onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name='arrow-back' />
            </Button>
            </Left>
            <Body>
            <Title>Venue Club</Title>
            </Body>
            <Right/>
            </Header>
            
            <Content>
            
            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:30, marginBottom:20, marginTop:10}}>Search Result</Text>

            <Card>
            <CardItem>
                
                <Body>
                  <Text style={{alignSelf:'center',fontWeight:'bold'}}>Lovely Hall</Text>
                  
                </Body>
              
            </CardItem>

            <CardItem cardBody>
              <Image source={require('../images/hall1.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>

            <CardItem>
            <Body>
            <Text style={{fontWeight:'bold'}}>Venue Type: <Text style={{fontWeight:'normal'}}>Hall</Text></Text>
            <Text style={{fontWeight:'bold'}}>Advance: <Text style={{fontWeight:'normal'}}>10000</Text></Text>
            <Text style={{fontWeight:'bold'}}>Rs: <Text style={{fontWeight:'normal'}}>100000</Text></Text>
            <Text style={{fontWeight:'bold'}}>Address: <Text style={{fontWeight:'normal'}}>Main Nazimabad</Text></Text>
            <Text onPress={() => this.props.navigation.navigate('Home')} style={{color:'#28A745', fontSize:20}}>Register 
           <Text style={{color:'#0000FF', fontSize:20}} onPress={() => this.props.navigation.navigate('OwnerHome')}> View Venue</Text></Text>
          
            </Body>

            
            </CardItem>
          </Card>

          <Card>
          <CardItem>
              
              <Body>
                <Text style={{alignSelf:'center',fontWeight:'bold'}}>Madni Hall</Text>
                
              </Body>
            
          </CardItem>

          <CardItem cardBody>
            <Image source={require('../images/hall2.jpg')} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>

          <CardItem>
          <Body>
          <Text style={{fontWeight:'bold'}}>Venue Type: <Text style={{fontWeight:'normal'}}>Banquet</Text></Text>
          <Text style={{fontWeight:'bold'}}>Advance: <Text style={{fontWeight:'normal'}}>10000</Text></Text>
          <Text style={{fontWeight:'bold'}}>Rs: <Text style={{fontWeight:'normal'}}>100000</Text></Text>
          <Text style={{fontWeight:'bold'}}>Address: <Text style={{fontWeight:'normal'}}>Main Nazimabad</Text></Text>
          <Text onPress={() => this.props.navigation.navigate('Home')} style={{color:'#28A745', fontSize:20}}>Register 
           <Text style={{color:'#0000FF', fontSize:20}} onPress={() => this.props.navigation.navigate('OwnerHome')}> View Venue</Text></Text>
            </Body> 
          
          </CardItem>
        </Card>

            
            
            </Content>
            
            
            </Container>


        )
    }

}

export default Search;