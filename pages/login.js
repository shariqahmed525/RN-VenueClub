import React, {Component} from 'react';
import {Container, Content, Button, Text} from 'native-base';

class Login extends Component {

  render() {
    return (
      <Container>
        <Content>
            <Text>LOGIN</Text>
            <Button onPress={()=> this.props.navigation.navigate('Signup')}><Text>Go to Second Page</Text></Button>
        </Content>
      </Container>
    );
  }
  
}

export default Login;