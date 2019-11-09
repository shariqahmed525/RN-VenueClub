import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Button, Container, Header, Content, Item, Label, Input, Picker, Icon, Text, Form, Body, Title, Left, Right } from 'native-base';

class Aboutus extends Component {
  render() {
    return (
      <Container>
        <Content style={{ paddingHorizontal: 10, }}>
          <Text style={{ alignSelf: 'center', fontFamily: 'cursive', fontSize: 35, marginVertical: 20, }}> Our Team</Text>
          <Card style={{ marginVertical: 20, }}>
            <CardItem cardBody>
              <Image source={require('../images/majid.jpg')} style={{ resizeMode: 'contain', height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 25 }}>MAJID NAWAZ</Text>
                <Text style={{ alignSelf: 'center' }}>Web Designer</Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{ marginVertical: 20, }}>
            <CardItem cardBody>
              <Image source={require('../images/huzaifa.jpeg')} style={{ resizeMode: 'contain', height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>

              <Body>
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 25 }}>HUZAIFA KAMRAN</Text>
                <Text style={{ alignSelf: 'center' }}>Web Developer</Text>
              </Body>

            </CardItem>
          </Card>
          <Card style={{ marginVertical: 20, }}>

            <CardItem cardBody>
              <Image source={require('../images/momo.jpeg')} style={{ resizeMode: 'contain', height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>

              <Body>
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 25 }}>MARYAM KHAN</Text>
                <Text style={{ alignSelf: 'center' }}>Back-End Developer</Text>
              </Body>

            </CardItem>
          </Card>
          <Card style={{ marginVertical: 20, }}>

            <CardItem cardBody>
              <Image source={require('../images/soha.jpeg')} style={{ resizeMode: 'contain', height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>

              <Body>
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 25 }}>SOHA KHALID</Text>
                <Text style={{ alignSelf: 'center' }}>Front-End Developer</Text>
              </Body>

            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default Aboutus;