import React, { Component } from 'react';
import { Button, Icon, Container, Header, Content, Item, Input, FooterTab, Text, Footer, Body, Title, Left, Right } from 'native-base';
import { OfficialColor } from '../constants/colors';

let Messenger = () => {
  return (
    <Container>
      <Content padder style={{ padding: 7 }}>
        <Text style={{ backgroundColor: '#90ee90', alignSelf: 'flex-start', width: 180, borderColor: '#000000', borderWidth: 1, padding: 2 }}>Hello</Text>
        <Text>{"\n"}</Text>
        <Text style={{ backgroundColor: '#87cefa', alignSelf: 'flex-end', width: 180, borderColor: '#000000', borderWidth: 1, padding: 2 }}>Hi</Text>
      </Content>
      <Footer>
        <FooterTab style={{ backgroundColor: '#ffffff' }}>
          <Item regular style={{ flex: 0.75 }}>
            <Input placeholder='Type a message' />
          </Item>
          <Button block style={{ backgroundColor: '#28A745', flex: 0.25 }}><Text style={{ color: '#ffffff' }}>Send</Text></Button>
        </FooterTab>
      </Footer>
    </Container >
  )
};

Messenger.navigationOptions = () => ({
  title: "Messenger Name",
  headerTitleStyle: {
    textAlign: 'center',
    color: "#fff",
  },
  headerTintColor: "#fff",
  headerTitleContainerStyle: {
    justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: OfficialColor,
  },
  headerRight: <></>,
});

export default Messenger;