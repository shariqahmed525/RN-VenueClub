import React, {Component} from 'react';
import {Container, Content, Button, Text, Left} from 'native-base';

class Login extends Component {

  render() {
    return (
      <Container>
        <Content padder style={{padding: 7}}>
            <Text>LOGIN</Text>
            
            <Button block style={{width: 200, margin: 3}} onPress={()=> this.props.navigation.navigate('Signup')}><Text>Go to Second Page</Text></Button>
            
          </Content>
      </Container>
    );
  }
  
}

export default Login;