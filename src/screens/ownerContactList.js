import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Container, Header, Content, ListItem, List, Thumbnail, Icon, Text, Form, Body, Title, Left, Right } from 'native-base';

class OwnerContactList extends Component {

  constructor() {
    super();

    this.state = {
      contactsArray: []
    }

  }

  displayContacts() {
    const { contactsArray } = this.state;
    contactsArray.push({ image: require('../images/hall1.jpg'), name: 'Lovely', message: 'Hello nice to meet you' });
    contactsArray.push({ image: require('../images/hall2.jpg'), name: 'Madni', message: 'Hello nice to meet you' });
    contactsArray.push({ image: require('../images/hall3.jpg'), name: 'Sweet', message: 'Hello nice to meet you' });

  }

  render() {
    const { contactsArray } = this.state;
    this.displayContacts();

    return (
      <Container>
        <Content style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
          {contactsArray.map((val, ind) => {
            return (

              <List>
                <ListItem avatar onPress={() => this.props.navigation.navigate('OwnerMessenger')}>
                  <Left>
                    <Thumbnail source={val.image} />
                  </Left>
                  <Body>
                    <Text>{val.name}</Text>
                    <Text note>{val.message}</Text>
                  </Body>

                </ListItem>
              </List>
            )
          })}




        </Content>
      </Container>
    )
  }
}

export default OwnerContactList;