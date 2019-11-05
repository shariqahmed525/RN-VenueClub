import React, {Component} from 'react';
import { Image } from 'react-native';
import {Card,CardItem,Button, Container, Header, Content,Item,Label,Input,Picker,Icon,Text,Form,Body, Title, Left, Right} from 'native-base';

class Aboutus extends Component {
    render(){
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

            <Text style={{alignSelf:'center', fontFamily:'cursive', fontSize:35}}>About Us</Text>
            <Text style={{alignSelf:'center', fontFamily:'sans-serif', fontSize:25}}> Our Team</Text>

            <Card>

            <Card>
            
            <CardItem cardBody>
              <Image source={require('../images/majid.jpg')} style={{resizeMode:'contain',height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              
              <Body>
                <Text style={{alignSelf:'center',fontWeight:'bold', fontSize:25}}>MAJID NAWAZ</Text>
                <Text style={{alignSelf:'center'}}>Web Designer</Text>
              </Body>
              
            </CardItem>
          </Card>
            
            <CardItem cardBody>
              <Image source={require('../images/huzaifa.jpeg')} style={{resizeMode:'contain',height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              
              <Body>
                <Text style={{alignSelf:'center',fontWeight:'bold', fontSize:25}}>HUZAIFA KAMRAN</Text>
                <Text style={{alignSelf:'center'}}>Web Developer</Text>
              </Body>
              
            </CardItem>
          </Card>

          <Card>
            
          <CardItem cardBody>
            <Image source={require('../images/momo.jpeg')} style={{resizeMode:'contain',height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            
            <Body>
              <Text style={{alignSelf:'center',fontWeight:'bold', fontSize:25}}>MARYAM KHAN</Text>
              <Text style={{alignSelf:'center'}}>Back-End Developer</Text>
            </Body>
            
          </CardItem>
        </Card>

          

          <Card>
            
            <CardItem cardBody>
              <Image source={require('../images/soha.jpeg')} style={{resizeMode:'contain',height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              
              <Body>
                <Text style={{alignSelf:'center',fontWeight:'bold', fontSize:25}}>SOHA KHALID</Text>
                <Text style={{alignSelf:'center'}}>Front-End Developer</Text>
              </Body>
              
            </CardItem>
          </Card>

        


        </Content>
        </Container>

        
    )
}
}

export default Aboutus;