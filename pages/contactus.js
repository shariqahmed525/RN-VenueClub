import React, {Component} from 'react';
import { Image } from 'react-native';
import {Textarea,Button, Container, Header, Content,Item,Label,Input,Picker,Icon,Text,Form,Body, Title, Left, Right} from 'native-base';

class Contactus extends Component {
    render() {
        return(

            <Container>
            
            <Header style={{backgroundColor:'#28A745'}}>
 
            <Left/>
            <Body>
            <Title>Venue Club</Title>
            </Body>
            <Right/>
            </Header>
        
            <Content>
            
                <Text style={{alignSelf:'center', fontSize:35, fontWeight:'bold',fontFamily:'cursive'}}>Contact Us</Text>

                <Form>

        <Item floatingLabel last>
              <Label >Your Name</Label>
              <Input />

        </Item>

        
        <Item floatingLabel last>
              <Label >Your Email</Label>
              <Input  />
            
        </Item>


       <Item floatingLabel last>
              <Label >Subject</Label>
              <Input keyboardType="email-address" />

       </Item>

       <Text>{'\n'}</Text>

       <Textarea style={{margin:10}} rowSpan={5} bordered placeholder="Your Message" />
            </Form>

            <Button block style={{width: 200 , backgroundColor: '#28A745', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text>Send</Text></Button>



            </Content>
            </Container>

        )
    }
}

export default Contactus;