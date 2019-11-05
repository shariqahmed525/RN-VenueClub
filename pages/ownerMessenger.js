import React, {Component} from 'react';
import { Image } from 'react-native';
import {Button,Icon, Container, Header, Content,Item,Input,FooterTab,Text,Footer,Body, Title, Left, Right} from 'native-base';

class OwnerMessenger extends Component {
    render() {
        return(
            <Container>
            
            <Header style={{backgroundColor:'#28A745'}}>
            <Left>
            <Button iconLeft transparent onPress={() => this.props.navigation.navigate('OwnerContactList')}>
            <Icon name='arrow-back' />
            
          </Button>
            </Left>
            
            <Body>
            
            <Title>Venue Club</Title>
            </Body>
            <Right/>
            </Header>

            <Content padder style={{padding:7}}>

              <Text style={{backgroundColor: '#90ee90', alignSelf:'flex-start',width:180 , borderColor:'#000000', borderWidth:1, padding:2}}>Hello</Text>
              <Text>{"\n"}</Text>
              <Text style={{backgroundColor: '#87cefa', alignSelf:'flex-end' , width:180 , borderColor:'#000000', borderWidth:1, padding:2}}>Hi</Text>
              
        {/* { contactsArray.map((val , ind) => {
                return(
            
            <List>
                <ListItem avatar>
              <Left>
                <Thumbnail source={val.image} />
              </Left>
              <Body>
                <Text>{val.name}</Text>
                <Text note>{val.message}</Text>
              </Body>
              
            </ListItem>
          </List>
                )})} */}
                
            </Content>

            <Footer>

              <FooterTab style={{backgroundColor:'#ffffff'}}>

                <Item regular style={{flex:0.75}}>
                  <Input placeholder='Type a message' />
                </Item>
                <Button block style={{ backgroundColor: '#28A745', flex: 0.25}}><Text style={{color:'#ffffff'}}>Send</Text></Button>
              </FooterTab>
    
            </Footer>
            </Container>

            )
    }
}

export default OwnerMessenger;