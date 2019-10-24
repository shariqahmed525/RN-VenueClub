import React, {Component} from 'react';
import { Image} from 'react-native';
import {Button, Container, Header, Content,Item,Label,Input,Text,Icon,Form,Body, Title, Left, Right, Thumbnail, Toast} from 'native-base';

class Login extends Component {

  render(){
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
          
          style={{width: 170, height: 250 , alignSelf:"center"}} 
          source={require('../images/final_logo.png')} />

        <Text>{"\n"}</Text>

        <Form>

        <Item floatingLabel last>
              <Label >Enter Email</Label>
              <Input keyboardType="email-address" />


            </Item>

            <Item floatingLabel last>
              <Label >Enter Password</Label>
              <Input secureTextEntry={true} />
            </Item>


        </Form>

        

        <Text style={{color:'#14c2e0', alignSelf:"flex-end", marginTop:20}}> Forgot Password ?</Text>
            


        <Button  onPress={() => this.props.navigation.navigate('Home')} block style={{width: 200 , backgroundColor: '#28A745', alignSelf:'center', marginTop: 30}}><Text>Login</Text></Button>

        <Text>{"\n"}</Text>


      
        <Button transparent style={{alignSelf:"center", width:350 }} onPress={()=> alert("fb login")}>
          <Thumbnail square source={require('../images/facebook.png')} style={{ width:350 , height:250 , alignSelf:"center" }} />
      
        </Button>

        

        
        <Button transparent style={{alignSelf:"center", width:350 ,marginTop:20  }} onPress={()=> alert("fb login")}>
          <Thumbnail square source={require('../images/google.png')} style={{ width:350 ,height:250 ,alignSelf:"center" }} />
      
        </Button>

        

        <Text>{"\n"}</Text>
        <Text style={{alignSelf:"center"}}>{"Don't have an account yet ?"}<Text style={{color:'#14c2e0'}} onPress={() => this.props.navigation.navigate('Signup')} > Click Here</Text> </Text>

        <Text>{"\n"}</Text>

        </Content>
      
    </Container>
  );
  }
}

export default Login;