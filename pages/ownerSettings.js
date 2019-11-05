import { withNavigation } from 'react-navigation';
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Content,Icon, Left, Right,Body, Input,Label, Container, Header,Title, Form, Item,Button} from 'native-base';

class OwnerSettings extends Component {

  constructor(props){
    super(props);
}
 

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
        
        <Content style={{marginTop:20}}>
            <Text style={{textAlign:'center', fontSize:30}}>Edit Contact Information</Text>

            <Form>

            <Item floatingLabel last>
                  <Label >First Name</Label>
                  <Input />
    
            </Item>
    
            
            <Item floatingLabel last>
                  <Label >Last Name</Label>
                  <Input  />
                
            </Item>
    
    
           <Item floatingLabel last>
                  <Label >Enter Password</Label>
                  <Input secureTextEntry={true} />
            </Item>
    
            <Item floatingLabel last>
            <Label >Phone</Label>
            <Input secureTextEntry={true} />
          
            </Item>
    
          
          
            </Form>

            <Button block style={{width: 200 , backgroundColor: '#28A745', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text style={{color:'#ffffff'}}>Update</Text></Button>

            <Text>{'\n'}</Text>

            <Text style={{textAlign:'center', fontSize:30}}>Change Password</Text>

            <Form>

            <Item floatingLabel last>
                  <Label >New Password</Label>
                  <Input />
    
            </Item>
    
            
            <Item floatingLabel last>
                  <Label >Confirm Password</Label>
                  <Input  />
                
            </Item>
            </Form>
            <Button block style={{width: 200 , backgroundColor: '#28A745', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text style={{color:'#ffffff'}}>Change Password</Text></Button>
            
            <Text>{'\n'}</Text>

            <Text style={{textAlign:'center', fontSize:30}}>Delete Account</Text>
            <Button block style={{width: 200 , backgroundColor: '#FF0000', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text style={{color:'#ffffff'}}>Delete Account</Text></Button>
            

        </Content>
        </Container>

            
        )
    }}

export default withNavigation(OwnerSettings);