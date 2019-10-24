import React, {Component} from 'react';
import { Image } from 'react-native';
import {Button, Container, Header, Content,Item,Label,Input,Picker,Icon,Text,Form,Body, Title, Left, Right} from 'native-base';

class Signup extends Component {

      constructor(props) {
            super(props);
            this.state = {
              selected2: undefined
            };
          }
          onValueChange2(value) {
            this.setState({
              selected2: value
            });
          }

  render() {
    return (

      <Container>

      

      <Header style={{backgroundColor:'#28A745'}}>
 
       <Left/>
        <Body>
         <Title>Venue Club</Title>
        </Body>
        <Right/>
        </Header>

       <Content padder style={{ padding: 7 }}>

        <Image
          style={{width: 170, height: 250, alignSelf:"center"}} 
          source={require('../images/final_logo.png')}  />

        <Text>{"\n"}</Text>

         

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
              <Label >Enter Email</Label>
              <Input keyboardType="email-address" />

       </Item>

       <Item floatingLabel last>
              <Label >Enter Password</Label>
              <Input secureTextEntry={true} />
        </Item>

        <Item floatingLabel last>
        <Label >Confirm Password</Label>
        <Input secureTextEntry={true} />
      
        </Item>

        <Item floatingLabel last>
              <Label >Phone Number</Label>
              <Input keyboardType="name-phone-pad" />
      
        </Item>

        <Text>{"\n"}</Text>

        <Item picker>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          style={{ width: undefined }}
          placeholder="Select your Account"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.selected2}
          onValueChange={this.onValueChange2.bind(this)}
        >
          <Picker.Item label="Select Your Account Type" />
          <Picker.Item label="User" value="user" />
          <Picker.Item label="Hall Owner" value="hallowner" />
          
        </Picker>
      </Item>
            


        </Form>
      

        <Text style={{textAlign:"center", marginTop:40, color:"#a8a8a8"}}>By signing up, I agree to Venue Club's Terms of Service, Privacy Policy, Guest Refund Policy, and Host Guarantee Terms.

        </Text>
        <Text>{"\n"}</Text>

        <Button  onPress={() => this.props.navigation.navigate('Home')} block style={{width: 200 , backgroundColor: '#28A745', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text>Sign up</Text></Button>

              </Content>

      </Container>
  );
}

}

export default Signup;