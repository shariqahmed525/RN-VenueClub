import React, {Component} from 'react';
import { Image } from 'react-native';
import {Button, Container, Header, Content,Item,Label,Input,Picker,Icon,Text,Form,Body, Title, Left, Right} from 'native-base'; 
import firebase from '../config/firebase.js'
import AsyncStorage from '@react-native-community/async-storage';

class Signup extends Component {

      constructor(props) {
            super(props);
            this.state = {
              
              DropdownIsVisible: false,
              disable:false,
              fName: '',
              lName: '',
              email: '',
              phoneNumber: '',
              password: '',
              confirmPassword: '',
              accountType: '',
              paymentType: '',
              numberType: '',
              secQuestion:'',
              secAnswer:''
            };
          }
        
          updateAccount(v){
             
            if (v == 2) {
              this.setState({ DropdownIsVisible: true ,accountType:v,selected3:true})
          }
          else if (v == 1) {
              this.setState({ DropdownIsVisible: false,accountType:v})
          }
          this.setState({
            selected2: v
           
            
          });
  
          }
          onValueChange2(value) {
            this.setState({
              selected3: value 
             
            });
          }
        
    signup(){
     const {email ,fName,lName,phoneNumber,password,confirmPassword,accountType,paymentType,numberType,secQuestion,secAnswer} = this.state;
     if(email.length<1 || password.length<1 || fName.length<1 || lName.length<1 || phoneNumber.length<1 || confirmPassword.length<1 || secQuestion.length<1 || secAnswer.length<1 ){
       alert('Fill All textfield(s)')
     }
     else if(accountType == 2){
       if(paymentType.length<1 || numberType.length<1){
         alert('Fill both textfield(s)')
       }
       else{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
        var skey =   firebase.database().ref('users').child(`${res.user.uid}`);
    
          var obj = {
            uid : skey.key ,
            fName: fName,
            lName: lName,
            email: email,
            phoneNumber: phoneNumber,
            password: password ,
            confirmPassword:confirmPassword ,
            accountType: accountType,
            paymentType:paymentType ,
            numberType: numberType,
            secQuestion:secQuestion,
            secAnswer:secAnswer
          }
    
          skey.set(obj)
          AsyncStorage.setItem('user',obj)
          alert('signup successfully')
          this.props.navigation.navigate('OwnerHome');
          }
      ).catch(error=>{
        alert(error)
      })
     }

    }
    else{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
      var skey =   firebase.database().ref('users').child(`${res.user.uid}`);
  
        var obj = {
          uid : skey.key ,
          fName: fName,
          lName: lName,
          email: email,
          phoneNumber: phoneNumber,
          password: password ,
          confirmPassword:confirmPassword ,
          accountType: accountType,
          paymentType:paymentType ,
          numberType: numberType,
          secQuestion:secQuestion,
          secAnswer:secAnswer
        }
  
        skey.set(obj)
        AsyncStorage.setItem('user',obj)
        alert('signup successfully')
        this.props.navigation.navigate('Home');
        }
    ).catch(error=>{
      alert(error)
    })
    }      
  }
  render() {

    const {email ,fName,lName,phoneNumber,password,confirmPassword,accountType,paymentType,numberType,secQuestion,secAnswer,DropdownIsVisible} = this.state;

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
              <Input value={fName} onChangeText={(txt)=>this.setState({fName : txt})}/>

        </Item>

        
        <Item floatingLabel last>
              <Label >Last Name</Label>
              <Input  value={lName} onChangeText={(txt)=>this.setState({lName : txt})}/>
            
        </Item>


       <Item floatingLabel last>
              <Label >Enter Email</Label>
              <Input keyboardType="email-address" value={email} onChangeText={(txt)=>this.setState({email : txt})}/>

       </Item>

       <Item floatingLabel last>
       <Label >Phone Number</Label>
       <Input keyboardType="name-phone-pad" value={phoneNumber} onChangeText={(txt)=>this.setState({phoneNumber : txt})}/>

      </Item>

       <Item floatingLabel last>
              <Label >Enter Password</Label>
              <Input secureTextEntry={true}  value={password} onChangeText={(txt)=>this.setState({password : txt})} />
        </Item>

        <Item floatingLabel last>
        <Label >Confirm Password</Label>
        <Input secureTextEntry={true} value={confirmPassword} onChangeText={(txt)=>this.setState({confirmPassword : txt})}/>
      
        </Item>

        <Item floatingLabel last>
        <Label >Security Question</Label>
        <Input  value={secQuestion} onChangeText={(txt)=>this.setState({secQuestion : txt})}/>
        </Item>

        <Item floatingLabel last>
        <Label >secAnswer</Label>
        <Input  value={secAnswer} onChangeText={(txt)=>this.setState({secAnswer : txt})}/>

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
          selectedValue={this.state.accountType}
          onValueChange={(value) =>{
            this.updateAccount(value)
          }}  >

          <Picker.Item label="Select Your Account Type" />
          <Picker.Item label="User" value="1" />
          <Picker.Item label="Hall Owner" value="2" />
          
        </Picker>
      </Item>
            {DropdownIsVisible && 
      <Form>
         <Item picker>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          style={{ width: undefined }}
          placeholder="Select your Account"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.selected3}
          value={paymentType}
          onValueChange={(value)=>{
            this.onValueChange2(value)
            
          }}
        >
          <Picker.Item label="Select Your Payment Type" />
          <Picker.Item label="Jazz Cash" value="3"/>
          <Picker.Item label="Easy Paisa" value="4" />
          
        </Picker>
      </Item>

      <Item floatingLabel last>
              <Label >Enter Your Account Phone Number</Label>
              <Input keyboardType="name-phone-pad" value={numberType} onChangeText={(txt)=>this.setState({numberType : txt})}/>

        </Item>
        </Form>
        
    }


        </Form>
      

        <Text style={{textAlign:"center", marginTop:40, color:"#a8a8a8"}}>By signing up, I agree to Venue Club's Terms of Service, Privacy Policy, Guest Refund Policy, and Host Guarantee Terms.

        </Text>
        <Text>{"\n"}</Text>

        <Button  onPress={() => this.signup()} block style={{width: 200 , backgroundColor: '#28A745', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text>Sign up</Text></Button>

              </Content>

      </Container>
  );
}

}

export default Signup;