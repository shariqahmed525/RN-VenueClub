import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content } from 'native-base';


class SplashScreen extends Component {

  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.replace('Login')
    }, 3000
    );
  }


  render() {
    return (
      <Container style={{ backgroundColor: '#000000', flexDirection: 'row', alignItems: 'center' }}>

        <Content>
          <Image style={{ width: 200, height: 300, resizeMode: 'contain', alignSelf: 'center' }}
            source={require('../images/final_logo.png')}
          />
        </Content>

      </Container>

    );
  }

}

export default SplashScreen;