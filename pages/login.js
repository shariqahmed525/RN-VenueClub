import React, {Component} from 'react';
import { Image} from 'react-native';
import {Button, Container, Header, Content,Item,Label,Input,Text,Icon,Form,Body, Title, Left, Right, Thumbnail, Toast} from 'native-base';
import { connect } from 'react-redux';
import {LoginDetail} from '../store/action/action.js';
import firebase from '../config/firebase.js';
import AsyncStorage from '@react-native-community/async-storage';


class Login extends Component {

  constructor() {
    super();
    this.state={
      
      email : '',
      password : '',
    }
   
  }
  async storeData(val){
    try {
      await AsyncStorage.setItem('user',val );
    } catch (e) {
      console.log(e)
    }
  }
   login() {
    const { email, password } = this.state

    if (email === '' || password === '') {
        alert('Enter both textfield(s)')
    }
    else if (email != email || password != password) {
        alert('Please Enter correct Email or Password')
    }
    else {
        this.setState({
            disable: false
        })
         firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                firebase.database().ref('users').child(`${res.user.uid}`).once('value', (childsnap) => {
                  // value.forEach(childsnap => {
                    console.log('my val' , childsnap.val())
                    var val1 = childsnap.val()
                    //  val1['key'] = value.key
                    this.storeData(val1);
                    alert('login successfull')
                     if (val1.accountType === "1") {
                       this.props.navigation.navigate('Home')
                    } 
                    else if (val1.accountType === '2'){
                      this.props.navigation.navigate('OwnerHome')
                    }
                  })
                   
                // }) 
             
                this.setState({
                    email: '',
                    password: '',
                    disable: false
                })
            })
            .catch((error) => {
                alert('something went wrong' + error)

            });
    }
}

facebookLogin() {
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider)
      .then((result) => {
          if (result.additionalUserInfo.isNewUser) {
              this.setState({
                  obj2: {
                      fName: result.additionalUserInfo.profile.first_name,
                      lName: result.additionalUserInfo.profile.last_name,
                      email: result.user.email,
                      uid: result.user.uid,
                  },
                  email: result.user.email,
                  phoneNumber: result.user.phoneNumber
              })
          }
          else {
              firebase.database().ref('users').child(`${result.user.uid}`).once('value', (value) => {
                  var val1 = value.val()
                  val1['key'] = value.key
                  
                  alert('login successfull')
                  if (val1.accountType === "1") {
                      this.props.navigation.navigate('Home')
                  }
                  else {
                    this.props.navigation.navigate('OwnerHome')
                  }
              })
          }
      })
      .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
      });
}

    
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
              <Input keyboardType="email-address" onChangeText={(txt) => this.setState({ email : txt })}  value={this.state.email} />


            </Item>

            <Item floatingLabel last>
              <Label >Enter Password</Label>
              <Input secureTextEntry={true} onChangeText={(txt) => this.setState({ password : txt })}  value={this.state.password}/>
              </Item>


        </Form>

        

        <Text style={{color:'#14c2e0', alignSelf:'flex-end'}}  onPress={() => this.props.navigation.navigate('ForgetPassword')}>Forget Password ?</Text> 

            


        <Button  onPress={() => this.login()} block style={{width: 200 , backgroundColor: '#28A745', alignSelf:'center', marginTop: 30}}><Text>Login</Text></Button>

        <Text>{"\n"}</Text>


      
      

        

       
        <Text style={{alignSelf:"center"}}>{"Don't have an account yet ?"}<Text style={{color:'#14c2e0'}} onPress={() => this.props.navigation.navigate('Signup')} > Click Here</Text> </Text>

        <Text>{"\n"}</Text>

        </Content>
      
    </Container>
  );
  }
}
function mapStateToProp(state) {
  return ({
    // jb class me data mangwana hota hy store se
  })
}
function mapDispatchToProp(dispatch) {
  return ({
     // jb class se data store me bhejna hota hai
     loginInfo : (info)=>{ dispatch(LoginDetail(info))} 
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(Login);