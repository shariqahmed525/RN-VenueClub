import React, {Component} from 'react';
import { Image } from 'react-native';
import {Button, Container,Textarea, Header, Content,Item,Label,Input,Picker,Icon,Text,Form,Body, Title, Left, Right} from 'native-base';

class OwnerRegistration extends Component {

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
  onValueChange3(value) {
    this.setState({
      selected3: value
    });
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
        
        <Content>

        <Text style={{alignSelf:'center', fontFamily:'sans-serif', fontWeight:'bold', fontSize:30}}>Registration Form</Text>
        
        <Form>
        
        <Item floatingLabel last>
              <Label >Hall Name</Label>
              <Input />

        </Item>

        <Item floatingLabel last>
              <Label >Address</Label>
              <Input />

        </Item>

        <Item floatingLabel last>
              <Label >Capacity</Label>
              <Input />

        </Item>

        <Item floatingLabel last>
              <Label >Price</Label>
              <Input />

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
          <Picker.Item label="Select Venue Type" />
          <Picker.Item label="Hall" value="hall" />
          <Picker.Item label="Lawn" value="lawn" />
          <Picker.Item label="Banquet" value="banquet" />
          
        </Picker>
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
        selectedValue={this.state.selected3}
        onValueChange={this.onValueChange3.bind(this)}
      >
        <Picker.Item label="Select Venue Location" />
        <Picker.Item label="Nazimabad" value="nazimabad" />
        <Picker.Item label="North Nazimabad" value="north nazimabad" />
        <Picker.Item label="Gulshan" value="gulshan" />
        
        </Picker>
      </Item>
      
      <Textarea style={{margin:5, marginTop:20}} rowSpan={5} bordered placeholder="Add Description" />
        </Form>
        <Button block style={{width: 200 , backgroundColor: '#d3d3d3', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text>Choose File</Text></Button>
        <Button block style={{width: 200 , backgroundColor: '#28A745', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text>Register</Text></Button>

        </Content>
        
        </Container>

        )
    }
} 

export default OwnerRegistration;